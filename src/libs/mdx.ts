import fs from 'fs'

import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGemoji from 'remark-gemoji'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

import rehypeImageSize from './imageSize'

export const mdToHtml = async (content: string) => {
  const result = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGemoji, remarkGfm, remarkUnwrapImages],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: JSON.parse(
              fs.readFileSync(
                require.resolve('../assets/moonlight-ii.json'),
                'utf-8'
              )
            ),
          },
        ],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
        rehypeImageSize,
      ],
    },
  })

  return result
}
