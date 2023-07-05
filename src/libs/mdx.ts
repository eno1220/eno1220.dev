import { serialize } from 'next-mdx-remote/serialize'

export const mdToHtml = async (content: string) => {
  const result = await serialize(content, {
    parseFrontmatter: true,
  })
  return result
}
