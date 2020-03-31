import { Box, Container, Grid } from 'theme-ui'
import projects from '../../lib/projects-min.json'
import ProjectCard from '../../components/project-card'

export default () => (
  <>
    <Box as="header" variant="header">
      <h1>Highlighted projects</h1>
    </Box>
    <Container as="main" sx={{ my: [4, 5] }}>
      <Grid columns={[null, 2]} gap={[3, 4, 5]}>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Grid>
    </Container>
  </>
)
