import { Box, Container } from 'theme-ui'
import Flag from './flag'
import Content from './footer.mdx'

const Footer = () => (
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
    <Container
      variant="narrow"
      sx={{
        p: { mt: 3 },
        a: { color: 'primary' },
        h2: {
          fontFamily: 'heading',
          letterSpacing: 'headline',
          lineHeight: 'heading',
          color: 'secondary',
          fontSize: [3, 4],
          mt: 0,
          mb: -2
        }
      }}
    >
      <Content />
    </Container>
  </Box>
)

export default Footer
