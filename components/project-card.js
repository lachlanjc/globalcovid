import { Box, Link, Card, Image, Heading, Text } from 'theme-ui'
import NextLink from 'next/link'
import Player from 'react-player'

export default ({ id, video, image, url, name, desc, creators }) => (
  <Card variant="secondary" sx={{ p: [0, 0], overflow: 'hidden' }}>
    {video ? (
      <Player url={video} width="100%" />
    ) : (
      image && <Image src={image} sx={{ width: '100%' }} />
    )}
    <Box sx={{ p: [2, 3, 4] }}>
      <NextLink href={`/projects/${id}`} prefetch={false} passHref>
        <Link>
          <Heading as="h3" variant="headline" sx={{ mt: 0, mb: 2 }}>
            {name}
          </Heading>
        </Link>
      </NextLink>
      <Text sx={{ fontSize: [1, 2] }}>{desc}</Text>
      <Text sx={{ mt: 3, color: 'muted', textTransform: 'uppercase' }}>
        {creators}
      </Text>
    </Box>
  </Card>
)
