import styled from 'styled-components'

const Flex = styled.div`
    flex: ${p => p.shrink ? p.shrink : 0} ${p => p.grow ? p.grow : 1} ${ p => p.basis ? p.basis : p.width ? p.width * 80 + 'px' : 'auto' };
    align-self: ${p => p.align ? p.align : 'auto'};

    @media (${p => p.theme.media.small}) {
        flex-basis: auto;
    }
`

export default Flex
