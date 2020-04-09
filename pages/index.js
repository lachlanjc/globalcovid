import { Box, Container, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import Banner from '../components/banner'
import CTA from '../components/cta'
import ProjectsCopy from '../components/projects.mdx'
import Themes from '../components/themes'
import ProjectsGrid from '../components/projects-grid'

export default ({ projects = [] }) => (
  <>
    <Banner />
    <Box as="section" sx={{ bg: 'sheet', py: [4, 5] }}>
      <Container
        sx={{
          position: 'relative',
          strong: { color: 'accent' },
          '> p': { fontSize: [2, 3], maxWidth: 'copyPlus', mt: 0 }
        }}
      >
        <About />
      </Container>
    </Box>
    <Container
      id="projects"
      as="article"
      sx={{ py: [3, 4], mt: [3, 4], mb: [5, 6] }}
    >
      <Heading sx={{ variant: 'text.title', fontSize: [4, 5] }}>
        Highlighted projects
      </Heading>
      <Text sx={{ fontSize: [2, 3], my: [3, 4], maxWidth: 'copyPlus' }}>
        <ProjectsCopy />
      </Text>
      <Themes />
      <ProjectsGrid projects={projects} />
      <CTA
        primary={['/judges', 'Meet the judges']}
        secondary={['/projects', 'See all projects']}
        sx={{ mt: [3, 4] }}
      />
    </Container>
  </>
)

export const getStaticProps = async () => {
  /*
  const { map, uniq, filter, shuffle, take } = require('lodash')
  const loadJSON = require('load-json-file')
  // Only content version has creator names
  const list = await loadJSON('./lib/projects-content.json')
  let titles = map(list, 'creators')
    .join(', ')
    .split(', ')
  titles = uniq(titles)
  titles = take(shuffle(titles), 64)
  */
  // Getting min bundle for sending as props
  const { filter } = require('lodash')
  const { getProjectCards } = require('../lib/projects')
  let projects = await getProjectCards()
  projects = filter(projects, { feat: true })
  return { props: { projects } }
}
