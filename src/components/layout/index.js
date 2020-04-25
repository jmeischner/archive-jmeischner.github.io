import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Navigation from './navigation'
import Footer from './footer'

import './layout.css'

const LayoutContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap" rel="stylesheet"></link>
            </Helmet>
            <Navigation />
            <div>
                {children}
            </div>
            <Footer />
        </LayoutContainer>
    )
}

export default Layout