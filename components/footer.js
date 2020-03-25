import { Box, Container, Text, Link } from 'theme-ui'

export default () => (
  <Box
    as="footer"
    sx={{ py: [4, 5], bg: 'sunken', textAlign: 'center', fontSize: 1 }}
  >
    <Container variant="narrow">
      <Text sx={{ mb: 3 }}>
        Site by <Link href="https://lachlanjc.me">@lachlanjc</Link>
        {' / '}
        <Link href="https://hackclub.com/">Hack&nbsp;Club</Link>, 2020.
      </Text>
      <Text>
        <Link href="https://github.com/hackclub/globalcovid">
          Open source on GitHub
        </Link>
      </Text>
    </Container>
  </Box>
)
