import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Calculate your website's carbon emissions | Carbon Checker"
        description="Calculate and reduce your website's carbon footprint with our easy-to-use carbon emissions calculator."
        canonical="https://carbon-checker.netlify.app/"
        openGraph={{
          url: 'https://carbon-checker-23.s3.amazonaws.com/carbon-checker.png',
          title: 'Carbon Checker',
          locale: 'en_GB',
          description:
            "Calculate and reduce your website's carbon footprint with our easy-to-use carbon emissions calculator.",
          images: [
            {
              url: 'https://carbon-checker-23.s3.amazonaws.com/carbon-checker.png',
              width: 800,
              height: 600,
              alt: 'Carbon Checker',
              type: 'image/png',
            },
            {
              url: 'https://carbon-checker-23.s3.amazonaws.com/carbon-checker.png',
              width: 900,
              height: 800,
              alt: 'Carbon Checker',
              type: 'image/png',
            },
          ],
          site_name: 'Carbon Checker',
        }}
        twitter={{
          handle: '@momito8_',
          site: '@momit8_',
          cardType: 'summary_large_image',
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: false,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'website carbon calculator, website emissions calculator ',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
