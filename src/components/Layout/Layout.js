import React from 'react'

import '../../styles/main.scss'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout