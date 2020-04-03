import { Grid } from 'theme-ui'
import { Fade } from 'react-reveal'
import ProjectCard from './project-card'
import projects from '../lib/projects-min.json'

export default ({ children }) => (
  <Grid columns={[null, 2]} gap={[4, null, 5]} sx={{ mx: [-3, 0] }}>
    {projects.map(project => (
      <Fade key={project.id}>
        <ProjectCard {...project} />
      </Fade>
    ))}
  </Grid>
)
