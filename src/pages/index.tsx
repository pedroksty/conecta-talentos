import { Header } from '@/components/Header'
import Link from 'next/link'
import { Flex, Image, VStack, Text, Button, useBreakpointValue } from '@chakra-ui/react'

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex
      direction="column"
      h="100vh"
      backgroundSize={[0, 0, 400, 600, 1000]}
      backgroundRepeat="no-repeat"
      backgroundPosition="right"
      backgroundImage={isWideVersion ? "url('/images/image_home.svg')" : ''}
      backgroundAttachment="fixed"

    >
      <Header />

      <Flex
        w="100%"
        h="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="8"
        alig="center"
        justify="center"
      >

        <VStack
          h="100%"
          w="100%"
          direction="column"
          spacing="4"
          align={['center', 'center', 'initial']}
          px="8"
          justify="center"
        >

        <Text fontSize="44" maxW={540} textAlign={['center', 'center', 'initial']} color="purple.800">Sua plataforma de vagas de emprego.</Text>

        <Text color="gray.600" maxW={540} textAlign={['center', 'center', 'initial']} fontSize="30" >Ajudamos candidatos e empresas a se conectarem de forma eficiente</Text>

        <Link href="/cadastro" passHref >

          <Button
            as="a"
            bg="green.400"
            color="gray.10"
            _hover={{
              bg: 'green.500'
            }}
            w={['80', '80', 'sm']}
            h="16"
            display="flex"
          >
            <Image src="/images/signup.svg" w="8" mr="2" />

            <Text textAlign="center" color="white" >Cadastre seu currículo</Text>
          </Button>

        </Link>

        </VStack>

      </Flex>

    </Flex>
  )
}
