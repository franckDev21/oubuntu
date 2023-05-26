import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import MainLayout from "@/components/layouts/MainLayout";

import AuthProvider from '@/context/AuthProvider';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    networkMode: "offlineFirst",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
