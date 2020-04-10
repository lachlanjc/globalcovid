import Head from 'next/head'
import theme from '../lib/theme'

export default ({
  title = 'COVID-19 Global Hackathon',
  description = 'The #BuildforCOVID19 Global Online Hackathon was an opportunity for developers around the world to tackle challenges related to the coronavirus (COVID-19) pandemic in March/April 2020. Expert judges from the health, science and technology fields selected the following highlighted projects.',
  image = 'https://covidglobalhackathon.com/card.png',
  url = 'https://covidglobalhackathon.com/'
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
      href={`${url}apple-touch-icon.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${url}favicon-32x32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${url}favicon-16x16.png`}
    />
    <link rel="manifest" href={`${url}site.webmanifest`} />
    <link
      rel="mask-icon"
      href={`${url}safari-pinned-tab.svg`}
      color={theme.colors.primary}
    />
    <meta name="msapplication-TileColor" content={theme.colors.primary} />
    <meta name="theme-color" content={theme.colors.primary} />
  </Head>
)
