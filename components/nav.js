import {
  Box,
  Container,
  IconButton,
  Image,
  NavLink,
  Text,
  useColorMode
} from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft, Moon } from 'react-feather'

const linkEffect = {
  borderRadius: 'circle',
  transition: 'box-shadow .125s ease-in-out',
  ':hover,:focus': {
    color: 'accent',
    boxShadow: '0 0 0 2px',
    outline: 'none'
  }
}

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      ...linkEffect,
      display: 'inline-flex',
      alignItems: 'flex-end',
      width: 'auto',
      svg: { stroke: 'currentColor' },
      ...sx
    }}
  />
)

const BackButton = ({ to = '/', text = 'Back' }) => (
  <Link href={to} passHref>
    <NavButton
      as="a"
      title={to === '/' ? 'Back to homepage' : 'Back'}
      sx={{ color: 'primary', pr: 2, svg: { mr: 2 } }}
    >
      <ArrowLeft />
      {text}
    </NavButton>
  </Link>
)

const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      sx={{ color: 'secondary' }}
      title="Reverse color scheme"
    >
      <Moon size={24} />
    </NavButton>
  )
}

export default ({}) => {
  const [mode] = useColorMode()
  const { pathname } = useRouter()
  const back = pathname !== '/'
  return (
    <Box as="nav" colorMode={mode} sx={{ bg: 'sheet', py: 3 }} key="nav">
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          a: {
            fontSize: 1,
            color: 'secondary',
            textDecoration: 'none',
            mr: [3, 4]
          }
        }}
      >
        <Link href="/" passHref>
          <NavLink sx={{ lineHeight: 0 }}>
            <Image src="/icon-accent.svg" width={64} />
          </NavLink>
        </Link>
        <Link href="/conduct" passHref>
          <NavLink sx={{ ...linkEffect, px: 2, py: 1, ml: 'auto' }}>
            <Text as="span" sx={{ display: ['none', 'inline'] }}>
              Code of{' '}
            </Text>
            Conduct
          </NavLink>
        </Link>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}
