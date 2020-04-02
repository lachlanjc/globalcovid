import { Box, Heading, Container, Text, Link } from 'theme-ui'
import Flag from './flag'
import Content from './footer.mdx'

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
    <Container variant="narrow" sx={{ p: { mt: 3 }, a: { color: 'primary' } }}>
      <Heading
        variant="headline"
        sx={{ color: 'secondary', fontSize: [3, 4], m: 0 }}
      >
        This website was made by teenagers in{' '}
        <Link href="https://hackclub.com/">Hack&nbsp;Club</Link>
      </Heading>
      <Content />
    </Container>
  </Box>
)
