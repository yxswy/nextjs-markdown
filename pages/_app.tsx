import '../styles/vars.css'
// import '../styles/custom-blocks.css'
import '../styles/global.css'
import '../styles/code.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
