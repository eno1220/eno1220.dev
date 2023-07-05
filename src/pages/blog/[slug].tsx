import type { GetStaticPaths } from 'next'

import { getSlugs } from '@/libs/fs'

const BlogPage = ({ slug }: { slug: string }) => {
  return <div>{slug}</div>
}

export default BlogPage

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const slug = params.slug
  return {
    props: {
      slug,
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
