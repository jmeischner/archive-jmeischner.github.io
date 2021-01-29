import Container from 'base/container';
import Flex from 'components/base/flex';
import React from "react";
import styled from 'styled-components';
import Comment from './comment';
import NewComment from "./newComment";

const CommentsArea = styled(Container)`
  border-top: 2px solid ${p => p.theme.color.secondary};
  margin: 20px 0;
  padding-top: 10px;
`

const Title = styled(Flex)`
    font-size: ${p => p.theme.fontSize.h2};
    font-weight: ${p => p.theme.zilla.semibold};
    font-style: italic;
`

const Comments = styled(Container)`
  max-width: 350px;
`

export default ({ slug, comments }) => {
  
  const list = comments.edges.map(c => (
    <Comment comment={c.node} />
  ))
  
  return (
    <CommentsArea alignItems="center" direction="column">
      <Title align="flex-start">Comments Area</Title>
      <Comments direction="column" justifyContent="center">
        {list}
        <NewComment slug={slug} />
      </Comments>
    </CommentsArea>
  )
}
