import sizeOf from 'image-size'
import { inspect } from 'unist-util-inspect'
import { visit } from 'unist-util-visit'

export default function rehypeImageSize() {
  return (tree: any) => {
    console.log(inspect(tree))
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
