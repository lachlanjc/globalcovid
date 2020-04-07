import themes from './themes.json'
import { find, kebabCase, map } from 'lodash'

export const getThemeByName = name => find(themes, { name })

export const getThemeBySlug = slug =>
  find(themes, t => kebabCase(t.name) === slug)

// https://www.colorbox.io/#steps=9#hue_start=315#hue_end=228#hue_curve=linear#sat_start=96#sat_end=64#sat_curve=easeOutCubic#sat_rate=128#lum_start=96#lum_end=96#lum_curve=linear#lock_hex=ff0f65#minor_steps_map=none
export const getThemeColor = name => getThemeByName(name)?.color

export const getThemesSlugs = () => map(themes, 'name').map(kebabCase)

export default themes
