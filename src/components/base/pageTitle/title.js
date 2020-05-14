import React from 'react'
import styled from 'styled-components'

import Container from 'base/container'
import Flex from 'base/flex'

const Subheading = styled(Flex)`
  color: ${p => p.theme.color.primary};
  font-size: 18px;
  font-weight: ${p => p.theme.zilla.semibold};
  letter-spacing: 1.28px;
  margin-bottom: 10px;
  text-align: left;

  @media (${p => p.theme.media.small}) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`

const MainHeading = styled(Flex)`
  color: ${p => p.theme.color.primary};
  font-size: 60px;
  font-weight: ${p => p.theme.zilla.bold};
  letter-spacing: 3.28px;
  margin: 0 10px;
  text-align: left;
  text-shadow: 0 1px 5px ${p => p.theme.color.secondary};

  @media (${p => p.theme.media.small}) {
    font-size: 30px;
  }
`

const HeadingContainer = styled(Container)`
  @media (${p => p.theme.media.small}) {
    justify-content: center;
    margin-top: 5px;
    width: 100%;
  }
`

const PageTitle = () => {
    return (
      <HeadingContainer alignItems="flex-end">
        <Subheading>another</Subheading>
        <MainHeading>Blog</MainHeading>
        <Subheading>about Software Development</Subheading>
      </HeadingContainer>
    )
}

export default PageTitle