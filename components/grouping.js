import { Box, Container, Badge, Heading, Link, Text } from 'theme-ui'
import ProjectsGrid from './projects-grid'
import Themes from './themes'

export default ({
  badge = 'Theme',
  color,
  link,
  title,
  desc,
  projects = []
}) => (
  <>
    <Box
      as="header"
      sx={{
        bg: 'sheet',
        pt: 3,
        pb: [2, 3, 4],
        mb: [4, 5],
        overflowY: 'hidden',
        position: 'relative'
      }}
    >
      <Container>
        <Badge variant="lg" sx={{ bg: color, color: 'sheet', mb: 2 }}>
          {badge}
        </Badge>
        {link ? (
          <Link href={link} sx={{ color }}>
            <Heading
              as="h1"
              variant="title"
              sx={{ color: 'inherit', fontSize: [5, 6] }}
            >
              {title}
            </Heading>
          </Link>
        ) : (
          <Heading as="h1" variant="title" sx={{ color, fontSize: [5, 6] }}>
            {title}
          </Heading>
        )}
        <Text as="p" sx={{ fontSize: 2, maxWidth: 'copy', my: [3, 4] }}>
          {desc}
        </Text>
        <Themes minimal sx={{ pb: 3 }} />
      </Container>
    </Box>
    <Container as="main" sx={{ my: [4, 5] }}>
      <ProjectsGrid projects={projects} />
    </Container>
  </>
)
