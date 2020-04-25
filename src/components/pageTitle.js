import React from 'react'
import styled from 'styled-components'

const Subheading = styled.span`
  font-family: 'Zilla Slab', serif;
  font-size: 18px;
  color: #343838;
  letter-spacing: 1.28px;
  text-align: left;
  font-weight: 600;
`

const MainHeading = styled.span`
  font-family: "Zilla Slab", serif;
  font-size: 60px;
  color: #343838;
  letter-spacing: 3.28px;
  text-align: left;
  text-shadow: 0 1px 5px #ff9900;
  font-weight: 700;
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