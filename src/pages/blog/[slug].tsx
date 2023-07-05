import type { GetStaticPaths } from 'next'
import { MDXRemote } from 'next-mdx-remote'

import CustomMdxComponents from '@/components/CustomMdxComponents'
import { getSlugs, getPostBySlug } from '@/libs/fs'
import { mdToHtml } from '@/libs/mdx'

const BlogPage = ({ mdxSource }: { mdxSource: any }) => {
  return <MDXRemote {...mdxSource} components={CustomMdxComponents} />
}

export default BlogPage

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const slug = params.slug
  const content = getPostBySlug('articles/blog', slug)
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
