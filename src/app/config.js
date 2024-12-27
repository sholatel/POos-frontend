import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
    //mainnet,
    //arbitrum,
    //arbitrumSepolia,
    //arbitrumGoerli,
    //sepolia,
    //goerli,
} from 'wagmi/chains';
import { neoX } from "./Data/chains";


export const wagmiConfig = getDefaultConfig({
    appName: 'PoOs',
    projectId: 'df01c1b1561c6373ef84c87b27c8ea8c',
    //chains: [ sepolia ],
    chains: [ neoX ],
    ssr: true, // If your dApp uses server side rendering (SSR
});


export const API_URL = {
    API_URL: process.env.NODE_ENV === "development" ? "http://localhost:5000/api/" : process.env.NEXT_PUBLIC_FE_URL + "/api/",
    //PROD_URL: "https://y2sm8pjvyv.us-east-1.awsapprunner.com/api/",
}

export const POOS_FACTORY_CONRACT_ADDRESS = "0x8f2C0Ee732B384C1CACCacD300421ACB26FD233b"//"0xE1Fa53c9858FD7d08CFDF4335c189c94a3aA32B5" // "0xE1Fa53c9858FD7d08CFDF4335c189c94a3aA32B5"


export const FETCH_JSON_INIT = (payload = {}, method = "POST", contentType = "application/json") => {
    return {
        method: method, // *GET, POST, PUT, DELETE, etc.
        //mode: "cors", // no-cors, *cors, same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": contentType,
            "x-auth-token": localStorage.getItem("_poostoken_")
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(payload)
    }
}

export const FETCH_INIT = (method = "GET") => {
    return {
        method: method, // *GET, POST, PUT, DELETE, etc.
        //mode: "cors", // no-cors, *cors, same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
            //"Content-Type": contentType,
            "x-auth-token": localStorage.getItem("_poostoken_")
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }
}

export const FETCH_FORMDATA_INIT = (formData, method = "POST") => {
    return {
        method: method, // *GET, POST, PUT, DELETE, etc.
        //mode: "cors", // no-cors, *cors, same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "x-auth-token": localStorage.getItem("_poostoken_"),
            //"Content-Type": contentType,
            //'Content-Type': 'multipart/form-data',
        },
        //redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: formData
    }
}

//other configutations 