import '../styles/globals.css'
import { DataProvider } from '../global/DataLayer'
import { initialState, reducer } from '../global/reducer'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
