import { Html, Head, Main, NextScript } from "next/document";
import { DocumentHeadTags,documentGetInitialProps,} from '@mui/material-nextjs/v13-pagesRouter';

// import createEmotionServer from '@emotion/server/create-instance'; 
// import theme from '../src/theme'; 
// import createEmotionCache from '../src/createEmotionCache'; 

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
      <DocumentHeadTags {...props} />
        <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
