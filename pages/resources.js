import { Box, Button, Card, Container, Grid, Heading, Text } from 'theme-ui'
import fetch from 'isomorphic-unfetch'
import neatCsv from 'neat-csv'
import { trim, isEmpty, last, groupBy } from 'lodash'

const colors = ['pink', 'orange', 'blue']

export default ({ resources = [] }) => (
  <>
    <Box variant="variants.header">
      <h1>Resources</h1>
    </Box>
    <Container sx={{ mb: [5, 6] }}>
      {Object.keys(resources).map((topic, i) => (
        <>
          <Heading
            as="h2"
            variant="headline"
            sx={{ color: colors[i], mt: [4, 5], mb: [3, 4] }}
          >
            {topic}
          </Heading>
          <Grid gap={[3, 4, 5]} columns={[null, 2, 3]}>
            {resources[topic].map(resource => (
              <Box key={resource.name}>
                <Heading
                  as="h3"
                  variant="subheadline"
                  sx={{ color: colors[i], fontFamily: 'body' }}
                >
                  {resource.name}
                </Heading>
                <Text>{resource.desc}</Text>
              </Box>
            ))}
          </Grid>
        </>
      ))}
    </Container>
  </>
)

export const getStaticProps = async () => {
  const csv = await fetch(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTGzERzutemdJWqFNw1KnqnbXo9gAf5LdIpicGo4l56FeZ-qYF9DmM_zblwULDraic3TocjLAc6SMkn/pub?output=csv'
  ).then(r => r.text())
  const json = await neatCsv(csv)
  let resources = []
  json.forEach(({ Topic, Resource, Description }) => {
    const topic = isEmpty(trim(Topic)) ? last(resources)?.topic : trim(Topic)
    return resources.push({
      topic,
      name: trim(Resource),
      desc: trim(Description)
    })
  })
  resources = groupBy(resources, 'topic')
  return { props: { resources } }
}
