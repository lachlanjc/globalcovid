import { useState } from 'react'
import { Box, Link, Card, Heading, Text } from 'theme-ui'
// import { useRouter } from 'next/router'
import ProjectModal from './project-modal'
import { Star } from 'react-feather'
import { flag } from 'country-emoji'
import { getThemeColor } from '../lib/themes'

export default props => {
  // const router = useRouter()
  // const [initialPath] = useState(router.pathname)
  const [open, setOpen] = useState(false)
  const { id, theme, feat, country, name, desc } = props
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
        borderRadius: [0, 'default'],
        breakInside: 'avoid',
        position: 'relative',
        my: 4
      }}
    >
      {feat && (
        <Box
          title="Featured project"
          sx={{
            bg: getThemeColor(theme),
            color: 'white',
            polygon: {
              fill: 'white',
              transform: 'rotate(-45deg)',
              transformOrigin: 'center center'
            },
            width: 48,
            height: 48,
            display: 'flex',
            pl: 32,
            pt: 18,
            position: 'absolute',
            top: -24,
            left: -24,
            transform: 'rotate(45deg)'
          }}
        >
          <Star size={12} aria-label="Star icon" />
        </Box>
      )}
      <Text
        as="span"
        title={`Made in ${country}`}
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
