import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from 'components/seo'
import ContentContainer from "components/layout/contentContainer"
import PageTitle from "base/pageTitle"
import MainArea from 'components/layout/mainArea'

import Flex from 'base/flex'
import Container from 'base/container'

import "gatsby-remark-vscode/styles.css"

const PostTitle = styled(Flex)`
  margin-top: 30px;
  font-size: ${p => p.theme.fontSize.h1 };
  color: ${p => p.theme.color.secondary };
  font-weight: ${p => p.theme.zilla.semibold};
  font-style: italic;
  `

const PostBody = styled(Flex)`

  p:first-of-type {
    font-size: ${p => p.theme.fontSize.p};
    font-weight: ${p => p.theme.zilla.semibold};
    padding-bottom: 30px;
  }

  p {
    font-weight: ${p => p.theme.zilla.regular};
    font-size: ${p => p.theme.fontSize.p};
  }

  h2 {
    font-size: ${p => p.theme.fontSize.h2};
    font-weight: ${p => p.theme.zilla.semibold};
    font-style: italic;
  }

  .grvsc-line {
    line-height: 1.3rem;
    width: 0;
  }

  
  .grvsc-code {
    min-width: 0;
  }
  
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container direction="column">
        <PageTitle />
        <Flex>
          <ContentContainer id="main" justifyContent="space-between">
            <Flex width="2" grow="0" />
            <MainArea grow="1" shrink="1">
              <Container direction="column">
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
              </Container>
            </MainArea>
          </ContentContainer>
        </Flex>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
