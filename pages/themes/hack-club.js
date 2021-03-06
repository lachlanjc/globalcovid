import { Link } from 'theme-ui'
import Grouping from '../../components/grouping'

const color = '#ec3750'

const HackClubPage = ({ projects = [] }) => (
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

export default HackClubPage

export const getStaticProps = async () => {
  const { filter } = require('lodash')
  const { getProjectCards } = require('../../lib/projects')
  let projects = await getProjectCards()
  projects = filter(projects, { hc: true })
  return { props: { projects } }
}
