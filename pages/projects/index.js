import { Box, Container } from 'theme-ui'
import ProjectsCopy from '../../components/projects.mdx'
import ProjectsGrid from '../../components/projects-grid'
import Themes from '../../components/themes'

export default ({ projects = [] }) => (
  <>
    <Box as="header" variant="headerLeft">
      <Container>
        <h1>Highlighted projects</h1>
        <ProjectsCopy />
        <Themes minimal sx={{ pb: 3 }} />
      </Container>
    </Box>
    <Container as="main" sx={{ my: [4, 5] }}>
      <ProjectsGrid projects={projects} />
    </Container>
  </>
)

export const getStaticProps = async () => {
  const { getProjectCards } = require('../../lib/projects')
  let projects = await getProjectCards()
  return { props: { projects } }
}
