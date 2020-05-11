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
`

const AboutMe = styled(Flex)`
  border-left: 2px solid ${p => p.theme.color.secondary};
  border-radius: 10px;
  border-top: 2px solid ${p => p.theme.color.secondary};
  margin-bottom: 10px;
  padding: 10px 25px;
  width: 100%;

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
  font-weight: ${p => p.theme.zilla.light};
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
        <Flex width="2" grow="1"></Flex>
        <AboutMe grow="1">
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
                    My name is Jan Meischner and I'm a software developer
                    located in Berlin (germany). I'm interested in all the things
                    around development: design, frontend, backend, architecture
                    and devops topics. I try to make use of every chance I get
                    to learn new things. One of my passions is improving
                    productivity by using the right working techniques and
                    tools. I'm a big fan of Scrum and GTD.
                    <p>
                      I work at{" "}
                      <a href="https://verimi.de/de">Verimi</a> as a frontend
                      and backend developer and as devops deputy.
                    </p>
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