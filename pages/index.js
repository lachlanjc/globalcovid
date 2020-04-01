import { Box, Container, Heading, Text } from 'theme-ui'
import About from '../components/about.mdx'
import ProjectsGrid from '../components/projects-grid'
import Sponsors from '../components/sponsors'

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
      <Container
        sx={{
          display: 'grid',
          gridTemplateColumns: [null, 'auto 1fr'],
          gridGap: 4,
          section: { gridColumn: [null, 'span 2'] }
        }}
      >
        <Container sx={{ maxWidth: 'copyPlus', px: 0 }}>
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
                fontSize: [3, 5],
                span: { mx: 1 }
              }
            }}
          >
            <span>
              <Text
                as="span"
                sx={{
                  mr: 1,
                  color: 'accent',
                  WebkitTextStroke: 'currentColor',
                  WebkitTextStrokeWidth: '4px',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                #
              </Text>
              Build<span>for</span>COVID19
            </span>
            <Text
              as="strong"
              sx={{ color: 'blue', maxWidth: 'copyPlus', fontSize: [4, 5] }}
            >
              Global Online Hackathon
            </Text>
          </Heading>
          <About />
        </Container>
        <Box></Box>
        <Sponsors wide />
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
