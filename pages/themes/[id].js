import Grouping from '../../components/grouping'
import { getThemesSlugs, getThemeBySlug } from '../../lib/themes'
import { filter } from 'lodash'

const ThemePage = ({ theme, projects = [] }) => (
  <Grouping
    color={theme.color}
    title={theme.name}
    desc={theme.desc}
    projects={projects}
  />
)

export default ThemePage

export const getStaticPaths = async () => {
  const paths = getThemesSlugs().map(id => ({ params: { id } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const theme = getThemeBySlug(id)
  const { getProjectCards } = require('../../lib/projects')
  let projects = await getProjectCards()
  projects =
    theme.name === 'Featured'
      ? filter(projects, { feat: true })
      : filter(projects, { theme: theme.name })
  return { props: { theme, projects } }
}
