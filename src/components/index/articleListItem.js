import React from 'react'
import styled from 'styled-components'

import Container from 'base/container'
import Flex from 'base/flex'

const ItemTitle = styled(Flex)`
  color: ${p => p.theme.color.secondary};
  font-size: ${p => p.theme.fontSize.h2 };
  font-style: italic;
  font-weight: ${p => p.theme.zilla.semibold};
  letter-spacing: 0.77px;
  text-align: left;
  margin-bottom: 10px;

  @media (${p => p.theme.media.small}) {
    font-size: 14px;
  }
`

const ItemDate = styled(Flex)`
  font-weight: ${p => p.theme.zilla.light};
  font-style: italic;
  font-size: ${p => p.theme.fontSize.xsm};
  letter-spacing: 0.66px;
  text-align: right;
`

const ItemExcerpt = styled(Flex)`
  text-align: left;
  margin-bottom: 10px;
  margin-left: 10px;
  font-weight: ${p => p.theme.zilla.light};
  font-size: ${p => p.theme.fontSize.sm};
  letter-spacing: 0.67px;

  @media (${p => p.theme.media.small}) {
    font-weight: ${p => p.theme.zilla.light};
    font-size: ${p => p.theme.fontSize.sm};
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