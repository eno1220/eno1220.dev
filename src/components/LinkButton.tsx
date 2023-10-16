import NextLink from 'next/link'

import { Button } from '@chakra-ui/react'

const LinkButton = ({
  href,
  icon,
  username,
  color,
}: {
  href: string
  icon: React.ReactElement
  username: string
  color: string
}) => {
  return (
    <Button
      leftIcon={icon}
      size='sm'
      variant={'ghost'}
      color={color}
      px={0.5}
      href={href}
      as={NextLink}
      fontWeight={'bold'}
      transition={'0.2s all'}
      _hover={{
        opacity: 0.75,
      }}
      _active={{
        opacity: 0.5,
      }}
    >
      {username}
    </Button>
  )
}

export default LinkButton
