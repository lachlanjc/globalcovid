const fetch = require('isomorphic-unfetch')
const neatCsv = require('neat-csv')
const cheerio = require('cheerio')
const { last, kebabCase } = require('lodash')

const getProjects = async () => {
  const csv = await fetch(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vT09aaljVDEDqpI4XYFCFzadBwQNilIxsfAaxdKPy6O3_5bQAMAhrbzdCuotDplTGixlZe9EiKedIGS/pub?output=csv'
  ).then(r => r.text())
  const json = await neatCsv(csv)
  const projects = json.map(project => ({
    id: project['Devpost URL']
      ? last(project['Devpost URL'].split('/'))
      : kebabCase(project['Name']),
    name: project['Name'],
    desc: project['Description'],
    creators: project['Creators'],
    url: project['URL'],
    video: project['Video URL'],
    image: project['Image URL'],
    devpost: project['Devpost URL']
  }))
  return projects
}

const getProjectContent = async project => {
  if (!project.devpost) return project
  const html = await fetch(project.devpost).then(r => r.text())
  const $ = cheerio.load(html)
  const content = $('#gallery + div').html()
  return { ...project, content }
}

module.exports = { getProjects, getProjectContent }
