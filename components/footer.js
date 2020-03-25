import { Box, Heading, Container, Text, Link } from 'theme-ui'
import Flag from '../components/flag'

export default () => (
  <Box
    as="footer"
    sx={{
      py: 5,
      bg: 'sunken',
      color: 'secondary',
      textAlign: 'center',
      fontSize: 1,
      position: 'relative'
    }}
  >
    <Flag />
    <Container variant="narrow">
      <Heading
        variant="headline"
        sx={{ color: 'secondary', fontSize: [3, 4], mt: 0, mb: 3 }}
      >
        This website was made by teenagers in{' '}
        <Link href="https://hackclub.com/">Hack&nbsp;Club</Link>
      </Heading>
      <Text sx={{ mb: 3 }}>
        Design & code by <Link href="https://lachlanjc.me">@lachlanjc</Link>
      </Text>
      <Text>
        <Link href="https://github.com/hackclub/globalcovid">
          Open source on GitHub
        </Link>
      </Text>
    </Container>
  </Box>
)
