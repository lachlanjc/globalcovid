import { Box, Container, Image } from 'theme-ui'
import About from './about.mdx'

export default () => (
  <Box as="section" sx={{ bg: 'sheet', py: [4, 5] }}>
    <Container
      sx={{
        position: 'relative',
        strong: { color: 'accent' },
        '> p': { fontSize: [2, 3], maxWidth: 'copyPlus', mt: 0 }
      }}
    >
      <About />
      <Image
        src="/icon-flat.svg"
        aria-hidden
        alt="Logo"
        sx={{
          display: ['none', null, 'block'],
          position: 'absolute',
          bottom: 0,
          right: 3,
          transition: 'transform 0.75s ease-in-out',
          transformOrigin: 'right bottom',
          ':hover': {
            transform: 'scale(2) rotate(-25deg)'
          },
          '@media (prefers-reduced-motion: reduce)': {
            transform: 'none !important'
          }
        }}
      />
    </Container>
  </Box>
)
