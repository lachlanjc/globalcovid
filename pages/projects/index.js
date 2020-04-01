import { Box, Container } from 'theme-ui'
import ProjectsGrid from '../../components/projects-grid'

export default () => (
  <>
    <Box as="header" variant="header">
      <h1>Highlighted projects</h1>
    </Box>
    <Container as="main" sx={{ my: [4, 5] }}>
      <ProjectsGrid />
    </Container>
  </>
)
