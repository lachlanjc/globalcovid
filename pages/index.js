import { Box, Button, Container, Flex, Heading, Image, Text } from 'theme-ui'
import Link from 'next/link'
import About from '../components/about.mdx'
import ProjectsCopy from '../components/projects.mdx'
import Themes from '../components/themes'
import ProjectsGrid from '../components/projects-grid'
import projects from '../lib/projects-min.json'
import Marquee from '../components/marquee'
import { ColorSwitcher } from '../components/nav'
import { map, uniq, concat, shuffle } from 'lodash'

export default ({ titles = [] }) => (
  <>
    <Box
      as="header"
      sx={{
        bg: 'primary',
        color: 'white',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      <Box
        as="aside"
        aria-hidden
        sx={{
          position: 'absolute',
          top: [2, 3],
          left: 0,
          right: 0,
          transform: ['scale(0.75) rotate(-2deg)', 'rotate(-4deg)'],
          zIndex: 0
        }}
      >
        <Marquee>
          {titles.map(title => (
            <span key={title}>{title}</span>
          ))}
        </Marquee>
        <Marquee>
          {shuffle(titles).map(title => (
            <span key={title}>{title}</span>
          ))}
        </Marquee>
      </Box>
      <ColorSwitcher
        sx={{
          color: 'white',
          position: 'absolute',
          top: [3, 4],
          right: [3, 4],
          width: 'auto',
          height: 'auto',
          ':focus,:hover': { color: 'accent' }
        }}
      />
      <Container as="article" sx={{ pt: [5, 6], pb: [3, 4] }}>
        <Text
          as="p"
          variant="subtitle"
          sx={{
            color: 'white',
            opacity: 0.75,
            mt: [3, 0],
            fontSize: [2, 3],
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          Mar 26–30, 2020
        </Text>
        <Heading
          as="h1"
          sx={{
            letterSpacing: 'title',
            lineHeight: 'title',
            fontFamily: 'heading',
            color: 'inverted',
            mt: [2, 3],
            mb: 4,
            '> span': {
              display: 'block',
              fontSize: [5, null, 6, 7]
            },
            kbd: {
              display: 'inline-block',
              fontFamily: 'inherit',
              WebkitTextStroke: 'currentColor',
              WebkitTextStrokeWidth: ['2px', '4px'],
              WebkitTextFillColor: theme => theme.colors.primary,
              transition: 'all .125s ease-in-out',
              ':hover': {
                color: 'accent',
                textShadow: theme => `0 0 12px ${theme.colors.accent}`,
                transform: 'rotate(-4deg) scale(1.025)'
              }
            }
          }}
        >
          <span>
            <kbd>18,000+</kbd> innovators
          </span>
          <span>
            from <kbd>175</kbd> countries
          </span>
          <span>
            created <kbd>1,560</kbd> projects to
          </span>
          <Text
            as="span"
            sx={{
              color: 'accent',
              span: { mx: 2 },
              transition: 'text-shadow 1s ease-in-out',
              ':hover': {
                textShadow: theme => `0 0 16px ${theme.colors.accent}`
              },
              br: { display: [null, 'none'] }
            }}
          >
            #Build<span>For</span>
            <br />
            COVID19.
          </Text>
        </Heading>
      </Container>
    </Box>
    <Box as="section" sx={{ bg: 'sheet', py: [4, 5] }}>
      <Container
        sx={{
          position: 'relative',
          strong: { color: 'accent' },
          '> p': { fontSize: [2, 3], maxWidth: 'copyPlus', mt: 0 }
        }}
      >
        <About />
        <Image
          src="/icon-flat.svg"
          aria-hidden
          alt="Logo"
          sx={{
            display: ['none', null, 'block'],
            position: 'absolute',
            bottom: 0,
            right: 3,
            transition: 'transform 0.75s ease-in-out',
            transformOrigin: 'right bottom',
            ':hover': {
              transform: 'scale(2) rotate(-25deg)'
            },
            '@media (prefers-reduced-motion: reduce)': {
              transform: 'none !important'
            }
          }}
        />
      </Container>
    </Box>
    <Container
      id="projects"
      as="article"
      sx={{ py: [3, 4], mt: [3, 4], mb: [5, 6] }}
    >
      <Heading sx={{ variant: 'text.title', fontSize: [4, 5] }}>
        Highlighted projects
      </Heading>
      <Text
        sx={{ fontSize: [2, 3], mt: [3, 4], mb: [2, 3], maxWidth: 'copyPlus' }}
      >
        <ProjectsCopy />
      </Text>
      <Flex
        sx={{
          alignItems: 'center',
          flexWrap: 'wrap',
          mb: [4, 5]
        }}
      >
        <Link href="/projects" passHref>
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
            See all projects →
          </Button>
        </Link>
        <Link href="/judges" passHref>
          <Button variant="outline" as="a" sx={{ color: 'accent', mb: 2 }}>
            Meet the judges →
          </Button>
        </Link>
      </Flex>
      <Themes />
      <ProjectsGrid projects={projects} />
    </Container>
  </>
)

export const getStaticProps = async () => {
  const loadJSON = require('load-json-file')
  const list = await loadJSON('./lib/projects-content.json')
  let titles = map(list, 'creators')
    .join(', ')
    .split(', ')
  titles = uniq(titles)
  titles = concat(titles, map(list, 'name'))
  titles = shuffle(titles)
  return { props: { titles } }
}
