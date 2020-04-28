import styled from 'styled-components'

import Flex from 'base/flex'

const Project = styled(Flex)`
  border-left: 2px solid ${p => p.theme.color.secondary};
  border-radius: 10px;
  border-top: 2px solid ${p => p.theme.color.secondary};
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
  width: 220px;
`

export default Project;