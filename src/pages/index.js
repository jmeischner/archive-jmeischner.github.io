import React from "react"
import styled from 'styled-components'

import SEO from "components/seo"
import Layout from "components/layout"

import Container from 'base/container'
import Flex from "base/flex"
import PageTitle from 'base/pageTitle'

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
          <Container>
            <Flex grow="2"/>
            <Flex grow="7"></Flex>
            <Flex grow="3"></Flex>
          </Container>
        </Flex>
      </Container>
    </Layout>
  </Wrapper>
)

export default IndexPage
