import Layout from '@/components/Layout'
import LogInModal from '@/components/modals/LogInModal'
import RegisterModal from '@/components/modals/RegisterModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
        <LogInModal/>
        <RegisterModal/>
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </>
  )
}
