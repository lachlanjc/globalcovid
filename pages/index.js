import { Box, Container, Grid, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import projects from '../lib/projects-min.json'
import ProjectCard from '../components/project-card'

export default () => (
  <>
    <Box
      as="header"
      sx={{
        bg: 'sheet',
        pt: 3,
        pb: [4, 5],
        mb: [4, 5],
        'h1 ~ p': { maxWidth: 'copy', fontSize: 2, ':last-of-type': { mb: 0 } }
      }}
    >
      <Container>
        <Text
          as="p"
          variant="subtitle"
          sx={{
            color: 'muted',
            fontSize: [2, 3],
            fontWeight: 'bold',
            textTransform: 'uppercase',
            mt: 3
          }}
        >
          Mar 26–30, 2020
        </Text>
        <Heading
          as="h1"
          sx={{
            variant: 'text.title',
            fontFamily: 'heading',
            mt: 0,
            mb: 4,
            '> span': {
              display: 'block',
              color: 'primary',
              fontSize: [2, 4, 5, 7],
              mb: 2,
              ':before': { content: '"#"', color: 'accent' },
              span: { mx: 1 }
            },
            strong: {
              color: 'blue',
              maxWidth: 'copyPlus',
              fontSize: [5, 6]
            }
          }}
        >
          <span>
            Build<span>for</span>COVID19
          </span>
          <strong>Global Online Hackathon</strong>
        </Heading>
        <About />
      </Container>
    </Box>
    <Container as="article" sx={{ py: [3, 4], mb: [5, 6] }}>
      <Heading sx={{ variant: 'text.title', fontSize: [4, 5], m: 0 }}>
        Highlighted projects
      </Heading>
      <Text
        sx={{ fontSize: [2, 3], mt: [3, 4], mb: [4, 5], maxWidth: 'copyPlus' }}
      >
        We consider every participant who dedicated their time and skills to
        #BuildforCOVID19 a winner. That said, our team of health & technical
        expert judges have spent the past week considering the viability,
        potential and scalability of submissions to land on the following
        highlighted projects.
      </Text>
      <Grid columns={[null, 2]} gap={[4, 5]} sx={{ mx: [-3, 0] }}>
        {projects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Grid>
    </Container>
  </>
)
