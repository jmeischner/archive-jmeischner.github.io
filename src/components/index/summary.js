import styled from 'styled-components'

export default styled.p`
  font-size: ${p => p.theme.fontSize.m};
  font-weight: ${p => p.theme.zilla.semibold};
  color: ${p => p.theme.color.primary};
  letter-spacing: 0.77px;
  margin-bottom: 40px;

  @media (${p => p.theme.media.small}) {
      margin-bottom: 35px;
  }
`