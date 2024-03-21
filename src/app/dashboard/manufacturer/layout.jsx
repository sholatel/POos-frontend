"use client";

import Image from "next/image";
import WalletLogo from "../../assets/images/wallet_logo.svg";
import { useAccount, useBalance } from "wagmi";
import formatWalletAddres
    from "../../utils/formatWalletAddress";
import { Typography } from "../../components/MaterialTailwind";
import SideNav from "./sideNav";
import Drawer from "./Drawer";
import { ConnectButton } from "../../components/Ranbowkit"

const DashboardLayout = ({ children }) => {
    const { isConnected, address, } = useAccount();
    const result = useBalance({
        address: address
    });


    return (
        <main className="flex min-h-screen overflow-y-none flex-col tabletland:flex-row relative">
            {/*  Side nav */}
            <div className=" hidden tabletland:block tabletland:w-[282px]">
                <SideNav />
            </div>
            {/*  Drawer  */}
            <div className="tabletland:hidden">
                <Drawer />
            </div>
            <div className="flex  w-full  flex-col px-[15px] md:px-[30px] tabletland:px-[65px] pt-8 tabletland:pt-[55px]">
                {
                    isConnected ?
                        <div className="self-end px-4 py-2 md:px-6 md:py-[10px] border rounded-[5px] border-[#4749354D] flex items-center space-x-[15px]">
                            <div className="w-[30px] h-[30px] rounded-full bg-[#47493533] flex  items-center justify-center">
                                <Image width={16} height={16} src={WalletLogo} alt="" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <Typography className="text-[#474935] font-semibold font-inter text-[16px] leading-[24px]">
                                    {result?.isFetched ? Number(result.data.formatted).toFixed(6) : ""} <span> {result?.isFetched ? result.data.symbol : ""}</span>
                                </Typography>
                                <Typography className="text-primary text-[12px] leading-[12px] font-inter">
                                    {formatWalletAddres(address)}
                                </Typography>
                            </div>
                        </div> : 
                        <div className="self-end" >
                            <ConnectButton showBalance={false} />
                        </div>
                }
                <div className="">
                    {children}
                </div>
            </div>
        </main>
    )
}


export default DashboardLayout;