import { Heading, Grid, Card } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'
import themes from '../lib/themes'
import { last, kebabCase } from 'lodash'

export default ({ showAll = true, minimal = false, ...props }) => {
  const { pathname, query } = useRouter()
  const active = pathname.startsWith('/themes/') ? query.id : false
  return [
    <Heading
      key="heading"
      as="h2"
      variant="subhead"
      sx={{ color: 'muted', mb: 3 }}
    >
      Explore by theme
    </Heading>,
    <Grid
      key="grid"
      columns={[2, 4]}
      gap={3}
      sx={{ pb: [3, 4], a: { textAlign: 'left', py: minimal ? 3 : [3, 4] } }}
      {...props}
    >
      {showAll && (
        <Link href="/projects" passHref>
          <Card as="a" variant="nav" sx={{ bg: 'sunken', color: 'text' }}>
            All Themes
          </Card>
        </Link>
      )}
      {themes.map(({ name, color }) => (
        <Link href={`/themes/${kebabCase(name)}`} passHref key={name}>
          <Card
            as="a"
            variant="nav"
            sx={{
              bg: color,
              color: 'white',
              boxShadow: theme =>
                active === kebabCase(name)
                  ? `0 0 0 3px ${theme.colors.sheet}, 0 0 0 6px ${color}`
                  : 'card'
            }}
          >
            {name}
          </Card>
        </Link>
      ))}
    </Grid>
  ]
}
