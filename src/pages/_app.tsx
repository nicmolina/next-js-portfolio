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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
