import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
    mainnet,
    arbitrum,
    arbitrumSepolia,
    arbitrumGoerli,
    sepolia,
    goerli
} from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
    appName: 'PoOs',
    projectId: 'df01c1b1561c6373ef84c87b27c8ea8c',
    chains: [ mainnet,arbitrum, arbitrumSepolia, arbitrumGoerli, sepolia, goerli],
    ssr: true, // If your dApp uses server side rendering (SSR
});


export const API_URL = {
    DEV_URL: "http://localhost:3000/api/",
    PROD_URL: "",
}

export const POOS_FACTORY_CONRACT_ADDRESS = "0x7938eD91c35cAB4182Bb21049A8067e329d93Da4";


export const FETCH_JSON_INIT = (payload={}, method = "POST", contentType= "application/json") => {
    return {
        method: method, // *GET, POST, PUT, DELETE, etc.
        //mode: "cors", // no-cors, *cors, same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": contentType,
        "x-auth-token":localStorage.getItem("_poostoken_")
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
        "x-auth-token":localStorage.getItem("_poostoken_")
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
            "x-auth-token":localStorage.getItem("_poostoken_"),
        //"Content-Type": contentType,
        //'Content-Type': 'multipart/form-data',
        },
        //redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: formData
        }
}

//other configutations 