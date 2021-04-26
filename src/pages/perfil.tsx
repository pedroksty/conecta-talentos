import { Header } from '@/components/Header'
import { Flex, Text } from '@chakra-ui/react'

export default function Perfil() {
  return (
    <Flex
      h="100vh"
      direction="column"
      bg="gray.50"
    >
      <Header />

      <Flex justifyContent="center" align="center" flex="1" >
        <Text fontSize="4xl" >Perfil</Text>
      </Flex>
    </Flex>
  )
}
