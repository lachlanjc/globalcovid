import { Box } from 'theme-ui'
import { keyframes } from '@emotion/core'

const forwards = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(-100%)' }
})
const backwards = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' }
})

const Marquee = props => (
  <Box
    as="p"
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      animation: `${forwards} linear infinite alternate`,
      animationDuration: ['192s', '160s'],
      width: 'fit-content',
      ':last-of-type': {
        animationName: backwards
      },
      '@media (prefers-reduced-motion: reduce)': {
        animation: 'none !important'
      },
      span: {
        fontSize: [0, 1, 2],
        mr: 3
      }
    }}
    {...props}
  />
)

export default Marquee
