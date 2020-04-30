import React from 'react'
import styled from 'styled-components'

import Container from 'base/container'
import Flex from 'base/flex'

const ItemTitle = styled(Flex)`
  color: ${p => p.theme.color.secondary};
  font-size: 18px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.77px;
  text-align: left;
  margin-bottom: 10px;

  @media (${p => p.theme.media.small}) {
    font-size: 14px;
  }
`

const ItemDate = styled(Flex)`
  font-weight: 300;
  font-style: italic;
  font-size: 12px;
  letter-spacing: 0.66px;
  text-align: right;
`

const ItemExcerpt = styled(Flex)`
  text-align: left;
  margin-bottom: 10px;
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.77px;

  @media (${p => p.theme.media.small}) {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0.66px;
    margin-left: 0;
  }
`

const ItemContainer = styled(Container)`
    border-bottom: 2px solid ${p => p.theme.color.secondary};
    margin-bottom: 20px;
`

export default ({ title, date, slug, children }) => {
    return (
      <ItemContainer direction="column">
        <a href={slug} style={{textDecoration: "inherit", color: "inherit"}}>
          <Flex>
            <Container justifyContent="space-between">
              <ItemTitle>{title}</ItemTitle>
              <ItemDate>{date}</ItemDate>
            </Container>
          </Flex>
          <ItemExcerpt>{children}</ItemExcerpt>
        </a>
      </ItemContainer>
    )
}