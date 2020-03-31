const { getProjects, getProjectContent } = require('./data')
const writeJSON = require('write-json-file')

const getDetails = async () => {
  let projects = await getProjects()
  writeJSON('./lib/projects-min.json', projects)
  projects = await Promise.all(projects.map(getProjectContent))
  writeJSON('./lib/projects-content.json', projects)
  return projects
}

getDetails()
