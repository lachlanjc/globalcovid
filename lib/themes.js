import themes from './themes.json'
import { find, kebabCase, map } from 'lodash'

export const getThemeByName = name => find(themes, { name })

export const getThemeBySlug = slug =>
  find(themes, t => kebabCase(t.name) === slug)

export const getThemeColor = name => getThemeByName(name)?.color

export const getThemesSlugs = () =>
  map(themes, 'name').map(kebabCase).filter(s => s !== 'hack-club')

export default themes
