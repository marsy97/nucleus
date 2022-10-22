import '../styles/Stylesheethome.scss';
import '../styles/Stylesheet.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../components/layout.js";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
