import { Box } from 'theme-ui'
import { keyframes } from '@emotion/core'

const forwards = keyframes({
  from: { transform: 'rotate(-4deg) translateX(0)' },
  to: { transform: 'rotate(-4deg) translateX(-100%)' }
})
const backwards = keyframes({
  from: { transform: 'rotate(-4deg) translateX(-100%)' },
  to: { transform: 'rotate(-4deg) translateX(0)' }
})

export default props => (
  <Box
    as="section"
    sx={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      transform: 'rotate(-8deg)',
      animation: `${forwards} 16s linear infinite`,
      position: 'absolute',
      top: 4,
      left: 0,
      right: 0,
      ':last-of-type': {
        pt: 4,
        animationName: backwards
      },
      span: {
        fontSize: [1, 2],
        mr: 3,
        ':nth-of-type(3n+1)': { color: 'orange' },
        ':nth-of-type(7n)': { color: 'accent' }
      }
    }}
    {...props}
  />
)
