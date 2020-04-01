import { useState } from 'react'
import { Box, Link, Card, Image, Heading, Text } from 'theme-ui'
import { useRouter } from 'next/router'
import Player from 'react-player'
import ProjectModal from './project-modal'

export default props => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { id, video, image, name, desc, creators } = props
  return (
    <Card
      as="section"
      id={id}
      variant="secondary"
      sx={{ p: [0, 0], overflow: 'hidden' }}
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
            router.push(router.pathname, `/projects/${id}`, { shallow: true })
          }}
          sx={{ position: 'sticky', top: 0 }}
        >
          <Heading as="h3" variant="headline" sx={{ mt: 0, mb: 3 }}>
            {name}
          </Heading>
        </Link>
        <Text sx={{ fontSize: [1, 2] }}>{desc}</Text>
        <Text sx={{ mt: 3, color: 'muted', textTransform: 'uppercase' }}>
          {creators}
        </Text>
      </Box>
      {open && <ProjectModal open={[open, setOpen]} {...props} />}
    </Card>
  )
}
