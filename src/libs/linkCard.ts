import type { H } from 'mdast-util-to-hast'
import getMetaData from 'metadata-scraper'
import type { Parent } from 'unist'
import { visit } from 'unist-util-visit'

export function remarkLinkCard() {
  return async (tree: any) => {
    // https://egashira.dev/blog/nextjs-mdx-link-card
    // https://github.com/syntax-tree/unist-util-visit-parents/issues/8
    const promises: (() => Promise<void>)[] = []
    visit(tree, isExternalLink, visitor)
    await Promise.all(promises.map((promise) => promise()))

    function visitor(node: any, index: any, parent: any) {
      const { children } = node
      const firstChild = children[0]
      promises.push(async () => {
        const data = await fetchMetadata(firstChild.url)
        parent.children[index] = {
          type: 'extlink',
          meta: data,
        }
      })
    }
  }
}

function isExternalLink(node: any): node is Parent {
  if (node.type !== 'paragraph') return false
  const { children } = node
  if (children.length !== 1) return false
  const firstChild = children[0]
  if (
    firstChild.type !== 'link' ||
    firstChild.children[0].type !== 'text' ||
    !firstChild.url.startsWith('http')
  )
    return false
  return true
}

function fetchMetadata(url: string) {
  const metadata = getMetaData(url).then((data) => {
    return {
      title: data.title,
      description: data.description,
      url: data.url,
      image: data.image,
      icon: data.icon,
    }
  })
  return metadata
}

export function handler(h: H, node: any) {
  return {
    type: 'element',
    tagName: 'extlink',
    properties: {
      url: node.meta.url,
      title: node.meta.title,
      description: node.meta.description,
      image: node.meta.image,
      icon: node.meta.icon,
    },
    children: [],
  }
}
