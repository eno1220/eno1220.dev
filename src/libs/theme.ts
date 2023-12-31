import localfont from 'next/font/local'

import { extendBaseTheme } from '@chakra-ui/react'
import {
  Button as ButtonTheme,
  Container as ContainerTheme,
  Heading as HeadingTheme,
  List as ListTheme,
} from '@chakra-ui/theme/components'

const lineSeedJP = localfont({
  src: [
    {
      path: './fonts/LINESeedJP_OTF_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/LINESeedJP_OTF_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: false,
})

const fonts = {
  heading: lineSeedJP.style.fontFamily,
  body: lineSeedJP.style.fontFamily,
}

const theme = extendBaseTheme({
  components: {
    Button: ButtonTheme,
    Container: ContainerTheme,
    Heading: HeadingTheme,
    List: ListTheme,
  },
  colors: {
    blue: {
      '50': '#eff6ff',
      '100': '#dbeafe',
      '200': '#bfdbfe',
      '300': '#93c5fd',
      '400': '#60a5fa',
      '500': '#3b82f6',
      '600': '#2563eb',
      '700': '#1d4ed8',
      '800': '#1e40af',
      '900': '#1e3a8a',
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: '#0E1117',
        color: '#E5EDF2',
      },
    }),
  },
  fonts,
})

export default theme
