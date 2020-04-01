import { Grid, Text } from 'theme-ui'
import ProjectCard from './project-card'
import projects from '../lib/projects-min.json'

export default () => [
  <Text
    key="copy"
    sx={{ fontSize: [2, 3], mt: [3, 4], mb: [4, 5], maxWidth: 'copyPlus' }}
  >
    We consider every participant who dedicated their time and skills to
    #BuildforCOVID19 a winner. That said, our team of health & technical expert
    judges have spent the past week considering the viability, potential and
    scalability of submissions to land on the following highlighted projects.
  </Text>,
  <Grid key="grid" columns={[null, 2]} gap={[4, 5]} sx={{ mx: [-3, 0] }}>
    {projects.map(project => (
      <ProjectCard key={project.name} {...project} />
    ))}
  </Grid>
]
