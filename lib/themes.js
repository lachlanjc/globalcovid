import themes from './themes.json'
import { find, kebabCase, map } from 'lodash'

// http://www.colorbox.io/#steps=7#hue_start=315#hue_end=249#hue_curve=easeInOutSine#sat_start=56#sat_end=79#sat_curve=easeInOutQuad#sat_rate=104#lum_start=100#lum_end=100#lum_curve=linear#lock_hex=ff0f65#minor_steps_map=none

export const getThemeByName = name => find(themes, { name })

export const getThemeBySlug = slug =>
  find(themes, t => kebabCase(t.name) === slug)

export const getThemeColor = name => getThemeByName(name)?.color

export const getThemesSlugs = () => map(themes, 'name').map(kebabCase)

export default themes
