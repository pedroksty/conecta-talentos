import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import { AppProvider } from '../hooks'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (

      <ChakraProvider theme={theme} >

        <AppProvider>

          <Component {...pageProps} />

        </AppProvider>

      </ChakraProvider>

  )
}

export default MyApp
