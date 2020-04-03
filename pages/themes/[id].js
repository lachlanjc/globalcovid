import { Box, Container, Badge } from 'theme-ui'
import ProjectsGrid from '../../components/projects-grid'
import Themes from '../../components/themes'
import themes from '../../lib/themes'
import { map, kebabCase, find } from 'lodash'

export default ({ theme, projects = [] }) => (
  <>
    <Box as="header" variant="headerLeft">
      <Container>
        <Badge
          variant="circle"
          sx={{
            fontSize: [2, 3],
            display: 'inline-block',
            fontFamily: 'heading',
            borderRadius: 'circle',
            bg: theme.color,
            px: 3,
            py: 1,
            color: 'sheet',
            mb: 2
          }}
        >
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
  const paths = map(themes, 'name')
    .map(kebabCase)
    .map(id => ({ params: { id } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const theme = find(themes, t => kebabCase(t.name) === id)
  const loadJSON = require('load-json-file')
  const projects = await loadJSON('./lib/projects-min.json')
  console.log(theme, projects)
  // filter projects
  return { props: { theme, projects } }
}
