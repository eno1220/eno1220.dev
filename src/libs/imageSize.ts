import sizeOf from 'image-size'
import { visit } from 'unist-util-visit'

export default function rehypeImageSize() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        const { src } = node.properties
        const dimensions = sizeOf('public' + src)
        node.properties.width = dimensions.width
        node.properties.height = dimensions.height
      }
    })
  }
}
