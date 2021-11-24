import '../styles/globals.css'
import Head from 'next/head'
import { AppContext } from '../context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href='../../static/favicon-32x32.png'/>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  )
}

export default MyApp
