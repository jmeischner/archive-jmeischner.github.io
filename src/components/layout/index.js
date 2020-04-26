import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Container from 'base/container'

import Navigation from './navigation'
import Main from './main'
import Footer from './footer'

import './layout.css'
import theme from './theme';

const LayoutContainer = styled(Container)`
    max-width: 960px;
    height: 100%;
    font-family: ${ props => props.theme.fontFamily };
    color: ${ props => props.theme.color.primary };
    margin: auto;
`

const Layout = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
          <LayoutContainer direction="column">
            <Helmet>
              <link
                href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap"
                rel="stylesheet"
              ></link>
            </Helmet>
            <Navigation />
            <Main>{children}</Main>
            <Footer />
          </LayoutContainer>
      </ThemeProvider>
    )
}

export default Layout