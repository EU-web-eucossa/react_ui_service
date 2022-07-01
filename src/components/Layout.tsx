import { Container } from '@mui/system'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
type PropTypes = {
    children: React.ReactElement
}
const Layout = ({ children }: PropTypes) => {
    return (
        <div>
            <Navbar />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout