import styled from 'styled-components'

import Flex from 'base/flex'

const MainArea = styled(Flex)`
    padding: 0 20px 20px;

  .summary {
    font-size: 14px;
    font-weight: 600;
    color: ${p => p.theme.color.primary};
    letter-spacing: 0.77px;
  }
`

export default MainArea