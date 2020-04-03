import { useState } from 'react'
import { Box, Link, Card, Heading, Text } from 'theme-ui'
// import { useRouter } from 'next/router'
import ProjectModal from './project-modal'
import { flag } from 'country-emoji'
import { getThemeColor } from '../lib/themes'

export default props => {
  // const router = useRouter()
  // const [initialPath] = useState(router.pathname)
  const [open, setOpen] = useState(false)
  const { id, theme, video, country, name, desc } = props
  const closeModal = () => {
    setOpen(false)
    // router.push(router.pathname, initialPath, { shallow: true })
  }
  return (
    <Card
      as="section"
      id={id}
      variant="secondary"
      sx={{
        p: [0, 0],
        overflow: 'hidden',
        borderRadius: [0, 'default'],
        breakInside: 'avoid',
        my: 4
      }}
    >
      <Text
        as="span"
        sx={{
          position: 'absolute',
          top: [2, 3],
          right: [2, 3],
          fontSize: [2, 3],
          opacity: 0.75
        }}
      >
        {flag(country)}
      </Text>
      <Box sx={{ p: [3, 4] }}>
        <Link
          href={`/projects/${id}`}
          onClick={e => {
            e.preventDefault()
            setOpen(true)
            // router.push(router.pathname, `/projects/${id}`, { shallow: true })
          }}
          sx={{ position: 'sticky', top: 0, color: getThemeColor(theme) }}
        >
          <Heading
            as="h3"
            variant="headline"
            sx={{ fontSize: [3, 4], color: 'inherit', mt: 0, mb: 3 }}
          >
            {name}
          </Heading>
        </Link>
        <Text sx={{ fontSize: 2 }}>{desc}</Text>
      </Box>
      {open && <ProjectModal open={open} onClose={closeModal} {...props} />}
    </Card>
  )
}
