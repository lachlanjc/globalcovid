import { Box, Card, Container, Heading } from 'theme-ui'
import ProjectSheet from '../../components/project-sheet'
import CTA from '../../components/cta'
import Themes from '../../components/themes'
import { map, find } from 'lodash'

export default ({ project = {} }) => (
  <Box as="main" sx={{ bg: 'sunken', py: [3, 4] }}>
    <Container
      sx={{
        maxWidth: [null, 'copyPlus', 'copyUltra'],
        px: [0, 3],
        article: {
          boxShadow: 'card',
          borderRadius: 'extra'
        }
      }}
    >
      <ProjectSheet {...project} />
      <Card variant="primary" sx={{ mt: [4, 5], py: [3, 0] }}>
        <Heading
          variant="headline"
          sx={{ mt: [3, 4], color: 'text', span: { color: 'accent' } }}
        >
          A project from <span>#BuildforCOVID19</span>
        </Heading>
        <CTA
          primary={['/', 'Learn more']}
          secondary={['/projects', 'See all projects']}
          sx={{ mb: [3, 4] }}
        />
        <Themes minimal />
      </Card>
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
