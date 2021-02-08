import Container from 'components/base/container';
import { darken } from 'polished';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { BooleanParam, useQueryParam } from "use-query-params";

const CommentForm = styled(Container)`
    width: 100%;
    margin-top: 40px;
`

const Input = styled.input`
    flex-grow: 1;
    border: 0;
    border-bottom: 1px solid ${p => p.theme.color.secondary};
    background-color: inherit;
    font-family: ${p => p.theme.fontFamily};
    font-weight: ${p => p.theme.zilla.regular};
    font-size: ${p => p.theme.fontSize.sm};
    padding-left: 20px;

    &:focus {
        outline: none;
        border-bottom: 1px solid ${p => p.theme.color.primary};
    }

    &::placeholder {
        font-family: ${p => p.theme.fontFamily};
        font-style: italic;
        font-weight: ${p => p.theme.zilla.light};
    }
`
const Textarea = styled.textarea`
    background-color: inherit;
    border-radius: 10px;
    border: 1px solid ${p => p.theme.color.secondary};
    font-family: ${p => p.theme.fontFamily};
    font-size: ${p => p.theme.fontSize.sm};
    font-weight: ${p => p.theme.zilla.regular};
    min-height: 150px;
    padding: 10px 20px;
    resize: none;
    width: auto;

    &:focus {
        outline: none;
        /* border: none; */
        border: 1px solid ${p => p.theme.color.primary};
    }

    &::placeholder {
        font-family: ${p => p.theme.fontFamily};
        font-style: italic;
        font-weight: ${p => p.theme.zilla.light};
    }
`

const PrimaryButton = styled.button`
    margin-left: auto;
    width: 110px;
    border: none;
    padding: 3px 8px;
    border-radius: 5px;
    background-color: ${p => p.theme.color.secondary};
    color: white;

    font-size: ${p => p.theme.fontSize.sm};
    font-family: ${p => p.theme.fontFamily};
    font-weight: ${p => p.theme.zilla.semibold};

    &:hover {
        background-color: ${p => darken(0.1, p.theme.color.secondary)};
    }

    &:active {
        background-color: ${p => darken(0.15, p.theme.color.secondary)};
    }
`

const SuccessContainer = styled(ToastContainer).attrs({
    toastClassName: 'toast',
  })`  
    .toast {
      background-color: ${p => p.theme.color.secondary};
    }
  `;

export default ({slug}) => {
    const [addCommentSuccessfully, ] = useQueryParam('commentAdded', BooleanParam)

    if (addCommentSuccessfully) {
        toast.success("♥️ Thanks for the comment! I will publish it soon.")
    }

    return (
        <div>
            <form method="POST" action="https://commentarea-jmeischner.herokuapp.com/v2/entry/jmeischner/jmeischner.github.io/develop/comments">
                <CommentForm direction="column">
                    <input name="options[redirect]" type="hidden" value={"https://www.jmeischner.com/" + slug + "?commentAdded=1"} />
                    <input name="fields[slug]" type="hidden" value={ slug } />
                    <Input placeholder="Name" name="fields[name]" type="text" /><br />
                    <Textarea placeholder="Comment" name="fields[message]"></Textarea><br />
                    
                    <PrimaryButton type="submit">Add Comment</PrimaryButton>
                </CommentForm>
            </form>
            <SuccessContainer />
        </div>
    )
}
