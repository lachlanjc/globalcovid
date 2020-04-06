import { Link } from 'theme-ui'
import Grouping from '../../components/grouping'

const color = '#ec3750'

export default ({ projects = [] }) => (
  <Grouping
    badge="Made by"
    color={color}
    link="https://hackclub.com/"
    title="Hack Club"
    desc={
      <>
        <Link href="https://hackclub.com/" sx={{ color }}>
          Hack&nbsp;Club
        </Link>{' '}
        is a global nonprofit network of high school makers & student-led coding
        clubs where young people build the agency, the network, & the technical
        talent to think big & do big things in the world. Founded in 2015 by a
        16-year-old, Hack&nbsp;Clubs are now in nearly 400 high schools. These
        are highlighted projects made by Hack&nbsp;Club students.
      </>
    }
    projects={projects}
  />
)

export const getStaticProps = async () => {
  const loadJSON = require('load-json-file')
  const { filter } = require('lodash')
  let projects = await loadJSON('./lib/projects-min.json')
  projects = filter(projects, { hc: true })
  return { props: { projects } }
}
