import { Flex, Button } from 'theme-ui'
import Link from 'next/link'

export default ({ primary = [], secondary = {}, sx = {} }) => (
  <Flex
    sx={{
      alignItems: 'center',
      flexWrap: 'wrap',
      ...sx
    }}
  >
    <Link href={primary[0]} passHref>
      <Button
        as="a"
        sx={{
          fontSize: 2,
          border: '3px solid',
          borderColor: 'blue',
          bg: 'blue',
          mr: 3,
          mb: 2
        }}
      >
        {primary[1]} →
      </Button>
    </Link>
    <Link href={secondary[0]} passHref>
      <Button variant="outline" as="a" sx={{ color: 'accent', mb: 2 }}>
        {secondary[1]} →
      </Button>
    </Link>
  </Flex>
)
