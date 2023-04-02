import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nick portfolio</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple start project to work with NextJs and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
