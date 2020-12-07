import { Link, Image } from 'theme-ui'

const Flag = ({ sx }) => (
  <Link
    href="https://hackclub.com/"
    target="_blank"
    title="Hack Club"
    sx={{
      position: 'absolute',
      top: 3,
      left: 0,
      img: { width: [96, 128] },
      ...sx
    }}
  >
    <Image src="/hackclub-flag.svg" alt="Dinosaur holding Hack Club flag" />
  </Link>
)

export default Flag
