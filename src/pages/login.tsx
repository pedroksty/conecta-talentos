import { Flex, Box, Image, Text, Button, VStack, Link as ChakraLink, Icon, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/dist/client/router'
import { FiHome, FiLogIn } from 'react-icons/fi'

import { Select } from '../components/Form/select'
import { Input } from '../components/Form/input'
import { useAuth } from '../hooks/auth'

interface SignInFormData {
  email: string
  password: string
  select: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
  select: yup.string().required('Obrigatório')
})

export default function Login() {
  const router = useRouter()
  const toast = useToast()
  const { signIn } = useAuth()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async ({ email, password, select }) => {
    try {
      await signIn({
        email,
        password,
        type: select
      })

       toast({
          title: 'Sucesso!',
          description: 'Redirecionando para a página de perfil',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
      })

      router.push('/perfil')
    } catch (err) {
        console.log(err)
        toast({
          title: 'Falha!',
          description: 'Ops! verifique os dados digitados',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
    }
  }

  return (
    <Flex
      h="100vh"

      align="stretch"
    >

      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        maxW={700}

      >
        <Flex
          display="flex"
          direction="column"
          align="center"
          justify="center"
        >
          <Image src="/images/logo-text.svg" w={['60', '70', '80']} />

          <VStack
            as="form"
            w={340}
            align="center"
            textAlign="center"
            display="flex"
            justify="flex-start"
            spacing="4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <Text fontSize="32" color="green.700">Faça seu Login</Text>

            <Input
              name="email"
              type="email"
              error={errors.email}
              label="E-mail"
              {...register('email')}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />

            <Select name="select" placeholder="Selecione" {...register('select')} >
              <option value="user">Sou candidato</option>
              <option value="enterprise">Sou empresa</option>
            </Select>

            <Button
              type="submit"
              mt="6"
              colorScheme="green"
              size="lg"
              w="100%"
              isLoading={formState.isSubmitting}
            >
              Entrar
           </Button>

          </VStack>

          <Link href="/cadastro" passHref>
            <ChakraLink
              display="flex"

              mt="8"
            >
              <Box>
                 <Icon as={FiLogIn} fontSize={20} mr="4" color="green.700" />
              </Box>
               <Text color="green.700">Criar conta</Text>
            </ChakraLink>
          </Link>

          <Link href="/" passHref>
            <ChakraLink
              display="flex"

              mt="2"
            >
              <Box>
                 <Icon as={FiHome} fontSize={20} mr="4" color="green.700" />
              </Box>
               <Text color="green.700">Início</Text>
            </ChakraLink>
          </Link>

        </Flex>

      </Flex>

      <Box
        flex="1"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage="url('images/work.svg')"
      />

    </Flex>
  )
}
