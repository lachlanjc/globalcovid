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
  <Grid columns={[3, 5, 8]} gap={3} sx={{ mt: 4 }}>
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
