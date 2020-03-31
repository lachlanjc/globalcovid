import { Box, Link, BaseStyles, Image, Heading, Text } from 'theme-ui'
import { ExternalLink } from 'react-feather'
import Player from 'react-player'

export default ({
  video,
  image,
  url,
  name,
  desc,
  creators,
  content,
  devpost
}) => (
  <Box
    as="article"
    sx={{ overflow: 'hidden', bg: 'elevated', borderRadius: [0, 'extra'] }}
  >
    <Box
      as="header"
      sx={{ bg: 'primary', color: 'white', px: [3, 4, 5], py: [4, 5] }}
    >
      <Link
        target="_blank"
        href={url}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'inherit',
          mb: [3, 4]
        }}
      >
        <Heading
          as="h1"
          variant="headline"
          sx={{ fontSize: [4, 5], color: 'white', my: 0, mr: 3 }}
        >
          {name}
        </Heading>
        <ExternalLink size={32} />
      </Link>
      <Text as="p" sx={{ fontSize: [2, 3], textAlign: 'center' }}>
        {desc}
      </Text>
    </Box>
    <Box
      as="article"
      sx={{
        py: [4, 5],
        px: [3, 4, 5],
        p: { fontSize: 2 },
        'div:first-of-type': {
          borderRadius: 'extra',
          overflow: 'hidden',
          minHeight: [null, 512]
        }
      }}
    >
      <Text
        variant="caption"
        as="p"
        sx={{
          fontSize: [1, 2],
          textTransform: 'uppercase',
          textAlign: 'center'
        }}
      >
        {creators}
      </Text>
      <Box sx={{ my: [3, 4], img: [3, 4] }}>
        {video && <Player url={video} width="100%" />}
        {image && <Image src={image} sx={{ width: '100%' }} />}
      </Box>
      <BaseStyles dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  </Box>
)
