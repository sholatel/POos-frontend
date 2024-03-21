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

//other configutations 