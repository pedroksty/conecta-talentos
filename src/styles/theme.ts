import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#181b23',
      800: '#1f2029',
      700: '#353646',
      600: '#4b4d63',
      500: '#636480',
      400: '#797d9a',
      300: '#9699b0',
      200: '#b3b5c6',
      100: '#d1d2dc',
      50: '#eeeef2',
      10: '#F0F0F5'
    },
    purple: {
      800: '#312351'
    },
    green: {
      500: '#37BA75',
      400: '#3CCA7E'
    }
  },
  fonts: {
    heading: 'kanit',
    body: 'kanit'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.10',
        color: 'purple.800'
      }
    }
  }
})
