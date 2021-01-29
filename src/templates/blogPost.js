import Container from 'base/container'
import Flex from 'base/flex'
import PageTitle from "base/pageTitle"
import CommentsArea from 'components/base/commentsArea/commentsArea'
import Layout from "components/layout"
import ContentContainer from "components/layout/contentContainer"
import MainArea from 'components/layout/mainArea'
import SEO from 'components/seo'
import { graphql } from 'gatsby'
import "gatsby-remark-vscode/styles.css"
import React from "react"
import styled from "styled-components"


const PostTitle = styled(Flex)`
  margin-top: 30px;
  font-size: ${p => p.theme.fontSize.h1 };
  color: ${p => p.theme.color.secondary };
  font-weight: ${p => p.theme.zilla.semibold};
  font-style: italic;
  `

const PostBody = styled(Flex)`
  p:first-of-type {
    font-size: ${p => p.theme.fontSize.m};
    font-weight: ${p => p.theme.zilla.semibold};
    padding-bottom: 30px;
  }

  p {
    font-weight: ${p => p.theme.zilla.regular};
    font-size: ${p => p.theme.fontSize.m};
    font-family: ZillaSlab-Regular;
    letter-spacing: 0.58px;
    word-spacing: 1px;
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

  .inlineCode {
    font-size: ${p => p.theme.fontSize.s};
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  const comments = data.allCommentsYaml
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
                <CommentsArea slug={post.fields.slug} comments={comments} />
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
        title,
      }
      fields {
        slug
      }
    }
    allCommentsYaml (
      sort: {fields: date, order: ASC},
      filter: { slug: { eq: $slug } }
    ) {
      edges {
        node {
          _id
          name
          email
          message
          date
        } 
      }
    }
  }
`
