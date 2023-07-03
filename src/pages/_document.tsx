import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='jp'>
      <Head>
        <meta name='description' content='eno1220のポートフォリオサイト' />
        <meta name='theme-color' content='#0E1117' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@1220_eno' />
        <meta property='og:title' content='eno1220.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://eno1220.dev' />
        <meta
          property='og:description'
          content='eno1220のポートフォリオサイト'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
