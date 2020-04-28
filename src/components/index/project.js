import styled from 'styled-components'

import Flex from 'base/flex'

const Project = styled(Flex)`
  border-left: 2px solid ${p => p.theme.color.secondary};
  border-radius: 10px;
  border-top: 2px solid ${p => p.theme.color.secondary};
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
  max-width: 220px;

  @media (${p => p.theme.media.small}) {
    width: 100%;
    max-width: 100%;
    border: 0;
  }
`

export default Project;