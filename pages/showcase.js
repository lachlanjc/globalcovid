import {
  Box,
  Link,
  Button,
  Card,
  Container,
  Grid,
  Image,
  Heading,
  Text
} from 'theme-ui'
import Player from 'react-player'
import fetch from 'isomorphic-unfetch'
import neatCsv from 'neat-csv'

export default ({ projects = [] }) => (
  <>
    <Box variant="variants.header">
      <h1>Highlighted Projects</h1>
    </Box>
    <Container sx={{ mb: [5, 6] }}>
      <Grid columns={[null, 2]} gap={[3, 4, 5]}>
        {projects.map(project => (
          <Card
            variant="secondary"
            sx={{ p: [0, 0], overflow: 'hidden' }}
            key={project.name}
          >
            {project.video && <Player url={project.video} width="100%" />}
            {project.image && (
              <Image src={project.image} sx={{ width: '100%' }} />
            )}
            <Box sx={{ p: [2, 3, 4] }}>
              <Link href={project.url}>
                <Heading as="h3" variant="headline" sx={{ mt: 0, mb: 2 }}>
                  {project.name}
                </Heading>
              </Link>
              <Text sx={{ fontSize: [1, 2] }}>{project.desc}</Text>
              <Text sx={{ mt: 3, color: 'muted', textTransform: 'uppercase' }}>
                {project.creators}
              </Text>
            </Box>
          </Card>
        ))}
      </Grid>
    </Container>
  </>
)

export const getStaticProps = async () => {
  const csv = await fetch(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vT09aaljVDEDqpI4XYFCFzadBwQNilIxsfAaxdKPy6O3_5bQAMAhrbzdCuotDplTGixlZe9EiKedIGS/pub?output=csv'
  ).then(r => r.text())
  const json = await neatCsv(csv)
  const projects = json.map(project => ({
    name: project['Name'],
    desc: project['Description'],
    creators: project['Creators'],
    url: project['URL'],
    video: project['Video URL'],
    image: project['Image URL']
  }))
  return { props: { projects } }
}
