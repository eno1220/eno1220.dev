import { Box, Button, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const Header = () => {
  return (
    <Box width='100%' display='flex' flexDirection='row' alignItems='center'>
      <Image
        borderRadius={'full'}
        boxSize={8}
        src='eno1220.webp'
        alt='avatar'
      />
      <Link fontSize='xl' ml={4} fontWeight='bold' href='/' as={NextLink}>
        eno1220.dev
      </Link>
    </Box>
  )
}

export default Header
