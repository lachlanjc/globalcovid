import { Box, Container, Heading, Text } from 'theme-ui'
import Marquee from './marquee'
import { ColorSwitcher } from './nav'
import { shuffle } from 'lodash'

export default ({ titles = [] }) => (
  <Box
    as="header"
    sx={{
      bg: 'primary',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <Box
      as="aside"
      aria-hidden
      sx={{
        position: 'absolute',
        top: [2, 3],
        left: 0,
        right: 0,
        transform: ['scale(0.75) rotate(-2deg)', 'rotate(-4deg)'],
        zIndex: 0
      }}
    >
      <Marquee>
        {titles.map(title => (
          <span key={title}>{title}</span>
        ))}
      </Marquee>
      <Marquee>
        {shuffle(titles).map(title => (
          <span key={title}>{title}</span>
        ))}
      </Marquee>
    </Box>
    <ColorSwitcher
      sx={{
        color: 'white',
        position: 'absolute',
        top: [3, 4],
        right: [3, 4],
        width: 'auto',
        height: 'auto',
        ':focus,:hover': { color: 'accent' }
      }}
    />
    <Container as="article" sx={{ pt: [5, 6], pb: [3, 4] }}>
      <Text
        as="p"
        variant="subtitle"
        sx={{
          color: 'white',
          opacity: 0.75,
          mt: [3, 0],
          fontSize: [2, 3],
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}
      >
        Mar 26–30, 2020
      </Text>
      <Heading
        as="h1"
        sx={{
          letterSpacing: 'title',
          lineHeight: 'title',
          fontFamily: 'heading',
          color: 'inverted',
          mt: [2, 3],
          mb: 4,
          '> span': {
            display: 'block',
            fontSize: [5, 6],
            '@media (max-width: 22em)': {
              fontSize: 4
            },
            '@media (min-width: 72em)': {
              fontSize: 7
            }
          },
          kbd: {
            display: 'inline-block',
            fontFamily: 'inherit',
            WebkitTextStroke: 'currentColor',
            WebkitTextStrokeWidth: ['2px', '4px'],
            WebkitTextFillColor: theme => theme.colors.primary,
            transition: 'all .125s ease-in-out',
            ':hover': {
              color: 'accent',
              textShadow: theme => `0 0 12px ${theme.colors.accent}`,
              transform: 'rotate(-4deg) scale(1.025)'
            }
          }
        }}
      >
        <span>
          <kbd>18,000+</kbd> innovators
        </span>
        <span>
          from <kbd>175</kbd> countries
        </span>
        <Text
          as="span"
          sx={{
            display: 'inline !important',
            br: { display: ['none', 'block', 'none'] }
          }}
        >
          created <kbd>1,560</kbd> projects
          <br /> to{' '}
        </Text>
        <Text
          as="span"
          sx={{
            display: 'inline !important',
            color: 'accent',
            span: { mx: 2 },
            transition: 'text-shadow 1s ease-in-out',
            ':hover': {
              textShadow: theme => `0 0 16px ${theme.colors.accent}`
            },
            br: { display: [null, null, 'none'] }
          }}
        >
          #Build<span>For</span>
          <br />
          COVID19
        </Text>
      </Heading>
    </Container>
  </Box>
)
