import styled from 'styled-components'

export default styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${p => p.theme.color.primary};
  letter-spacing: 0.77px;
  margin-bottom: 50px;

  @media (${p => p.theme.media.small}) {
      margin-bottom: 15px;
  }
`