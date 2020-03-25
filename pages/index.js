import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  IconButton,
  Text,
  useColorMode
} from 'theme-ui'
import About from '../components/about.mdx'
import Themes from '../components/themes.mdx'
import Timeline from '../components/timeline'
import Sponsors from '../components/sponsors'
import { Moon } from 'react-feather'

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <IconButton
      onClick={() =>
        colorMode !== 'dark' ? setColorMode('dark') : setColorMode('')
      }
      sx={{
        color: 'muted',
        p: 2,
        width: 'auto',
        position: 'absolute',
        top: 0,
        right: 0,
        m: 3,
        transition: '.125s ease-in-out color',
        ':hover,:focus': { color: 'accent' }
      }}
    >
      <Moon size={24} />
    </IconButton>
  )
}

export default () => (
  <>
    <Box as="header" sx={{ bg: 'sheet', mb: [4, 5] }}>
      <ThemeSwitcher />
      <Container sx={{ pt: [5, 6], pb: [4, 5] }}>
        <Heading
          as="h1"
          variant="title"
          sx={{ color: 'pink', fontSize: [5, 6, 7] }}
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
          sx={{
            borderRadius: 'circle',
            borderWidth: 3,
            fontSize: [2, 3],
            py: [3, 3],
            px: [4, 4],
            mr: [3, 4]
          }}
        >
          Register
        </Button>
        <Button
          as="a"
          href="https://join.slack.com/t/globalcovidhackathon/shared_invite/zt-d25lrhkl-UAKmMq4h_zNzCQhqnNsbfw"
          variant="outline"
          sx={{
            borderRadius: 'circle',
            borderWidth: 3,
            fontSize: [2, 3],
            px: [3, 4]
          }}
        >
          Join Slack
        </Button>
      </Container>
    </Box>
    <Container sx={{ py: 4 }}>
      <Grid columns={[null, null, '1fr 2fr']} gap={[3, 4]}>
        <Card
          sx={{
            bg: 'orange',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Heading variant="headline" sx={{ color: 'text' }}>
            COVID-19 is an unprecedented global crisis.
          </Heading>
        </Card>
        <Card sx={{ p: { maxWidth: 'copy', fontSize: [1, 2] } }}>
          <Heading variant="headline" sx={{ color: 'green' }}>
            We’re running a hackathon for&nbsp;creative solutions.
          </Heading>
          <About />
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
          <Heading as="h2" variant="headline">
            Timeline
          </Heading>
          <Timeline />
        </div>
        <div>
          <Heading as="h2" variant="headline">
            Sponsors
          </Heading>
          <Text sx={{ fontSize: 2 }}>
            Thanks to the generous support from all these technology companies:
          </Text>
          <Sponsors />
        </div>
      </Grid>
    </Container>
  </>
)
