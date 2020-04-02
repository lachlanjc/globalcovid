import { Box, Button, Card, Container, Grid, Heading, Text } from 'theme-ui'
import Link from 'next/link'
import What from '../components/landing/what.mdx'
import Why from '../components/landing/why.mdx'
import About from '../components/landing/about.mdx'
import Themes from '../components/themes.mdx'
import Timeline from '../components/landing/timeline'
import Sponsors from '../components/landing/sponsors'
import Prizes from '../components/landing/prizes.mdx'
import Requirements from '../components/landing/requirements.mdx'

export default () => (
  <>
    <Box as="header" sx={{ bg: 'sheet', mb: [4, 5] }}>
      <Container sx={{ py: [4, 5] }}>
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
          variant="title"
          sx={{ color: 'pink', fontSize: [5, 6, 7], mt: 3 }}
        >
          COVID-19 Global Hackathon
        </Heading>
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
            The what
          </Heading>
          <What />
        </Card>
        <Card>
          <Heading variant="headline" sx={{ color: 'orange' }}>
            The why
          </Heading>
          <Why />
        </Card>
      </Grid>
    </Container>
    <Container sx={{ pt: [4, 5], pb: [5, 6] }}>
      <Heading as="h2" variant="headline">
        Themes
      </Heading>
      <About />
      <Themes />
      <Grid columns={[null, null, 2]} gap={[4, 5]}>
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
