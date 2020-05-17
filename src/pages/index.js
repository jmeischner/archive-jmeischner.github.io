import React from "react"
import { graphql } from "gatsby"

import SEO from "components/seo"
import Layout from "components/layout"
import ContentContainer from 'components/layout/contentContainer'

import Container from "base/container"
import Flex from "base/flex"
import PageTitle from "base/pageTitle"
import H3 from "typography/h3"

import Projects from "components/index/project"
import ProjectListItem from "components/index/projectListItem"
import MainArea from "components/layout/mainArea"
import ArticleListItem from "components/index/articleListItem"
import Summary from "components/index/summary"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog of Jan Meischner about Software Development and Productivity" />
      <Container direction="column">
        <PageTitle />
        <Flex>
          <ContentContainer id="main" justifyContent="space-between">
            <Flex width="2" grow="0" />
            <MainArea width="7" grow="1">
              <Summary>
                This Blog contains stories I experienced and lessons I learned
                during daily work and while creating new ideas and projects.
                This material should be a reference for myself and I’m more than
                happy if it will help someone to solve her own challenges.
              </Summary>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <ArticleListItem
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
                >
                  {node.excerpt}
                </ArticleListItem>
              ))}
            </MainArea>
            <Projects>
              <H3>My Projects</H3>
              <ProjectListItem
                title="alfred-bear"
                link="https://github.com/jmeischner/alfred-bear"
              >
                <strong>alfred-bear</strong> is a workflow to use in combination
                with <a href="https://www.alfredapp.com">alfred</a> for mac.
                Create scripted templates in <a href="https://bear.app">bear</a>{" "}
                straight from alfred.
              </ProjectListItem>
              <ProjectListItem
                title="todoco"
                link="https://github.com/jmeischner/todoco"
              >
                <strong>todoco</strong> is a <em>command line tool</em> to
                extract and work with <strong>ToDo</strong> comments in source
                code. Implemented with
                <ul>
                  <li>
                    <a href="https://github.com/jmeischner/todoco">Rust</a>
                  </li>
                  <li>
                    <a href="https://github.com/jmeischner/swift-todoco">
                      Swift
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jmeischner/todoco-node">
                      NodeJS
                    </a>
                  </li>
                </ul>
              </ProjectListItem>
              <ProjectListItem
                title="QuickRunner"
                link="https://github.com/jmeischner/QuickRunner"
              >
                Test Runner for Swift Packages in combination with Quick Testing
                Framework
              </ProjectListItem>
            </Projects>
          </ContentContainer>
        </Flex>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          id
          timeToRead
          excerpt(truncate: true, pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
