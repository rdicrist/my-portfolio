import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';

// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
    {/* <AppCacheProvider {...pageProps}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    {/* </AppCacheProvider> */}
    </ThemeProvider>
  );
}
