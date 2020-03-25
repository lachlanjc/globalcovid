import { Link, Image } from 'theme-ui'

export default () => (
  <Link
    href="https://hackclub.com/"
    title="Hack Club"
    sx={{
      position: 'absolute',
      top: 3,
      left: 0,
      img: { width: [72, 128] }
    }}
  >
    <Image src="/hackclub-flag.svg" alt="Dinosaur holding Hack Club flag" />
  </Link>
)
