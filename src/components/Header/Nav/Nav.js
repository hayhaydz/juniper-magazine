import React, { useState } from 'react'
import Menu from './Menu/Menu'
import MenuIcon from './MenuIcon/MenuIcon'

const Nav = () => {
    const [open, setOpen] = useState(false)
    const links = [
        { name: 'Home', to: '/' },
        { name: 'Fashion', to: '/fashion/' },
        { name: 'Interviews', to: '/interviews/' },
        { name: 'Lifestyle', to: '/lifestyle/' },
        { name: 'BTS', to: '/bts/' },
        { name: 'About', to: '/about/' }
    ]

    return (
        <div className="NavContainer">
            <Menu links={links} open={open} setOpen={setOpen}/>
            <MenuIcon open={open} setOpen={setOpen}/>
        </div>
    )
}
export default Nav