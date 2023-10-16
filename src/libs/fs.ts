import fs from 'fs'
import { join } from 'path'

export const getSlugs = (path: string) => {
  const fullPath = join(process.cwd(), 'src', path)
  const files = fs.readdirSync(fullPath, {
    withFileTypes: true,
  })
  const slugs = files
    .map((file) =>
      file.isFile() && file.name.endsWith('.md')
        ? file.name.replace(/\.md$/, '')
        : []
    )
    .flat()
  return slugs
}

export const getPostBySlug = (path: string, slug: string) => {
  const fullPath = join(process.cwd(), 'src', path, `${slug}.md`)
  const content = fs.readFileSync(fullPath, 'utf8')
  return content
}
