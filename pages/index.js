import { Button, Container, Flex, Heading, Text } from 'theme-ui'
import Link from 'next/link'
import Banner from '../components/banner'
import About from '../components/about'
import ProjectsCopy from '../components/projects.mdx'
import Themes from '../components/themes'
import ProjectsGrid from '../components/projects-grid'
import projects from '../lib/projects-min.json'
import { map, uniq, concat, shuffle } from 'lodash'

export default ({ titles = [] }) => (
  <>
    <Banner titles={titles} />
    <About />
    <Container
      id="projects"
      as="article"
      sx={{ py: [3, 4], mt: [3, 4], mb: [5, 6] }}
    >
      <Heading sx={{ variant: 'text.title', fontSize: [4, 5] }}>
        Highlighted projects
      </Heading>
      <Text
        sx={{ fontSize: [2, 3], mt: [3, 4], mb: [2, 3], maxWidth: 'copyPlus' }}
      >
        <ProjectsCopy />
      </Text>
      <Flex
        sx={{
          alignItems: 'center',
          flexWrap: 'wrap',
          mb: [4, 5]
        }}
      >
        <Link href="/projects" passHref>
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
            See all projects →
          </Button>
        </Link>
        <Link href="/judges" passHref>
          <Button variant="outline" as="a" sx={{ color: 'accent', mb: 2 }}>
            Meet the judges →
          </Button>
        </Link>
      </Flex>
      <Themes />
      <ProjectsGrid projects={projects} />
    </Container>
  </>
)

export const getStaticProps = async () => {
  const loadJSON = require('load-json-file')
  const list = await loadJSON('./lib/projects-content.json')
  let titles = map(list, 'creators')
    .join(', ')
    .split(', ')
  titles = uniq(titles)
  titles = concat(titles, map(list, 'name'))
  titles = shuffle(titles)
  return { props: { titles } }
}
