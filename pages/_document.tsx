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
            content="https://carbon-checker-23.s3.us-east-1.amazonaws.com/carbon-checker.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCWV1LXdlc3QtMiJGMEQCIHESOWf4Yc7iGx5Eo%2F%2F6ZuimcmQTwI45kKL53Cauh1naAiBw2jmb8qdKieyXvANVepxFSXQTQKm9CLIDS7zgUuC6rCrtAgiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDQ3NzI5Mjc4MDI2NSIMDKaXhIz5L1sTGHJHKsECvM6iQZNf65m9QlvJT%2BgPzjFaFHHwxgxp3oNj9I5k6556IIVNbg8S%2BsRPeR4K9%2B52%2FYWs3P%2FZs8fipXHtfnH2G4YW68fXzBRDYx5rP%2BGlEP3jUtjDAvYr1SstEiE7lAHK2ilC91BsjdbWbEw1syGbaI%2FsvoFd1Slj7VCRVDFoa6A0aTQ%2F3OioKD2Smma9E8TbEZ%2FSGNTYlIMnJkCdpaGnawawJOhMAOGnCR0jXsEV0Pj8g3rI1wUwWhNyuLzh89XsfDvfX9fWsdsKQeNINOirBXLcm28X3y1%2B17MUzZl3pvrtI3rskKpyB282w36UKiNYtv1SEUfJmdFcjE6l44jAqnkA6Lc1bs57ewwxxAWnHmaO%2FaMZYV0GBFs4mUrdFN%2BX167RmZzfAoudp3vR%2FIP7VB5AJbRir686RG58xdQdn0r8MNH5%2FJ0GOrQCji1k6F1o3KctImtXhmXUxNKmKNALhwvyyVr00QYC69ZxxsznqtEqTrJ7sBsJoporeXM1faO7Th4gVfQqJSNxCwM8J4IctGYX%2B3q2capyPSyTCHKFf6qENSuAf7xYwJ4BoHFZf8JVOkZ0akVs9AscHiLoAlXDovqr4GI8iSRwJnPazf0E8uiNQJSSWJKylulcwQyOuCRgrbpqYBQxEPZiNVoYrqfLGwH04S5e%2FCnWR%2F7%2BX17eW16CKZaItOCwGCceixXtXQep5g%2FWAw8FtMR0LxRYF4yJ8a0UiU1bqNvp4qCLmRc79WbWL%2FhTrVxrl5eaq2dll6GJHOR3nsjnn4fOSkltHuvPiZCFaEsJ%2FY6gu7TBpTEi%2FLJZqjP9CNbecu3yIfyK6MScmwPKyqI%2BH7FbPO16r8o%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230111T230444Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW6IG53LUYV64VKXZ%2F20230111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=737e42b8178923441d8001e55f99a9c9b24b8a0bb976e485f9cd2124311fd4dc"
          />
          <meta
            name="image"
            property="og:image"
            content="https://carbon-checker-23.s3.us-east-1.amazonaws.com/carbon-checker.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCWV1LXdlc3QtMiJGMEQCIHESOWf4Yc7iGx5Eo%2F%2F6ZuimcmQTwI45kKL53Cauh1naAiBw2jmb8qdKieyXvANVepxFSXQTQKm9CLIDS7zgUuC6rCrtAgiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDQ3NzI5Mjc4MDI2NSIMDKaXhIz5L1sTGHJHKsECvM6iQZNf65m9QlvJT%2BgPzjFaFHHwxgxp3oNj9I5k6556IIVNbg8S%2BsRPeR4K9%2B52%2FYWs3P%2FZs8fipXHtfnH2G4YW68fXzBRDYx5rP%2BGlEP3jUtjDAvYr1SstEiE7lAHK2ilC91BsjdbWbEw1syGbaI%2FsvoFd1Slj7VCRVDFoa6A0aTQ%2F3OioKD2Smma9E8TbEZ%2FSGNTYlIMnJkCdpaGnawawJOhMAOGnCR0jXsEV0Pj8g3rI1wUwWhNyuLzh89XsfDvfX9fWsdsKQeNINOirBXLcm28X3y1%2B17MUzZl3pvrtI3rskKpyB282w36UKiNYtv1SEUfJmdFcjE6l44jAqnkA6Lc1bs57ewwxxAWnHmaO%2FaMZYV0GBFs4mUrdFN%2BX167RmZzfAoudp3vR%2FIP7VB5AJbRir686RG58xdQdn0r8MNH5%2FJ0GOrQCji1k6F1o3KctImtXhmXUxNKmKNALhwvyyVr00QYC69ZxxsznqtEqTrJ7sBsJoporeXM1faO7Th4gVfQqJSNxCwM8J4IctGYX%2B3q2capyPSyTCHKFf6qENSuAf7xYwJ4BoHFZf8JVOkZ0akVs9AscHiLoAlXDovqr4GI8iSRwJnPazf0E8uiNQJSSWJKylulcwQyOuCRgrbpqYBQxEPZiNVoYrqfLGwH04S5e%2FCnWR%2F7%2BX17eW16CKZaItOCwGCceixXtXQep5g%2FWAw8FtMR0LxRYF4yJ8a0UiU1bqNvp4qCLmRc79WbWL%2FhTrVxrl5eaq2dll6GJHOR3nsjnn4fOSkltHuvPiZCFaEsJ%2FY6gu7TBpTEi%2FLJZqjP9CNbecu3yIfyK6MScmwPKyqI%2BH7FbPO16r8o%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230111T230444Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW6IG53LUYV64VKXZ%2F20230111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=737e42b8178923441d8001e55f99a9c9b24b8a0bb976e485f9cd2124311fd4dc"
          />
          <meta
            name="google-site-verification"
            content="DcOECbkXwZCHzcJF8VX61aS9oiNbspLNsuqLFLwumLE"
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
