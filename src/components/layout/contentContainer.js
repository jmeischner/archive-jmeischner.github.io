import styled from 'styled-components'

import Container from 'base/container'


const ContentContainer = styled(Container)`
  @media (${p => p.theme.media.small}) {
    flex-wrap: wrap;
  }
`

export default ContentContainer