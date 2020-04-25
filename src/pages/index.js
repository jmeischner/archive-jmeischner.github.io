import React from "react"
import styled from 'styled-components'

import SEO from "components/seo"
import Layout from "components/layout"

import PageTitle from 'components/pageTitle'

const Wrapper = styled.div`
  height: 100%;
`

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" />
    <Layout>
      <PageTitle />
    </Layout>
  </Wrapper>
)

export default IndexPage
