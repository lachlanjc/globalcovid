import { Box, Container } from 'theme-ui'
import ProjectsCopy from '../../components/projects.mdx'
import ProjectsGrid from '../../components/projects-grid'

export default () => (
  <>
    <Box as="header" variant="headerLeft">
      <Container>
        <h1>Highlighted projects</h1>
        <ProjectsCopy />
      </Container>
    </Box>
    <Container as="main" sx={{ my: [4, 5] }}>
      <ProjectsGrid />
    </Container>
  </>
)
