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
import About from '../components/about.mdx'

export default ({ projects = [] }) => (
  <>
    <Box
      sx={{
        bg: 'sheet',
        pt: 3,
        px: 3,
        pb: [3, 4, 5],
        mb: [4, 5],
        p: { maxWidth: 'copy', fontSize: [1, 2], ':last-of-type': { mb: 0 } }
      }}
    >
      <Container>
        <Heading
          as="h1"
          sx={{
            variant: 'text.title',
            fontFamily: 'heading',
            maxWidth: 'copyPlus',
            fontSize: [3, 4, 5],
            mt: 0,
            span: {
              display: 'block',
              color: 'accent',
              fontSize: [3, 5, 6],
              mb: 3
            }
          }}
        >
          <span>#BuildforCOVID19</span> Global Online Hackathon
        </Heading>
        <Heading
          as="h2"
          variant="subtitle"
          sx={{ color: 'muted', mt: 3, mb: 4, fontFamily: 'body' }}
        >
          Mar 26–30, 2020.
        </Heading>
        <About />
      </Container>
    </Box>
    <Container sx={{ mb: [5, 6] }}>
      <Heading
        sx={{
          variant: 'text.title',
          fontFamily: 'heading',
          maxWidth: 'copyPlus',
          fontSize: [3, 4, 5],
          m: 0
        }}
      >
        Highlighted projects
      </Heading>
      <Text sx={{ fontSize: [1, 2], mt: [3, 4], mb: [4, 5], maxWidth: 'copy' }}>
        We consider every participant who dedicated their time and skills to
        #BuildforCOVID19 a winner. That said, our team of health & technical
        expert judges have spent the past week considering the viability,
        potential and scalability of submissions to land on the following
        highlighted projects.
      </Text>
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
