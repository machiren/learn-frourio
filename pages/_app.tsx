import { ChakraProvider } from '@chakra-ui/react'
import * as Sentry from "@sentry/react";
import { Integrations } from '@sentry/tracing';
import { AppProps } from 'next/app'
import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    if(document){
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_KEY,
        autoSessionTracking: true,
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
      });
    }
  },[])
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
