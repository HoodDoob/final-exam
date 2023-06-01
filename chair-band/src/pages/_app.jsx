import "../styles/globals.scss";
import "../styles/layout.scss";
import { TextModifierProvider } from '../components/TextModifier';


export default function App({ Component, pageProps }) {
  return (
    <TextModifierProvider>
      <Component {...pageProps} />
    </TextModifierProvider>
  );
}
