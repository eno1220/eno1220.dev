import { Container, Heading } from '@chakra-ui/react'
import Header from '@/components/Header'

const Blog = () => {
  return (
    <Container
      maxW='3xl'
      py={4}
      px={{
        base: 4,
        md: 2,
      }}
    >
      <Header />
      <Heading as='h1' size='xl' mt={8}>
        Blog
      </Heading>
    </Container>
  )
}

export default Blog
