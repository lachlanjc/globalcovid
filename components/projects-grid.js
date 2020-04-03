import { Box } from 'theme-ui'
import { Fade } from 'react-reveal'
import ProjectCard from './project-card'

export default ({ projects = [] }) => (
  <Box
    as="article"
    sx={{
      mt: [0, -4],
      mx: [-3, 0],
      columnCount: [null, 2],
      columnGap: [null, 4]
    }}
  >
    {projects.map(project => (
      <Fade key={project.id}>
        <ProjectCard {...project} />
      </Fade>
    ))}
  </Box>
)
