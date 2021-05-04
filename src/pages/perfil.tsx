import { Header } from '@/components/Header'
import { useAuth } from '@/hooks/auth'
import { Flex, Text, Image, Avatar, Box, VStack, Button, Icon } from '@chakra-ui/react'
import { FaPen } from 'react-icons/fa'

export default function Perfil() {
  const { user } = useAuth()

  return (
    <Flex
      h="100vh"
      direction="column"
      bg="gray.50"
    >
      <Header />

      <Flex
        w="100%"
        my="6"
        bg="white"
        maxWidth={1400}
        mx="auto"
        rounded="8"
      >

        <Flex
          direction="column"
          rounded="8"

        >

          <Box position="relative">
            <Image roundedTop="8" src="/images/profile-background.jpeg" />

            <Avatar
              position="absolute"
              src={user.avatar_url}
              w="48"
              h="48"
              bottom="-24"
              left="16"
              borderColor="white"
              border="solid"
            />

          </Box>

          <Flex
            direction="row"
            pt="28"
            pb="16"
            px="16"
            position="relative"
          >

            <Button
              position="absolute"
              top="8"
              right="8"
            >
              <FaPen size="18" />
            </Button>

            <VStack
              display="flex"
              spacing={0.1}
              justify="flex-start"
              align="start"

            >
              <Text fontWeight="bold" fontSize="28" >Pedro henrique</Text>
              <Text fontWeight="normal" fontSize="20" >Full Stack developer at INTERAS Gestão e Tecnologia</Text>
              <Text fontWeight="normal" color="gray.500">Natal, Rio Grande do Norte, Brasil </Text>
            </VStack>
          </Flex>

        </Flex>

      </Flex>
    </Flex>
  )
}
