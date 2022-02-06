import '../styles/globals.css'
import {motion,AnimatePresence} from 'framer-motion'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <AnimatePresence exitBeforeEnter>
  <Component {...pageProps} key={router.route} />
  </AnimatePresence>
  )
}

export default MyApp
