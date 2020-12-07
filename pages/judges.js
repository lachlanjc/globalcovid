import { Box, Container } from 'theme-ui'

const JudgesPage = ({ judges }) => (
  <>
    <Box as="header" variant="headerLeft">
      <Container>
        <h1>Judges</h1>
        <p>
          We’d like to thank all of our judges for contributing their time and
          expertise.
        </p>
      </Container>
    </Box>
    <Container sx={{ pb: [4, null, 5] }}>
      <Box as="ul" variant="list">
        {judges.map(judge => (
          <li key={judge}>{judge}</li>
        ))}
      </Box>
    </Container>
  </>
)

export default JudgesPage

export const getStaticProps = async () => {
  const judges = await fetch(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSQnikhtzfTdRrKKxc2ZEBLRFnydNj4BWfV8lQCNq9DwPFPar1c1tBjqUqaG8pPrMiEZnoolcahbCkZ/pub?output=csv'
  )
    .then(r => r.text())
    .then(t => t.split('\n').map(j => j.replace(/"/g, '')))
  return { props: { judges } }
}
