import { Box, Container, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import Banner from '../components/banner'
import CTA from '../components/cta'
import ProjectsCopy from '../components/projects.mdx'
import Themes from '../components/themes'
import ProjectsGrid from '../components/projects-grid'
// import Contributors from '../components/contributors'

export default ({ projects = [] }) => (
  <>
    <Banner />
    {/* <Contributors titles={titles} /> */}
    <Box as="section" sx={{ bg: 'sheet', py: [4, 5] }}>
      <Container
        sx={{
          position: 'relative',
          strong: { color: 'accent' },
          '> p': { fontSize: [2, 3], maxWidth: 'copyPlus', my: [2, 3] }
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
  const { uniq, random, flatten, filter, shuffle, includes, take, trim } = require('lodash')
  const emoji = require('country-emoji')
  const loadJSON = require('load-json-file')
  // Only content version has creator names
  const list = await loadJSON('./lib/projects-content.json')
  let titles = []
  list.forEach(p => {
    let cr = p.creators
      .split(', ')
      .filter(n => !includes(n, /[0-9]+/))
      .filter(n => !includes(n, 'undefined'))
      .filter(() =>
        p.country === 'United States' ? random(1, true) < 0.3 : true
      )
      .map(trim)
    const co = emoji.flag(p.country)
    titles.push(cr.map(c => `${co} ${c}`))
  })
  titles = uniq(flatten(titles))
  titles = [take(shuffle(titles), 64), take(shuffle(titles), 64)]
  */
  // Getting min bundle for sending as props
  const { filter } = require('lodash')
  const { getProjectCards } = require('../lib/projects')
  let projects = await getProjectCards()
  projects = filter(projects, { feat: true })
  return { props: { titles, projects } }
}
