import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfilePic = styled(Img)`
    border-radius: 10px;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
      <ProfilePic
        fixed={data.file.childImageSharp.fixed}
        alt="A Picture of Me"
      />
  )
}
