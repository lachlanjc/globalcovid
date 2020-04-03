import { Box, Container, Badge, Heading, Link, Text } from 'theme-ui'
import ProjectsGrid from '../../components/projects-grid'
import Themes from '../../components/themes'
import { filter } from 'lodash'

const color = '#ec3750'

/*
const Orpheus = () => {
  const [colorMode] = useColorMode()
  return (
    <Image
      src="/orpheus.svg"
      alt="Hack Club mascot coding"
      sx={{
        display: ['none', 'block'],
        width: [192, null, 256, 320],
        position: 'absolute',
        mt: [null, -3, -4, -5],
        top: 0,
        right: 0,
        zIndex: 0,
        filter: colorMode === 'dark' ? 'invert(100%) hue-rotate(180deg)' : ''
      }}
    />
  )
}
*/

export default ({ projects = [] }) => (
  <>
    <Box
      as="header"
      sx={{
        bg: 'sheet',
        pt: 3,
        pb: [2, 3, 4],
        mb: [4, 5],
        overflowY: 'hidden',
        position: 'relative'
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Badge variant="lg" sx={{ bg: color, color: 'sheet', mb: 2 }}>
          Made by
        </Badge>
        <Link href="https://hackclub.com/" sx={{ color }}>
          <Heading
            as="h1"
            variant="title"
            sx={{ color: 'inherit', fontSize: [5, 6] }}
          >
            Hack Club
          </Heading>
        </Link>
        <Text as="p" sx={{ fontSize: 2, maxWidth: 'copy', my: [3, 4] }}>
          <Link href="https://hackclub.com/" sx={{ color }}>
            Hack&nbsp;Club
          </Link>{' '}
          is a global nonprofit network of high school makers & student-led
          coding clubs where young people build the agency, the network, & the
          technical talent to think big & do big things in the world. Founded in
          2015 by a 16-year-old, Hack&nbsp;Clubs are now in nearly 400 high
          schools. These are highlighted projects made by Hack&nbsp;Club
          students.
        </Text>
        <Themes minimal sx={{ pb: 3 }} />
      </Container>
    </Box>
    <Container as="main" sx={{ my: [4, 5] }}>
      <ProjectsGrid projects={projects} />
    </Container>
  </>
)

export const getStaticProps = async () => {
  const loadJSON = require('load-json-file')
  let projects = await loadJSON('./lib/projects-min.json')
  projects = filter(projects, { hc: true })
  return { props: { projects } }
}
