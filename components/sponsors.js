import { Grid, Link, Image } from 'theme-ui'

const list = [
  'Facebook',
  'Giphy',
  'Microsoft',
  'Pinterest',
  'Slack',
  'TikTok',
  'Twitter',
  'WeChat'
]

export default () => (
  <Grid
    gap={[3, 4]}
    sx={{
      mt: 4,
      gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      alignItems: 'center'
    }}
  >
    {list.map(name => (
      <Link
        href={`https://${name.toLowerCase()}.com`}
        title={name}
        key={name}
        sx={{ lineHeight: 0, width: '100%' }}
      >
        <Image
          src={`/sponsors/${name.toLowerCase()}.svg`}
          alt={`${name} logo`}
          sx={{ height: '100%', maxWidth: '75%', maxHeight: 64 }}
          loading="lazy"
        />
      </Link>
    ))}
  </Grid>
)
