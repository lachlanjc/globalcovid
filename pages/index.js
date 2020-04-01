import { Box, Container, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import ProjectsGrid from '../components/projects-grid'
import Sponsors from '../components/sponsors'
import Marquee from '../components/marquee'
import { ColorSwitcher } from '../components/nav'
import { map, uniq, concat, shuffle } from 'lodash'

export default ({ titles = [] }) => (
  <>
    <Box
      as="header"
      sx={{
        bg: 'primary',
        color: 'white',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      <Box
        as="aside"
        aria-hidden
        sx={{
          position: 'absolute',
          top: [2, 3],
          left: 0,
          right: 0,
          transform: ['scale(0.75) rotate(-2deg)', 'rotate(-4deg)'],
          zIndex: 0
        }}
      >
        <Marquee>
          {titles.map(title => (
            <span key={title}>{title}</span>
          ))}
        </Marquee>
        <Marquee>
          {shuffle(titles).map(title => (
            <span key={title}>{title}</span>
          ))}
        </Marquee>
      </Box>
      <ColorSwitcher
        sx={{
          color: 'white',
          position: 'absolute',
          top: [3, 4],
          right: [3, 4],
          width: 'auto',
          height: 'auto'
        }}
      />
      <Container as="article" sx={{ pt: [5, 6], pb: [3, 4] }}>
        <Text
          as="p"
          variant="subtitle"
          sx={{
            color: 'white',
            opacity: 0.75,
            mt: [3, 0],
            fontSize: [2, 3],
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          Mar 26–30, 2020
        </Text>
        <Heading
          as="h1"
          sx={{
            variant: 'text.title',
            fontFamily: 'heading',
            color: 'inverted',
            mt: [2, 3],
            mb: 4,
            '> span': {
              display: 'block',
              fontSize: [5, 6, 7]
            },
            kbd: {
              display: 'inline-block',
              fontFamily: 'inherit',
              WebkitTextStroke: 'currentColor',
              WebkitTextStrokeWidth: ['2px', '4px'],
              WebkitTextFillColor: theme => theme.colors.primary,
              transition: 'all .125s ease-in-out',
              ':hover': {
                color: 'accent',
                textShadow: theme => `0 0 12px ${theme.colors.accent}`,
                transform: 'rotate(-4deg) scale(1.025)'
              }
            }
          }}
        >
          <span>Last weekend,</span>
          <span>
            <kbd>18,872</kbd> people made
          </span>
          <span>
            <kbd>1,560</kbd> projects to
          </span>
          <Text
            as="span"
            sx={{
              color: 'accent',
              span: { mx: 2 },
              transition: 'text-shadow 1s ease-in-out',
              ':hover': {
                textShadow: theme => `0 0 16px ${theme.colors.accent}`
              },
              br: { display: [null, 'none'] }
            }}
          >
            #Build<span>For</span>
            <br />
            COVID19.
          </Text>
        </Heading>
      </Container>
    </Box>
    <Box as="section" sx={{ bg: 'sheet', pt: 4, pb: [4, 5] }}>
      <Container
        sx={{
          strong: { color: 'primary' },
          '> p': { fontSize: [2, 3], maxWidth: 'copyPlus' }
        }}
      >
        <About />
        <Sponsors wide />
      </Container>
    </Box>
    <Container
      id="projects"
      as="article"
      sx={{ py: [3, 4], mt: [3, 4], mb: [5, 6] }}
    >
      <Heading sx={{ variant: 'text.title', fontSize: [4, 5], m: 0 }}>
        Highlighted projects
      </Heading>
      <ProjectsGrid />
    </Container>
  </>
)

export const getStaticProps = async () => {
  const loadJSON = require('load-json-file')
  const projects = await loadJSON('./lib/projects-content.json')
  let titles = map(projects, 'creators')
    .join(', ')
    .split(', ')
  titles = uniq(titles)
  titles = concat(titles, map(projects, 'name'))
  titles = shuffle(titles)
  return { props: { titles } }
}
