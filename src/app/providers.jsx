'use client';
import { ThemeProvider } from "./components/MaterialTailwind"
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { WagmiProvider } from 'wagmi';
import '@rainbow-me/rainbowkit/styles.css';

import {
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { wagmiConfig } from "./config";


export default function Providers({ children }) {
  const queryClient = new QueryClient();

  return (
   
        <ThemeProvider>
          <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={ queryClient }>
              <RainbowKitProvider
                theme={lightTheme({
                  accentColor: '#235789',
                  accentColorForeground: 'white',
                  borderRadius: 'medium',
                  fontStack: 'system',
                })}
              >
                {children}
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </ThemeProvider>
  );
}

