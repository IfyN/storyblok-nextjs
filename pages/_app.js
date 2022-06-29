import { initializeStoryblok } from "../lib/storyblok";
import "../styles/global.css";

initializeStoryblok();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
