import { Box, Button, Card, Container, Flex, Heading } from 'theme-ui'
import Link from 'next/link'
import ProjectSheet from '../../components/project-sheet'
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
          sx={{ mt: [3, 4], span: { color: 'accent' } }}
        >
          A project from <span>#BuildforCOVID19</span>
        </Heading>
        <Flex sx={{ alignItems: 'center', flexWrap: 'wrap', mb: [3, 4] }}>
          <Link href="/" passHref>
            <Button
              as="a"
              sx={{
                fontSize: 2,
                border: '3px solid',
                borderColor: 'blue',
                bg: 'blue',
                mr: 3,
                mb: 2
              }}
            >
              Learn more →
            </Button>
          </Link>
          <Link href="/projects" passHref>
            <Button variant="outline" as="a" sx={{ color: 'accent', mb: 2 }}>
              See all projects →
            </Button>
          </Link>
        </Flex>
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
