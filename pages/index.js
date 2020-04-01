import { Box, Container, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import ProjectsGrid from '../components/projects-grid'
import Sponsors from '../components/sponsors'
import Marquee from '../components/marquee'
import { map, uniq, concat, shuffle } from 'lodash'

export default ({ titles = [] }) => (
  <>
    <Box
      as="header"
      sx={{
        bg: 'primary',
        color: 'white',
        position: 'relative',
        pt: [4, 5, 6],
        pb: [3, 4]
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
      <Container>
        <Text
          as="p"
          variant="subtitle"
          sx={{
            color: 'white',
            opacity: 0.75,
            fontSize: [2, 3],
            fontWeight: 'bold',
            textTransform: 'uppercase',
            mt: [null, 3]
          }}
        >
          Mar 26–30, 2020
        </Text>
        <Heading
          as="h1"
          sx={{
            variant: 'text.title',
            fontFamily: 'heading',
            color: 'white',
            mt: 3,
            mb: 4,
            '> span': {
              display: 'block',
              fontSize: [3, 5, 6, 7]
            },
            kbd: {
              fontFamily: 'inherit',
              WebkitTextStroke: 'currentColor',
              WebkitTextStrokeWidth: '4px',
              WebkitTextFillColor: theme => theme.colors.primary,
              transition: 'text-shadow .25s ease-in-out',
              ':hover': { textShadow: '0 0 12px white' }
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
              span: { mx: [1, null, 2] },
              transition: 'text-shadow .25s ease-in-out',
              ':hover': {
                WebkitTextFillColor: theme => theme.colors.white,
                textShadow: theme => `0 0 9px ${theme.colors.accent}`
              }
            }}
          >
            #Build<span>For</span>COVID19.
          </Text>
        </Heading>
      </Container>
    </Box>
    <Box as="section" sx={{ bg: 'sheet', pt: [3, 4], pb: [3, 4, 5] }}>
      <Container
        sx={{
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
