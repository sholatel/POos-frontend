"use client";

import React from "react";
import {
    //Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Spinner,
    Typography
} from "@/app/components/MaterialTailwind";
import { userContext } from "@/app/context/User";
import Button from "@/app/components/Button";
import { useWriteContract } from "wagmi";
import { POOS_FACTORY_CONRACT_ADDRESS } from "@/app/config";
import abi from "@/app/utils/abi";
import { toast } from "react-toastify";
import { updateUser } from "@/app/actions/auth";

const DeployContractDialog = () => {
    const [open, setOpen] = React.useState(false);
    const { user, setUser } = React.useContext(userContext);
    const { writeContract, isPending, reset } = useWriteContract()
    

    React.useEffect(() => {
         
        if ( user && (!(user?.contractAddress) || user?.isFirstTimeLogin)) {
            setOpen(true)
        }
    }, [user])

    const handleOpen = () => setOpen(!open);

    const deployERC1155 = () => {
        writeContract(
            {
                abi,
                address: POOS_FACTORY_CONRACT_ADDRESS,
                functionName: 'createNewPOoS',
                args: [
                    'http://localhost:5000/api/products/{id}',
                ],
            },
            {
                onSuccess: async(data) =>  {
                    localStorage.setItem("erc_1155_address",data);
                    //update user data with their smart contract 
                    const payload = { contractAddress:data}
                    const response = await updateUser(payload, user?._id);
                    const result = await response.json();
                    setUser(result?.singleUser);
                    setOpen(false)
                    toast.success("Congratulations! Your contract has been deployed. You can now mint the digitalized token of your product on the blockchain")
                    setOpen(false)
                }, 

                onError:(err) => {
                    console.log("Error", err)
                    setOpen(false)
                    toast.error("Oops! We couldn't deploy your contract. Please try again and ensure your wallet is connected with enough funds")
                }
            }
        )
    }

    
    return (
        <>

            <Dialog open={open} >
                <DialogHeader>Hello, {user?.name}</DialogHeader>
                <DialogBody>
                    {
                        isPending ?
                            <div className="flex flex-col items-center">
                                <Spinner color="#235789" className="h-10 w-10" />
                                <Typography className="mt-6 font-oxygen font-normal  text-center text-[16px] leading-[19px] md:text-[20px]  md:leading-[25px] text-[#474935]">
                                    Please wait, deployment process started
                                </Typography>
                            </div> :
                            `Are you ready to embark on the journey of ensuring the authenticity of your
                        products across the supply chain? If so, we'd like to seek your permission
                        to assist you in deploying your product's digital token smart contract on
                        the blockchain as part of the onboarding process.`
                    }
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        onClick={!isPending ? handleOpen : ()=>reset()}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                   {
                    !isPending &&
                    <Button variant="filled" color="#235789" onClick={deployERC1155}>
                    <span>Ok</span>
                    </Button>
                   }
                </DialogFooter>
            </Dialog>
        </>
    );
}


export default DeployContractDialog;
