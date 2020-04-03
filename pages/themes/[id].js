import { Box, Container, Badge, Heading, Text } from 'theme-ui'
import ProjectsGrid from '../../components/projects-grid'
import Themes from '../../components/themes'
import { getThemesSlugs, getThemeBySlug } from '../../lib/themes'
import { filter } from 'lodash'

export default ({ theme, projects = [] }) => (
  <>
    <Box as="header" sx={{ bg: 'sheet', pt: 3, pb: [2, 3, 4], mb: [4, 5] }}>
      <Container>
        <Badge variant="lg" sx={{ bg: theme.color, color: 'sheet', mb: 2 }}>
          Theme
        </Badge>
        <Heading
          as="h1"
          variant="title"
          style={{ color: theme.color }}
          sx={{
            fontSize: [4, 5, 6],
            wordBreak: 'break-word'
          }}
        >
          {theme.name}
        </Heading>
        <Text as="p" sx={{ fontSize: 2, maxWidth: 'copy', my: [3, 4] }}>
          {theme.desc}
        </Text>
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
