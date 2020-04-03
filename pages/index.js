import { Box, Container, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import Banner from '../components/banner'
import CTA from '../components/cta'
import ProjectsCopy from '../components/projects.mdx'
import Themes from '../components/themes'
import ProjectsGrid from '../components/projects-grid'
import projects from '../lib/projects-min.json'
import { map, uniq, concat, shuffle, take } from 'lodash'

export default ({ titles = [] }) => (
  <>
    <Banner titles={titles} />
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
      <Text
        sx={{ fontSize: [2, 3], mt: [3, 4], mb: [2, 3], maxWidth: 'copyPlus' }}
      >
        <ProjectsCopy />
      </Text>
      <CTA
        primary={['/projects', 'See all projects']}
        secondary={['/judges', 'Meet the judges']}
        sx={{ mb: [4, 5] }}
      />
      <Themes />
      <ProjectsGrid projects={projects} />
    </Container>
  </>
)

export const getStaticProps = async () => {
  const loadJSON = require('load-json-file')
  const list = await loadJSON('./lib/projects-content.json')
  let titles = map(list, 'creators')
    .join(', ')
    .split(', ')
  titles = uniq(titles)
  titles = take(shuffle(titles), 64)
  return { props: { titles } }
}
