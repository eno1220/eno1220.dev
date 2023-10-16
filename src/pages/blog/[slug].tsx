import type { GetStaticPaths } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import { Container, Heading, Text, Box, HStack } from '@chakra-ui/react'

import dayjs from 'dayjs'

import CustomMdxComponents from '@/components/CustomMdxComponents'
import Header from '@/components/Header'
import { getSlugs, getPostBySlug } from '@/libs/fs'
import { mdToHtml } from '@/libs/mdx'

const BlogPage = ({ mdxSource }: { mdxSource: any }) => {
  return (
    <Container maxW='3xl' py={4} px={{ base: 4, md: 2 }}>
      <Header />
      <Heading as='h1' size='xl' mt={10} mb={2}>
        {mdxSource.frontmatter.title}
      </Heading>
      <Text fontSize='md' color='gray.400'>
        {dayjs(mdxSource.frontmatter.date).format('YYYY年MM月DD日')}
      </Text>
      <Box height='1px' bg='whiteAlpha.300' my={4} />
      <MDXRemote {...mdxSource} components={CustomMdxComponents} />
      <Box height='1px' bg='whiteAlpha.300' mt={8} />
      <HStack spacing={2} my={4}>
        {mdxSource.frontmatter.tags.map((tag: any) => (
          <Box
            bg={'whiteAlpha.200'}
            px={2}
            py={1}
            rounded='sm'
            color='gray.400'
            key={tag}
          >
            #{tag}
          </Box>
        ))}
      </HStack>
    </Container>
  )
}

export default BlogPage

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const slug = params.slug
  const content = getPostBySlug('articles/blog', slug)
  // todo: 型をつける
  const mdxSource = await mdToHtml(content)
  return {
    props: {
      mdxSource,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getSlugs('articles/blog')
  const paths = slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
