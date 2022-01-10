import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider, store } from '../features/store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider value={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
