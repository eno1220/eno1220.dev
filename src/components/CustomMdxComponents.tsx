import NextLink from 'next/link'

import {
  Heading,
  Link,
  OrderedList,
  UnorderedList,
  chakra,
} from '@chakra-ui/react'

const CustomMdxComponents = {
  h1: (props: JSX.IntrinsicElements['h1']) => (
    <Heading as='h1' mt={8} mb={4} size='2xl' {...props} />
  ),
  h2: (props: JSX.IntrinsicElements['h2']) => (
    <Heading as='h2' mt={8} mb={4} size='xl' {...props} />
  ),
  h3: (props: JSX.IntrinsicElements['h3']) => (
    <Heading as='h3' mt={2} mb={4} size='lg' {...props} />
  ),
  h4: (props: JSX.IntrinsicElements['h4']) => (
    <Heading as='h4' mt={2} mb={4} size='md' {...props} />
  ),
  h5: (props: JSX.IntrinsicElements['h5']) => (
    <Heading as='h5' mt={2} mb={4} size='sm' {...props} />
  ),
  h6: (props: JSX.IntrinsicElements['h6']) => (
    <Heading as='h6' mt={2} mb={4} size='xs' {...props} />
  ),
  a: (props: JSX.IntrinsicElements['a']) => {
    const { href, ...rest } = props
    const isInernalLink = href && (href.startsWith('/') || href.startsWith('#'))
    if (isInernalLink) {
      return <Link as={NextLink} href={href} {...rest} color='blue.500' />
    }
    return <Link href={href} color='blue.500' isExternal {...rest} />
  },
  blockquote: (props: JSX.IntrinsicElements['blockquote']) => (
    <chakra.blockquote
      backgroundColor='whiteAlpha.100'
      borderLeft='5px solid'
      borderColor='whiteAlpha.300'
      p={4}
      my={2}
      {...props}
    />
  ),
  li: (props: JSX.IntrinsicElements['li']) => <chakra.li {...props} />,
  ol: (props: JSX.IntrinsicElements['ol']) => (
    <OrderedList my={2} ml={4} {...props} />
  ),
  ul: (props: JSX.IntrinsicElements['ul']) => (
    <UnorderedList my={2} ml={4} {...props} />
  ),
  //todo: hr Image
}

export default CustomMdxComponents
