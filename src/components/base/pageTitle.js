import React from 'react'
import styled from 'styled-components'

const Subheading = styled.span`
  font-size: 18px;
  color: ${p => p.theme.color.primary};
  letter-spacing: 1.28px;
  text-align: left;
  font-weight: 600;
`

const MainHeading = styled.span`
  font-size: 60px;
  color: ${p => p.theme.color.primary};
  letter-spacing: 3.28px;
  text-align: left;
  text-shadow: 0 1px 5px #ff9900;
  font-weight: 700;
  margin: 0 10px;
`

const PageTitle = () => {
    return (
        <span>
            <Subheading>another</Subheading>
            <MainHeading>Blog</MainHeading>
            <Subheading>about Software Development</Subheading>
        </span>
    )
}

export default PageTitle