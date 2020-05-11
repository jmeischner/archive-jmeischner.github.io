import React from "react"

import Container from "base/container"
import Flex from "base/flex"

import PageTitle from './title'

export default () => {
    return (
      <Flex>
        <Container>
          <Flex grow="1" width="1"></Flex>
          <Flex grow="11" style={{ width: "100%" }}>
            <PageTitle />
          </Flex>
        </Container>
      </Flex>
    )
}