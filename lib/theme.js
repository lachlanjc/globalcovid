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
  modes: {
    dark: {
      accent: palette.cyan
    }
  }
})

theme.buttons.primary = {
  ...theme.buttons.primary,
  display: 'inline-flex',
  alignItems: 'center'
}

theme.text.title.color = 'primary'
theme.text.headline.color = 'primary'

const fonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`
theme.fonts.heading = `"Folsom Web", ${fonts}`
theme.fonts.body = `"Klima Web", ${fonts}`

export default theme
