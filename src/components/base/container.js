import styled from 'styled-components'

const FlexContainer = styled.div`
  align-content: ${p => (p.alignContent ? p.alignContent : "stretch")};
  align-items: ${p => (p.alignItems ? p.alignItems : "stretch")};
  display: flex;
  flex-direction: ${p => (p.direction ? p.direction : "row")};
  flex-wrap: ${p => (p.wrap ? p.wrap : "nowrap")};
  justify-content: ${p => (p.justifyContent ? p.justifyContent : "flex-start")};
  width: 100%;
`
export default FlexContainer