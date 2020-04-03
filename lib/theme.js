import base from '@hackclub/theme'
import { merge } from 'lodash'

const palette = {
  pink: '#ff0f65',
  orange: '#ffa90f',
  green: '#0fffa9',
  cyan: '#0fddff',
  blue: '#0f65ff'
}

const theme = base
theme.colors = merge(theme.colors, {
  ...palette,
  primary: palette.pink,
  accent: palette.cyan,
  inverted: theme.colors.white,
  modes: {
    dark: {
      inverted: theme.colors.darker,
      accent: palette.cyan
    }
  }
})

const fonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`
theme.fonts.heading = `"Folsom Web", ${fonts}`
theme.fonts.body = `"Klima Web", ${fonts}`

theme.buttons.outline.borderWidth = 3
theme.buttons.primary.borderRadius = 'circle'
theme.buttons.primary.transition = 'transform .125s ease-in-out'
theme.buttons.primary[':focus,:hover'] = {
  transform: 'scale(1.125) rotate(-5deg)',
  boxShadow: `0 0 4px 1px ${theme.colors.primary}`
}

theme.text.title.color = 'primary'
theme.text.headline.color = 'primary'

theme.variants = {}
theme.variants.header = {
  bg: 'sheet',
  pt: 3,
  px: 3,
  pb: [2, 3, 4],
  mb: [4, 5],
  textAlign: 'center',
  h1: {
    variant: 'text.title',
    fontFamily: 'heading',
    fontSize: 5,
    maxWidth: 'narrow',
    mt: 0,
    mx: 'auto'
  }
}
theme.variants.headerLeft = merge(
  { ...theme.variants.header },
  {
    px: 0,
    textAlign: 'left',
    h1: { maxWidth: 'none', mx: 0 },
    'h1 + p': { maxWidth: 'copy', mt: -3, mb: 4, fontSize: 2 }
  }
)

theme.cards.nav = {
  bg: 'elevated',
  color: 'text',
  p: 3,
  borderRadius: 'extra',
  boxShadow: 'card',
  textDecoration: 'none',
  position: 'relative',
  overflow: 'hidden',
  fontSize: 2,
  fontWeight: 'bold',
  lineHeight: 'title',
  WebkitTapHighlightColor: 'transparent',
  transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
  ':hover,:focus': {
    transform: 'scale(1.0625)',
    boxShadow: 'elevated'
  }
}
theme.cards.secondary = {
  variant: 'cards.primary',
  bg: 'sheet',
  boxShadow: 'none',
  my: 0,
  strong: {
    variant: 'text.subheadline',
    color: 'orange',
    display: 'block',
    mb: 2
  }
}

export default theme
