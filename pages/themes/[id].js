import { Box, Container, Badge } from 'theme-ui'
import ProjectsGrid from '../../components/projects-grid'
import Themes from '../../components/themes'
import { getThemesSlugs, getThemeBySlug } from '../../lib/themes'
import { filter } from 'lodash'

export default ({ theme, projects = [] }) => (
  <>
    <Box as="header" variant="headerLeft">
      <Container>
        <Badge variant="lg" sx={{ bg: theme.color, color: 'sheet', mb: 2 }}>
          Theme
        </Badge>
        <h1 style={{ color: theme.color }}>{theme.name}</h1>
        <p>{theme.desc}</p>
        <Themes minimal sx={{ pb: 3 }} />
      </Container>
    </Box>
    <Container as="main" sx={{ my: [4, 5] }}>
      <ProjectsGrid projects={projects} />
    </Container>
  </>
)

export const getStaticPaths = async () => {
  const paths = getThemesSlugs().map(id => ({ params: { id } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const theme = getThemeBySlug(id)
  const loadJSON = require('load-json-file')
  let projects = await loadJSON('./lib/projects-min.json')
  projects = filter(projects, { theme: theme.name })
  return { props: { theme, projects } }
}
