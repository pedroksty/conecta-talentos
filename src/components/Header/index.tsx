import { useRouter } from 'next/router'
import Link from 'next/link'
import { useCallback } from 'react'
import { Flex, Text, Button, Avatar, Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react'
import { useAuth } from '../../hooks/auth'

import { Profile } from './Profile'

export function Header() {
  const { user } = useAuth()
  const router = useRouter()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="100%"
      maxWidth={1480}
      h="20"
      mt="4"
      px="6"
      mx="auto"
      align="center"
      justify="space-between"
      bg="gray.50"
    >
      <Flex
        h="100%"
        direction="row"
        align="center"
      >
        <Avatar size="xl" bg="transparent" src="/images/logo.svg" mr="8" />
        {isWideVersion && <Text textAlign="center" fontSize="4xl" lineHeight="1" letterSpacing="tight" >Conecta <br /> <strong>TALENTOS</strong> </Text>}
      </Flex>

      {!user && (<Flex
        h="100%"
        direction="row"
        align="center"
      >
        <Link href="/cadastro" passHref>

          <ChakraLink
            color="gray.600"
          >
            Cadastre-se agora
          </ChakraLink>

        </Link>

        <Link href="/login" passHref>

          <Button
            as="a"
            _hover={{
              bg: 'green.500'
            }}
            w="24"
            ml="8"
            bg="green.400"
            color="white"
          >Login</Button>

        </Link >

      </Flex>)} 

     {user && <Profile showProfileData={isWideVersion} name={user.name} email={user.email} src={user.avatar_url} />}
    </Flex>
  )
}
