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
    gap={3}
    sx={{ mt: 4, gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))' }}
  >
    {list.map(name => (
      <Link href={`https://${name.toLowerCase()}.com`} title={name} key={name}>
        <Image
          src={`https://logo.clearbit.com/${name.toLowerCase()}.com`}
          alt={`${name} logo`}
          sx={{ maxWidth: 72 }}
        />
      </Link>
    ))}
  </Grid>
)
