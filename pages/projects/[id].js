import { Box, Container } from 'theme-ui'
import ProjectSheet from '../../components/project-sheet'
import { map, find } from 'lodash'

export default ({ project = {} }) => (
  <Box as="main" sx={{ bg: 'sunken', py: [3, 4] }}>
    <Container sx={{ maxWidth: [null, 'copyPlus', 'copyUltra'], px: [0, 3] }}>
      <ProjectSheet {...project} />
    </Container>
  </Box>
)

export const getStaticPaths = async () => {
  const loadJSON = require('load-json-file')
  const projects = await loadJSON('./lib/projects-min.json')
  const paths = map(projects, 'id').map(id => ({ params: { id } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const loadJSON = require('load-json-file')
  const projects = await loadJSON('./lib/projects-content.json')
  const project = find(projects, { id })
  return { props: { project } }
}
