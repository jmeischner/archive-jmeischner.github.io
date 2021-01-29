import Container from 'components/base/container'
import React from 'react'
import styled from 'styled-components'

const CommentFrom = styled(Container)`
    width: 100%;
    margin-top: 40px;
`

const Input = styled.input`
    flex-grow: 1;
    border: 0;
    border-bottom: 1px solid ${p => p.theme.color.secondary};
    background-color: inherit;
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
    border: 1px solid ${p => p.theme.color.secondary};
    border-radius: 10px;
    font-size: ${p => p.theme.fontSize.sm};
    min-height: 100px;
    padding: 10px 20px;
    width: auto;
    background-color: inherit;

    &:focus {
        outline: none;
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
`

export default ({slug}) => {
    return (
        <form method="POST" action="https://staticman-for-jmeischner.herokuapp.com/v2/entry/jmeischner/jmeischner.github.io/develop/comments">
            <CommentFrom direction="column">
                <input name="options[redirect]" type="hidden" value={"https://www.jmeischner.com" + slug} />
                <input name="fields[slug]" type="hidden" value={ slug } />
                <Input placeholder="Name" name="fields[name]" type="text" /><br />
                <Input placeholder="E-Mail" name="fields[email]" type="email" /><br />
                <Textarea placeholder="Comment" name="fields[message]"></Textarea><br />
                
                <PrimaryButton type="submit">Add Comment</PrimaryButton>
            </CommentFrom>
        </form>
    )
}
