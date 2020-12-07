import projects from '../lib/projects-content.json'
import { find } from 'lodash'
import {
  Badge,
  BaseStyles,
  Box,
  Container,
  Heading,
  IconButton,
  Image,
  Link,
  Text
} from 'theme-ui'
import { GitHub, Maximize2, ExternalLink } from 'react-feather'
import Player from 'react-player'
import Flag from './flag'
import CTA from './cta'
import { getThemeByName } from '../lib/themes.js'

const HackClub = () => (
  <Box
    as="section"
    sx={{
      py: 4,
      position: 'relative',
      bg: 'text',
      color: 'background',
      a: { color: '#ec3750' }
    }}
  >
    <Flag sx={{ position: ['relative', null, 'absolute'], top: [-3, -4, 0] }} />
    <Container variant="copy">
      <Heading variant="subtitle" sx={{ color: 'inherit', mt: 0 }}>
        By a{' '}
        <Link href="https://hackclub.com/" target="_blank">
          Hack Club
        </Link>{' '}
        high&nbsp;schooler.
      </Heading>
      <Text sx={{ fontSize: 2, mt: 2 }}>
        <Link href="https://hackclub.com/" target="_blank">
          Hack&nbsp;Club
        </Link>{' '}
        is a global nonprofit network of high school makers & student-led coding
        clubs where young people build the agency, the network, & the technical
        talent to think big & do big things in the world. Founded in 2014 by a
        16-year-old, Hack&nbsp;Clubs are now in nearly 400 high schools.
      </Text>
    </Container>
  </Box>
)

const ProjectSheet = ({ actions, id, inModal = false }) => {
  const {
    theme: themeName,
    video,
    image,
    url,
    name,
    desc,
    creators,
    email,
    devpost,
    content = ''
  } = find(projects, { id })
  const thumbnail =
    image?.toLowerCase().endsWith('medium.png') ||
    image?.toLowerCase().endsWith('medium.jpg')
  const theme = getThemeByName(themeName)
  const HeadingWrapper = url ? Link : Box
  return (
    <Box
      as="article"
      sx={{
        bg: 'elevated',
        borderRadius: [0, 'extra'],
        position: 'relative'
      }}
    >
      <Box
        as="header"
        sx={{
          bg: theme.color,
          color: 'white',
          py: [3, 4],
          px: [3, 4, 5],
          borderTopLeftRadius: [0, 'extra'],
          borderTopRightRadius: [0, 'extra'],
          position: '-webkit-sticky',
          position: 'sticky',
          top: 0,
          zIndex: 4,
          a: { color: 'white' }
        }}
      >
        <Box
          as="aside"
          sx={{
            position: ['relative', 'absolute'],
            m: [-3, 0],
            mb: 0,
            top: 0,
            right: 0,
            display: 'flex',
            flexDirection: ['row-reverse', 'column'],
            justifyContent: ['flex-start', 'center'],
            'a, button': {
              p: 3,
              color: 'white',
              width: 'auto',
              height: 'auto'
            },
            '* + a': {
              mt: [null, -3]
            }
          }}
        >
          {actions}
          {inModal ? (
            <IconButton
              title="Open on new page"
              as={Link}
              href={`/projects/${id}`}
            >
              <Maximize2 size={30} />
            </IconButton>
          ) : (
            <IconButton
              title="Open project website"
              as="a"
              href={url}
              target="_blank"
            >
              {url.includes('github.com') ? (
                <GitHub size={30} />
              ) : (
                <ExternalLink size={30} />
              )}
            </IconButton>
          )}
        </Box>
        <HeadingWrapper target="_blank" href={url} sx={{ pr: 4 }}>
          <Heading
            as="h1"
            variant="headline"
            sx={{
              fontSize: [4, 5],
              color: 'white',
              my: 0,
              display: 'inline',
              mr: [3, 4]
            }}
          >
            {name}
          </Heading>
          <Badge
            variant="lg"
            sx={{
              bg: 'snow',
              color: theme.color,
              mt: 2,
              verticalAlign: 'bottom'
            }}
          >
            {theme.name}
          </Badge>
        </HeadingWrapper>
      </Box>
      <Box
        as="section"
        sx={{
          display: thumbnail ? 'grid' : null,
          gridTemplateColumns: [
            null,
            thumbnail ? '96px 1fr' : null,
            thumbnail ? '166px 1fr' : null
          ],
          gridGap: thumbnail && [null, 4],
          bg: theme.color,
          color: 'white',
          px: [3, 4, 5],
          pb: 4
        }}
      >
        {thumbnail && (
          <Image
            src={image}
            alt="Project thumbnail"
            sx={{ display: ['none', 'block'], borderRadius: 'default' }}
          />
        )}
        <div>
          <Text as="p" sx={{ maxWidth: 'copyPlus', fontSize: [2, 3] }}>
            {desc}
          </Text>
          <Text
            variant="caption"
            as="p"
            sx={{
              mt: 3,
              color: 'inherit',
              opacity: 0.875,
              fontSize: [1, 2],
              textTransform: 'uppercase'
            }}
          >
            {creators}
          </Text>
        </div>
      </Box>
      {id === 'notes-for-support' && <HackClub />}
      <Box
        as="article"
        sx={{
          pt: 4,
          pb: [3, 4, 5],
          px: [3, 4, 5]
        }}
      >
        <Box
          sx={{
            my: [3, 4],
            '> div': {
              borderRadius: 'default',
              overflow: 'hidden',
              minHeight: [256, 384, 512],
              ' + img': { mt: 4 }
            }
          }}
        >
          {video && <Player url={video} width="100%" />}
          {image && !thumbnail && (
            <Image
              src={image}
              sx={{ width: '100%', borderRadius: 'default' }}
            />
          )}
        </Box>
        <Box
          as="section"
          sx={{
            '* a': { color: theme.color },
            'p, li': { fontSize: 2, maxWidth: 'copy' },
            'div:first-of-type': {
              borderRadius: 'extra',
              overflow: 'hidden'
            },
            'h4,h5,h6': { fontSize: 2 }
          }}
        >
          <BaseStyles dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
        <CTA
          primary={[`mailto:${email}`, 'Email the builder']}
          secondary={[devpost, 'See more on Devpost']}
          sx={{ mt: 3, mb: 4 }}
        />
      </Box>
    </Box>
  )
}

export default ProjectSheet
