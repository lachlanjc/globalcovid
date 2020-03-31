import { Box, Container, Grid, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import projects from '../lib/projects-min.json'
import ProjectCard from '../components/project-card'

export default () => (
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
          <ProjectCard key={project.name} {...project} />
        ))}
      </Grid>
    </Container>
  </>
)
