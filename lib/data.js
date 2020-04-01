const fetch = require('isomorphic-unfetch')
const neatCsv = require('neat-csv')
const cheerio = require('cheerio')
const { last, kebabCase, isEmpty } = require('lodash')

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

const getProjectContent = async props => {
  if (!props.devpost) return props
  const project = JSON.parse(JSON.stringify(props))
  const html = await fetch(project.devpost).then(r => r.text())
  const $ = cheerio.load(html)
  project.image = isEmpty(project.image)
    ? $('meta[itemprop="image"]').attr('content')
    : project.image
  project.description = $('meta[property="og:description"]').attr('content')
  project.creators = $('.user-profile-link')
    .map((i, el) => $(el).text())
    .get()
    .filter(n => !isEmpty(n))
    .join(', ')
  project.content = $('#gallery + div').html()
  return project
}

module.exports = { getProjects, getProjectContent }
