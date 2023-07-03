import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider as ChakraBaseProvider } from '@chakra-ui/provider'

import theme from '@/libs/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>eno1220.dev</title>
      </Head>
      <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </>
  )
}
