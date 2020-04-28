import React from "react"
import styled from 'styled-components'

import SEO from "components/seo"
import Layout from "components/layout"

import Container from 'base/container'
import Flex from "base/flex"
import PageTitle from 'base/pageTitle'
import H3 from 'typography/h3'

import Projects from 'components/index/project'
import ProjectListItem from 'components/index/projectListItem'
import MainArea from 'components/index/mainArea'

const Wrapper = styled.div`
  height: 100%;
`

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" />
    <Layout>
      <Container direction="column">
        <Flex>
          <Container direction="row">
            <Flex grow="1" width="1"></Flex>
            <Flex grow="11">
              <PageTitle />
            </Flex>
          </Container>
        </Flex>
        <Flex>
          <Container id="main" justifyContent="space-between" wrap="wrap">
            <Flex width="2" />
            <MainArea width="6" grow="6">
              <p class="summary">
                This Blog contains stories I experienced and lessons I learned
                during daily work and while creating new ideas and projects.
                This material should be a reference for myself and I’m more than
                happy if it will help someone to solve her own challenges.
              </p>
            </MainArea>
            <Projects width="3" grow="3">
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
          </Container>
        </Flex>
      </Container>
    </Layout>
  </Wrapper>
)

export default IndexPage
