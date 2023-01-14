import Document, { Html, Head, Main, NextScript } from 'next/document';

import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌍</text></svg>"
          />
          <meta
            name="twitter:image"
            content="https://carbon-checker-23.s3.amazonaws.com/carbon-checker.png"
          />
          <meta
            name="image"
            property="og:image"
            content="https://carbon-checker-23.s3.amazonaws.com/carbon-checker.png"
          />
          <meta
            name="google-site-verification"
            content="n5X5W9dq2BQtHWlYT7LliEIZM94FdShE4d9iDvimS1A"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
