import { Box, Button, Card, Container, Grid, Heading, Text } from 'theme-ui'
import Link from 'next/link'
import About from '../components/about.mdx'
import Why from '../components/why.mdx'
import Themes from '../components/themes.mdx'
import Timeline from '../components/timeline'
import Sponsors from '../components/sponsors'
import Prizes from '../components/prizes.mdx'
import Requirements from '../components/requirements.mdx'

export default () => (
  <>
    <Box as="header" sx={{ bg: 'sheet', mb: [4, 5] }}>
      <Container sx={{ py: [4, 5] }}>
        <Heading
          as="h1"
          variant="title"
          sx={{ color: 'pink', fontSize: [5, 6, 7], mt: 3 }}
        >
          COVID-19 Global Hackathon
        </Heading>
        <Heading
          as="h2"
          variant="subtitle"
          sx={{ color: 'muted', mt: 3, mb: 4, fontFamily: 'body' }}
        >
          Mar 26–30, 2020
        </Heading>
        <Button
          as="a"
          href="https://covid-global-hackathon.devpost.com"
          sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mr: [3, 4] }}
        >
          Register
        </Button>
        <Button
          as="a"
          href="https://join.slack.com/t/globalcovidhackathon/shared_invite/zt-d25lrhkl-UAKmMq4h_zNzCQhqnNsbfw"
          variant="outline"
          sx={{ fontSize: [2, 3], px: [3, 4] }}
        >
          Join Slack
        </Button>
      </Container>
    </Box>
    <Container sx={{ py: 4 }}>
      <Grid
        columns={[null, null, 2]}
        gap={[3, 4]}
        sx={{
          h2: { mt: 0 },
          p: { maxWidth: 'copy', fontSize: [1, 2], ':last-of-type': { mb: 0 } }
        }}
      >
        <Card>
          <Heading variant="headline" sx={{ color: 'blue' }}>
            We’re running a hackathon for creative solutions.
          </Heading>
          <About />
        </Card>
        <Card>
          <Heading variant="headline" sx={{ color: 'orange' }}>
            Why?
          </Heading>
          <Why />
        </Card>
      </Grid>
    </Container>
    <Container sx={{ py: [4, 5] }}>
      <Heading as="h2" variant="headline">
        Themes
      </Heading>
      <Themes />
      <Grid columns={[null, null, 2]} gap={[3, 4]}>
        <div>
          <Heading variant="headline">Timeline</Heading>
          <Timeline />
        </div>
        <div>
          <Heading variant="headline">Sponsors</Heading>
          <Text sx={{ fontSize: 2 }}>Thanks to generous support from:</Text>
          <Sponsors />
        </div>
        <div>
          <Heading variant="headline">Prizes</Heading>
          <Prizes />
        </div>
        <div>
          <Heading variant="headline">Requirements</Heading>
          <Requirements />
          <Link href="/requirements" passHref>
            <Button as="a" variant="outline">
              Read more
            </Button>
          </Link>
        </div>
      </Grid>
    </Container>
  </>
)
