import { Flex, Box, Text } from 'theme-ui'
import theme from '../lib/theme'
import styled from '@emotion/styled'

const Timeline = styled(Flex)`
  flex-direction: column;
  line-height: 1.125;
  position: relative;
  &:before {
    content: '';
    height: 100%;
    width: 3px;
    margin-left: 6px;
    position: absolute;
    z-index: 0;
  }
`
const TimelineStep = styled(Flex)`
  align-items: center;
  padding-top: ${props => (props.first ? 0 : [2, 3])};
  line-height: 1.125;
  position: relative;
  z-index: 1;
`

Timeline.Step = ({ name, duration, first = false, color = 'primary' }) => (
  <TimelineStep first={first} sx={{ mb: 3 }}>
    <Box sx={{ p: 2, borderRadius: 'circle', bg: color, mr: [3, 4] }} />
    <Box>
      <Text sx={{ color: 'muted', fontSize: 1, mb: 1 }} children={duration} />
      <Text sx={{ color: 'text', fontSize: [2, 3] }} children={name} />
    </Box>
  </TimelineStep>
)

export default () => (
  <Timeline
    sx={{
      ':before': {
        backgroundImage: theme => `linear-gradient(
          to bottom,
          ${theme.colors.sheet} 0%,
          ${theme.colors.smoke} 15%,
          ${theme.colors.smoke} 85%,
          ${theme.colors.sheet} 100%
        )`
      }
    }}
  >
    <Timeline.Step
      name="Registration opens on Devpost"
      duration="3/24"
      first
      color="orange"
    />
    <Timeline.Step
      name="Project submissions open on Devpost"
      duration="3/26 @ 9:00 AM PST"
    />
    <Timeline.Step
      name="Deadline to submit projects, including a 2-minute video walk-through"
      duration="3/30 @ 9:00 AM PST"
    />
    <Timeline.Step
      name="Judges will endeavor to provide feedback and connect with selected projects shortly after that"
      duration="Week of 3/30 (as long as these activities remain unaffected)"
      color="cyan"
    />
    <Timeline.Step
      name="Highlighted projects will be announced"
      duration="4/3"
      color="green"
    />
  </Timeline>
)
