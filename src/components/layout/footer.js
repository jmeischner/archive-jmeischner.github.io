import React from 'react'
import styled from 'styled-components'

import Container from 'base/container'
import Flex from "base/flex"

import H3 from 'typography/h3'

const AboutMe = styled(Flex)`
  width: 100%;
  border-top: 2px solid ${p => p.theme.color.secondary};
  border-left: 2px solid ${p => p.theme.color.secondary};
  padding: 10px 25px;
  border-radius: 10px;
`

const IconBar = styled(Flex)`
  a {
    margin-left: 10px;
  }

  img {
    width: 27px;
    height: 24px;
  }
`

const MePic = styled.div`
  background-image: url('/me.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  height: 125px;
  margin: 10px;
  width: 100px;
`

const AboutMeText = styled.p`
  font-weight: 300;
  font-size: 14px;
`

const Footer = () => {
    return (
      <Container>
        <Flex width="2" grow="0"></Flex>
        <AboutMe grow="10">
          <Container direction="column">
            <Flex>
              <Container alignItems="flex-start" justifyContent="space-between">
                <Flex>
                  <H3>About Me</H3>
                </Flex>
                <IconBar>
                  <a href="https://github.com/jmeischner">
                    <img src="/icons/github@3x.png" alt="github icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/jmeischner">
                    <img src="/icons/linkedin@3x.png" alt="linkedin icon" />
                  </a>
                  <a href="https://www.xing.com/profile/Jan_Meischner">
                    <img src="/icons/xing@3x.png" alt="xing icon" />
                  </a>
                </IconBar>
              </Container>
            </Flex>
            <Flex>
              <Container>
                <Flex>
                  <MePic />
                </Flex>
                <Flex>
                  <AboutMeText>
                    Sodales eu vel turpis cursus diam nec ornare in et consequat
                    augue, ante venenatis tempus erat semper interdum maximus
                    himenaeos rhoncus quis, accumsan per tristique cubilia quam
                    ullamcorper montes senectus urna fames. Cursus eget sagittis
                    suscipit donec risus habitant erat efficitur sit mi, iaculis
                    nascetur vulputate fermentum rutrum turpis sodales facilisi
                    varius, hendrerit tellus fringilla maecenas natoque nullam
                    cubilia pharetra lobortis.
                  </AboutMeText>
                </Flex>
              </Container>
            </Flex>
          </Container>
        </AboutMe>
      </Container>
    )
}

export default Footer