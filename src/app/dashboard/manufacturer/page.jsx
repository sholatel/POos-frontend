"use client";

import Button from "@/app/components/Button";
import { Typography } from "../../components/MaterialTailwind";
import { stats, authentication, months, authentications } from "./data";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import AuthCharts from "./AuthChart";

const Dashboard = () => {
   // const router = useRouter();

    const TABLE_HEAD = ["No", "Product", "Date", "Product ID", "Requester", "Status",]
    const handleViewAll = () => {
        router.push("/dashboard/manufacturer/authentications")
    }

    return (
        <section className=" min-h-full ">

            {/* Stat */}
            <div className="flex   flex-row gap-x-8 gap-y-8 tabletland:gap-x-[58px] tabletland:gap-y-[58px] mt-20 flex-wrap">
                {
                    stats?.map((stat, index) => (
                        <li key={index} style={{ boxShadow: "0px 1px 3px 0px #00000014" }}
                            className=" bg-white flex flex-col list-none justify-center pl-7 rounded-[5px] w-[calc(50%-40px)] md:w-[214px] h-[156px] space-y-1"
                        >
                            {stat.icon}
                            <Typography className="text-primary font-bold font-crimsonText text-[21px] leading-[29px] md:text-[32px] md:leading-[41px]">
                                {stat.value}
                            </Typography>
                            <Typography className="font-oxygenMono break-all text-[10px] leading-4 md:text-[14px] md:leading-[18px] text-[#474935CC]">
                                {stat.name}
                            </Typography>
                        </li>
                    ))
                }
            </div>

            {/* Graph */}
            <div className="w-full flex flex-col rounded-[5px] min-h-[315px] bg-white mt-[47px] pt-[23px] pl-[37px]"
                style={{ boxShadow: "0px 1px 3px 0px #00000014" }}
            >
                <Typography className="text-primary font-crimsonText font-semibold text-[20px] leading-[26px] text-justify">
                    Authentications
                </Typography>
                <div className="">
                    {/* <Typography className="font-crimsonText font-bold text-[20px] leading-[26px]">Coming soon (Chat)</Typography> */}
                    <AuthCharts
                        labels={months}
                        values={authentications}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="w-full flex flex-col rounded-[5px] min-h-[315px] bg-white mt-[47px] pt-[23px] pl-[37px]"
                style={{ boxShadow: "0px 1px 3px 0px #00000014" }}
            >
                <div className="w-full flex items-center justify-between">
                    <Typography className="text-primary font-crimsonText font-semibold text-[20px] leading-[26px] text-justify">
                        Authentication Requests
                    </Typography>
                    <Button variant="text" onClick={handleViewAll}>
                        View all
                    </Button>
                </div>
                <div className="h-full max-h-[660px] w-full overflow-scroll pt-5">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-[#DCDCDC] bg-white p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {authentication.slice(0, 5).map(({ product, date, requester, id, status }, index) => (
                                <tr key={product} className="odd:bg-background">
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {index + 1}.
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {product}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {format(date, "P")}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {id}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-medium">
                                            {requester ? requester : "-"}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <div className={`${status === "passed" ? "bg-[#FFD7D7] text-[#ED5B75] " : "text-[#4FDFB1] bg-[#DCFCE7]"} rounded-[5px] p-[5px] w-fit text-center capitalize font-oxygen text-[14px] leading-[17px] `}>
                                            {status}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;
