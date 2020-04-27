import React from 'react'
import styled from 'styled-components'

import Container from 'base/container'
import Flex from "base/flex"

import H3 from 'typography/h3'

import ProfilePicture from './profilepicture'
import Github from 'assets/icons/github.svg'
import LinkedIn from "assets/icons/linkedin.svg"
import Xing from "assets/icons/xing.svg"

const FooterContainer = styled(Flex)`
  margin-top: auto;
  margin-bottom: 10px;
`

const AboutMe = styled(Flex)`
  width: 100%;
  border-top: 2px solid ${p => p.theme.color.secondary};
  border-left: 2px solid ${p => p.theme.color.secondary};
  padding: 10px 25px;
  border-radius: 10px;

  @media (${p => p.theme.media.small}) {
    border-left: 0;
    border-bottom: 2px solid ${p => p.theme.color.secondary};
    border-radius: 0;
  }
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

const AboutMeText = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin: 0 1em;
`

const BottomAboutMeContainer = styled(Container)`
  margin-top: 20px;
  margin-left: 5px;
`

const Footer = () => {
  return (
    <FooterContainer>
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
                  <a
                    href="https://github.com/jmeischner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jmeischner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href="https://www.xing.com/profile/Jan_Meischner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Xing />
                  </a>
                </IconBar>
              </Container>
            </Flex>
            <Flex>
              <BottomAboutMeContainer>
                <Flex>
                  <ProfilePicture />
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
              </BottomAboutMeContainer>
            </Flex>
          </Container>
        </AboutMe>
      </Container>
    </FooterContainer>
  )
}

export default Footer