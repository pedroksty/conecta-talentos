import { useCallback, useMemo } from 'react'
import { Flex, Box, Text, Avatar, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserTie, FaSignOutAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'

interface ProfileProps {
  showProfileData?: boolean
  name: string
  email: string
  src?: string
}

export function Profile({ showProfileData = true, name, email, src = null }: ProfileProps) {
  const { signOut } = useAuth()
  const router = useRouter()

  const defaultImageURL = useMemo(() => {
    return 'https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png'
  }, [])

  const goToProfile = useCallback(() => {
    router.push('/perfil')
  }, [router])

  return (
    <Flex align="center" >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            {name}
          </Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      )}

    <Avatar size="md" name={name} src={src || defaultImageURL} />

    <Menu>
     <MenuButton
      ml="2"
      as={IconButton}
      aria-label="Options"
      icon={<GiHamburgerMenu />}
      variant="outline"
     />
      <MenuList>
        <MenuItem icon={<FaUserTie />} onClick={goToProfile}>
          Perfil
        </MenuItem>
        <MenuItem icon={<FaSignOutAlt />} onClick={signOut} >
          Deslogar
        </MenuItem>
      </MenuList>
  </Menu>
  </Flex>
  )
}
