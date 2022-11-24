import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { ModalWrapper } from '@front/components';

import { NavBar } from '../components/generic/navbar';

import './../../styles/global.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // 1 minute
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Yolo shop</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/yolo-logo.svg" type="image/svg+xml" />
    </Head>
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen flex-col">
        <NavBar />
        <ModalWrapper modalAnimation="move" outsideAnimation="blow">
          <Component {...pageProps} />
        </ModalWrapper>
      </div>
    </QueryClientProvider>
  </>
);

export default appWithTranslation(MyApp);
