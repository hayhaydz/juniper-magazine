import React from 'react'

import '../../styles/main.scss'

import Header from '../Header/Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
export default Layout