import { Grid, Link, Image, useColorMode } from 'theme-ui'

const list = {
  Facebook: true,
  Giphy: true,
  Microsoft: true,
  Pinterest: false,
  Slack: true,
  TikTok: true,
  Twitter: false,
  WeChat: false,
  AWS: true,
  Salesforce: false
}

export default ({ wide = false }) => {
  const [colorMode] = useColorMode()
  return (
    <Grid
      gap={4}
      sx={{
        mt: 4,
        gridTemplateColumns: wide
          ? 'repeat(auto-fit, minmax(200px, 1fr))'
          : 'repeat(2, 1fr)',
        alignItems: 'center'
      }}
    >
      {Object.keys(list).map(name => (
        <Link
          href={`https://${name.toLowerCase()}.com`}
          title={name}
          key={name}
          sx={{ lineHeight: 0, width: '100%', maxWidth: '100%' }}
        >
          <Image
            src={`/sponsors/${name.toLowerCase()}${
              list[name] && colorMode === 'dark' ? '-white' : ''
            }.svg`}
            alt={`${name} logo`}
            sx={{ height: '100%', maxWidth: '75%', maxHeight: wide ? 48 : 64 }}
            loading="lazy"
          />
        </Link>
      ))}
    </Grid>
  )
}
