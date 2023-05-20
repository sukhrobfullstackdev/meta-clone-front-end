import "../styles/globals.css"
import Header from "../components/Header";
import {Provider} from "react-redux";
import {store} from "../store";

function MyApp({Component, pageProps}) {
  if (Component.getLayout) Component.getLayout(<Provider store={store}><Component {...pageProps} /></Provider>);
  return (
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
