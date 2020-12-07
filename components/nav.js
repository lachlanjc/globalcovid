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
  fontSize: 1,
  borderRadius: 'circle',
  transition: 'box-shadow .125s ease-in-out',
  ':hover,:focus': {
    color: 'blue',
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

export const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      sx={{ color: 'secondary', ml: 'auto', ...props.sx }}
      title="Reverse color scheme"
    >
      <Moon size={24} />
    </NavButton>
  )
}

const Nav = () => {
  const { pathname } = useRouter()
  const home = pathname === '/'
  if (home) return null
  const [mode] = useColorMode()
  return (
    <Box as="nav" colorMode={mode} sx={{ bg: 'sheet', py: 3, zIndex: 4 }}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          a: {
            color: 'secondary',
            textDecoration: 'none',
            mr: [3, 4]
          }
        }}
      >
        <Link href="/" passHref>
          <NavLink
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'secondary',
              textTransform: 'uppercase',
              fontSize: [1, 2],
              fontWeight: 'bold'
            }}
          >
            <Image src="/icon-flat.svg" width={64} sx={{ mr: 3 }} />
            Home
          </NavLink>
        </Link>
        <Link
          href={home ? '/#projects' : '/projects'}
          prefetch={false}
          passHref
        >
          <NavLink sx={{ ...linkEffect, px: 2, py: 1 }}>Projects</NavLink>
        </Link>
        <Link href="/judges" passHref>
          <NavLink sx={{ ...linkEffect, px: 2, py: 1 }}>Judges</NavLink>
        </Link>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}

export default Nav
