import Container from 'components/base/container'
import Flex from 'components/base/flex'
import React from 'react'
import styled from 'styled-components'

const Comment = styled(Container)`
    border-bottom: 2px solid ${p => p.theme.color.secondary};
    width: 100%;
`

const Message = styled(Flex)`
    text-align: left;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: ${p => p.theme.zilla.light};
    font-size: ${p => p.theme.fontSize.sm};
    letter-spacing: 0.67px;

    @media (${p => p.theme.media.small}) {
        font-weight: ${p => p.theme.zilla.light};
        font-size: ${p => p.theme.fontSize.s};
        letter-spacing: 0.66px;
        margin-left: 0;
    }
`

const CommentFooter = styled(Container)`
    margin-bottom: 10px;
`

const Author = styled(Flex)`
    color: ${p => p.theme.color.secondary};
    font-weight: ${p => p.theme.zilla.regular};
`

const DateElement = styled(Flex)`
  font-weight: ${p => p.theme.zilla.light};
  font-style: italic;
  font-size: ${p => p.theme.fontSize.xsm};
  letter-spacing: 0.66px;
  text-align: right;

  @media (${p => p.theme.media.small}) {
    font-size: ${p => p.theme.fontSize.sm};
  }
`

export default ({comment}) => {
    
    const date = new Date(comment.date * 1000).toLocaleDateString();
    return (
        <Comment align="center" direction="column">
            <Message>{comment.message}</Message>
            <CommentFooter justifyContent="space-between" direction="row">
                <Author>{comment.name}</Author>
                <DateElement>{date}</DateElement>
            </CommentFooter>
        </Comment>
    )
}
