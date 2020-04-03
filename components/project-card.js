import { useState } from 'react'
import { Box, Link, Card, Image, Heading, Text } from 'theme-ui'
// import { useRouter } from 'next/router'
import Player from 'react-player'
import ProjectModal from './project-modal'
import { getThemeColor } from '../lib/themes'

export default props => {
  // const router = useRouter()
  // const [initialPath] = useState(router.pathname)
  const [open, setOpen] = useState(false)
  const { id, theme, video, image, name, desc, creators } = props
  const closeModal = () => {
    setOpen(false)
    // router.push(router.pathname, initialPath, { shallow: true })
  }
  return (
    <Card
      as="section"
      id={id}
      variant="secondary"
      sx={{ p: [0, 0], overflow: 'hidden', borderRadius: [0, 'default'] }}
    >
      {video ? (
        <Player url={video} width="100%" />
      ) : (
        image && <Image src={image} sx={{ width: '100%' }} />
      )}
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
            sx={{ color: 'inherit', mt: 0, mb: 3 }}
          >
            {name}
          </Heading>
        </Link>
        <Text sx={{ fontSize: [1, 2] }}>{desc}</Text>
        <Text sx={{ mt: 3, color: 'muted', textTransform: 'uppercase' }}>
          {creators}
        </Text>
      </Box>
      {open && <ProjectModal open={open} onClose={closeModal} {...props} />}
    </Card>
  )
}
