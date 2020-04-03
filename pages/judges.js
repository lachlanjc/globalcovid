import { Box, Container, Text } from 'theme-ui'
import fetch from 'isomorphic-unfetch'

export default ({ judges }) => (
  <>
    <Box as="header" variant="headerLeft">
      <Container>
        <h1>Judges</h1>
        <p>
          We’d like to thank all of our judges from the health, science and
          technology sectors for contributing their time and expertise. On
          behalf of the organizing team from Slow Ventures, and our supporting
          tech ecosystem companies and partners, we’re so grateful to the
          following organizations:
        </p>
      </Container>
    </Box>
    <Container
      sx={{
        pb: [4, null, 5],
        fontSize: 2,
        ul: {
          columnWidth: 256,
          columnGap: [3, null, 4],
          listStyle: 'none',
          pl: 0
        },
        li: {
          breakInside: 'avoid',
          py: 1,
          borderBottom: '1px solid',
          borderBottomColor: 'border'
        }
      }}
    >
      <ul>
        {judges.map(judge => (
          <li key={judge}>{judge}</li>
        ))}
      </ul>
    </Container>
  </>
)

export const getStaticProps = async () => {
  const judges = await fetch(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSQnikhtzfTdRrKKxc2ZEBLRFnydNj4BWfV8lQCNq9DwPFPar1c1tBjqUqaG8pPrMiEZnoolcahbCkZ/pub?output=csv'
  )
    .then(r => r.text())
    .then(t => t.split('\n'))
  return { props: { judges } }
}
