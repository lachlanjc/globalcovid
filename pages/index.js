import { Box, Container, Grid, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import ProjectsGrid from '../components/projects-grid'

export default () => (
  <>
    <Box
      as="header"
      sx={{
        bg: 'sheet',
        pt: 3,
        pb: [4, 5],
        mb: [4, 5],
        'h1 ~ p': {
          maxWidth: 'copyPlus',
          fontSize: [2, 3],
          ':last-of-type': { mb: 0 }
        }
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
            mt: [null, 3]
          }}
        >
          Mar 26–30, 2020
        </Text>
        <Heading
          as="h1"
          sx={{
            variant: 'text.title',
            fontFamily: 'heading',
            mt: 3,
            mb: 4,
            '> span': {
              display: 'block',
              color: 'primary',
              fontSize: [3, 5, 6],
              mb: 2,
              ':before': { content: '"#"', color: 'accent' },
              span: { mx: 1 }
            },
            strong: {
              color: 'blue',
              maxWidth: 'copyPlus',
              fontSize: [4, 5, 6]
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
    <Container id="projects" as="article" sx={{ py: [3, 4], mb: [5, 6] }}>
      <Heading sx={{ variant: 'text.title', fontSize: [4, 5], m: 0 }}>
        Highlighted projects
      </Heading>
      <ProjectsGrid />
    </Container>
  </>
)
