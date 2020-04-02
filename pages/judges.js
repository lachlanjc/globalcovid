import { Box, Container, Text } from 'theme-ui'
import fetch from 'isomorphic-unfetch'

export default ({ judges }) => (
  <>
    <Box as="header" variant="header">
      <h1>Judges</h1>
      <Text
        as="p"
        sx={{ maxWidth: 'copy', mx: 'auto', mt: -3, mb: 4, fontSize: 2 }}
      >
        We’d like to thank all the incredible people & organizations who donated
        their time to judge for this event.
      </Text>
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
