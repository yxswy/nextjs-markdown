import '../styles/markdown-style/vars.css'
import '../styles/markdown-style/code.css'
import '../styles/globals.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
