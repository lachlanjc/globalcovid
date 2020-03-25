import Head from 'next/head'
import theme from '../lib/theme'

export default ({
  title = 'COVID-19 Global Hackathon',
  description = '',
  image = 'https://globalcovid.now.sh/card.png',
  url = 'https://globalcovid.com/'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="COVID-19 Global Hackathon" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://globalcovid.now.sh/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://globalcovid.now.sh/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://globalcovid.now.sh/favicon-16x16.png"
    />
    <link rel="manifest" href="https://globalcovid.now.sh/site.webmanifest" />
    <link
      rel="mask-icon"
      href="https://globalcovid.now.sh/safari-pinned-tab.svg"
      color={theme.colors.primary}
    />
    <meta name="apple-mobile-web-app-title" content="COVID-19 Hackathon" />
    <meta name="application-name" content="COVID-19 Hackathon" />
    <meta name="msapplication-TileColor" content={theme.colors.primary} />
    <meta name="theme-color" content={theme.colors.primary} />
  </Head>
)
