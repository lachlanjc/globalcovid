import { Badge, Box } from 'theme-ui'
import Marquee from './marquee'

const Contributors = ({ titles = [] }) => (
  <Box
    as="section"
    aria-hidden
    sx={{
      bg: 'primary',
      color: 'background',
      position: 'relative',
      pt: [2, 3],
      pb: [4, 5],
      overflow: 'hidden',
      mt: [null, null, -2],
      mb: [-3, -4, -5],
      clipPath: [
        'polygon(0 0, 100% 0, 100% 90%, 0 100%, 0% 50%)',
        'polygon(0 0, 100% 0, 100% 70%, 0 100%, 0% 50%)'
      ]
    }}
  >
    <Box sx={{ pl: [3, 4, 5, 6], mb: [2, 0] }}>
      <Badge variant="header">Featuring projects from</Badge>
    </Box>
    <Box
      sx={{
        transform: ['rotate(-2deg)', 'rotate(-3deg)'],
        zIndex: 0,
        maxWidth: '100%'
      }}
    >
      <Marquee>
        {titles[0].map(title => (
          <span key={title}>{title}</span>
        ))}
      </Marquee>
      <Marquee>
        {titles[1].map(title => (
          <span key={title}>{title}</span>
        ))}
      </Marquee>
    </Box>
  </Box>
)

export default Contributors
