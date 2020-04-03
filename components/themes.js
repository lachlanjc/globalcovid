import { Heading, Grid, Card } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'
import themes from '../lib/themes'
import { kebabCase } from 'lodash'

export default ({ showAll = true, minimal = false, ...props }) => {
  const { pathname, query } = useRouter()
  const active = pathname.startsWith('/themes/') ? query.id : false
  return [
    <Heading
      key="heading"
      as="h2"
      id="themes"
      variant={minimal ? 'subheadline' : 'headline'}
      sx={{ color: minimal ? 'muted' : 'secondary' }}
    >
      Explore by theme
    </Heading>,
    <Grid
      key="grid"
      columns={[2, 4]}
      gap={3}
      sx={{
        pb: minimal ? [3, 4] : [4, 5],
        a: {
          borderRadius: 'extra',
          fontSize: 2,
          fontWeight: 'bold',
          lineHeight: 'title',
          overflow: 'hidden',
          position: 'relative',
          px: 3,
          py: minimal ? 3 : [3, 4],
          textAlign: 'left',
          textDecoration: 'none',
          WebkitTapHighlightColor: 'transparent',
          transition:
            'transform .25s ease-in-out, box-shadow .125s ease-in-out',
          ':hover,:focus': {
            transform: 'scale(1.25) rotate(-8deg)',
            zIndex: 2,
            boxShadow: 'elevated'
          },
          '@media (prefers-reduced-motion: reduce)': {
            transform: 'none !important'
          }
        }
      }}
      {...props}
    >
      {showAll && (
        <Link href="/projects" passHref>
          <Card
            as="a"
            variant="nav"
            sx={{ bg: 'sunken', color: 'text', boxShadow: 'card' }}
          >
            All Themes
          </Card>
        </Link>
      )}
      {themes.map(({ name, color }) => (
        <Link href={`/themes/${kebabCase(name)}`} passHref key={name}>
          <Card
            as="a"
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
