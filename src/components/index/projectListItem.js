import React from 'react'
import styled from 'styled-components'

import Container from 'base/container'
import Flex from 'base/flex'

import GithubIcon from 'assets/icons/github.svg'

const ProjectListItemWrapper = styled.div`
  border-bottom: 2px solid ${p => p.theme.color.secondary};
  margin: 15px 0;

  p {
    font-weight: 300;
    font-size: 13px;
    color: ${p => p.theme.color.primary};
    letter-spacing: 0.66px;
    text-align: left;
  }
`

const ProjectListItemTitle = styled(Flex)`
    color: ${p => p.theme.color.secondary};
    font-size: 14px;
    font-style: italic;
    font-weight: 600;
    letter-spacing: 0.77px;
    text-align: left;
`

const ProjectListItemText = styled.p`
    margin-top: 0;
    margin-left: 10px;
    margin-right: 10px;
`

const ProjectListItem = ({ title, link, children }) => {
    return (
      <ProjectListItemWrapper>
        <Container direction="column">
          <Flex>
            <Container justifyContent="space-between">
              <ProjectListItemTitle>{title}</ProjectListItemTitle>
              <Flex>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                </a>
              </Flex>
            </Container>
          </Flex>
          <Flex>
            <ProjectListItemText>{children}</ProjectListItemText>
          </Flex>
        </Container>
      </ProjectListItemWrapper>
    )
}

export default ProjectListItem