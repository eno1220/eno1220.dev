import fs from 'fs'

import { serialize } from 'next-mdx-remote/serialize'
import rehypePrettyCode from 'rehype-pretty-code'

export const mdToHtml = async (content: string) => {
  const result = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
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
      ],
    },
  })

  return result
}
