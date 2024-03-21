"use client";

import Button from "@/app/components/Button";
import { Typography } from "../../../components/MaterialTailwind";
import { products } from "../data";
import Image from "next/image";
import { useState } from "react";
import CreateProductForm from "./CreateProductForm";

const Products = () => {
    const [openCreateProductModal, setOpenCreateProductModal] = useState(false);

    const handleAddProduct = () => {
        setOpenCreateProductModal(true);
    }

   

    return (
        <section className="min-h-full ">

            <div className="w-full flex justify-end mt-[71px]">
                <Button variant="filled" onClick={handleAddProduct}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_215_154)">
                            <path d="M21.5 1.5C21.8978 1.5 22.2794 1.65804 22.5607 1.93934C22.842 2.22064 23 2.60218 23 3V21C23 21.3978 22.842 21.7794 22.5607 22.0607C22.2794 22.342 21.8978 22.5 21.5 22.5H3.5C3.10218 22.5 2.72064 22.342 2.43934 22.0607C2.15804 21.7794 2 21.3978 2 21V3C2 2.60218 2.15804 2.22064 2.43934 1.93934C2.72064 1.65804 3.10218 1.5 3.5 1.5H21.5ZM3.5 0C2.70435 0 1.94129 0.316071 1.37868 0.87868C0.816071 1.44129 0.5 2.20435 0.5 3V21C0.5 21.7956 0.816071 22.5587 1.37868 23.1213C1.94129 23.6839 2.70435 24 3.5 24H21.5C22.2956 24 23.0587 23.6839 23.6213 23.1213C24.1839 22.5587 24.5 21.7956 24.5 21V3C24.5 2.20435 24.1839 1.44129 23.6213 0.87868C23.0587 0.316071 22.2956 0 21.5 0H3.5Z" fill="#FAFBFD" />
                            <path d="M12.5 6C12.6989 6 12.8897 6.07902 13.0303 6.21967C13.171 6.36032 13.25 6.55109 13.25 6.75V11.25H17.75C17.9489 11.25 18.1397 11.329 18.2803 11.4697C18.421 11.6103 18.5 11.8011 18.5 12C18.5 12.1989 18.421 12.3897 18.2803 12.5303C18.1397 12.671 17.9489 12.75 17.75 12.75H13.25V17.25C13.25 17.4489 13.171 17.6397 13.0303 17.7803C12.8897 17.921 12.6989 18 12.5 18C12.3011 18 12.1103 17.921 11.9697 17.7803C11.829 17.6397 11.75 17.4489 11.75 17.25V12.75H7.25C7.05109 12.75 6.86032 12.671 6.71967 12.5303C6.57902 12.3897 6.5 12.1989 6.5 12C6.5 11.8011 6.57902 11.6103 6.71967 11.4697C6.86032 11.329 7.05109 11.25 7.25 11.25H11.75V6.75C11.75 6.55109 11.829 6.36032 11.9697 6.21967C12.1103 6.07902 12.3011 6 12.5 6Z" fill="#FAFBFD" />
                        </g>
                        <defs>
                            <clipPath id="clip0_215_154">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    Add a Product
                </Button>
            </div>
            {/* products list */}
            <div className="flex   flex-row justify-center  gap-x-8 gap-y-8 tabletland:gap-x-[58px] tabletland:gap-y-[58px] mt-20 flex-wrap">
                {
                    products?.map((product, index) => (
                        <li key={index} style={{ boxShadow: "0px 1px 3px 0px #00000014" }}
                            className=" bg-white list-none  p-[14px] rounded-[5px] w-full md:w-[209px] h-[260px] space-y-1"
                        >
                            <Image
                                src={product?.image}
                                height={"150px"}
                                width={"100%"}
                                className="object-cover h-[150px] w-full rounded-[5px]"
                            />
                            <Typography className="text-primary mt-[15px] font-bold font-crimsonText text-[18px] leading-[22px] md:text-[20px] md:leading-[26px]">
                                {product?.name}
                            </Typography>
                            <Typography className="font-crimsonText mt-[15px] font-semibold break-all text-[16px] leading-[20px] md:text-[18px] md:leading-[26px] text-[#474935]">
                                {product?.amount_available} available
                            </Typography>
                            {
                                product?.price &&
                                <Typography className="text-[#474935] mt-[15px] font-semibold font-crimsonText text-[18px] leading-[22px] md:text-[20px] md:leading-[26px]">
                                    ${product?.price}
                                </Typography>
                            }
                        </li>
                    ))
                }
            </div>

           
            {/* Create product form */}
            <CreateProductForm open={openCreateProductModal} 
                setOpen={setOpenCreateProductModal}
            />
        </section>
    )
}

export default Products;
