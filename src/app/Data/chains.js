import { Chain } from 'wagmi'

export const neoX = {
  id: 12227332,
  name: 'NeoX T4',
  network: 'NeoX T4',
  nativeCurrency: {
    decimals: 0,
    name: 'GAS',
    symbol: 'GAS',
  },
  rpcUrls: {
    public: { http: ['https://neoxt4seed1.ngd.network'] },
    default: { http: ['https://neoxt4seed1.ngd.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://xt4scan.ngd.network/' },
    default: { name: 'SnowTrace', url: 'https://xt4scan.ngd.network/' },
  },
  contracts: {
    multicall3: {
      address: '0x82096F92248dF7afDdef72E545F06e5be0cf0F99',
      //blockCreated: 11_907_934,
    },
  },
} //as const satisfies Chain
