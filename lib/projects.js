import loadJSON from 'load-json-file'
import { map, pick } from 'lodash'

export const getProjectCards = async () => {
  let projects = await loadJSON('./lib/projects-min.json')
  projects = map(projects, p =>
    pick(p, ['id', 'theme', 'country', 'name', 'desc', 'feat'])
  )
  return projects
}
