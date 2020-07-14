import React from 'react'

const MenuIcon = ({ open, setOpen }) => {
    return <button className={'MenuIcon' + (open ? ' MenuIcon--active' : '')} onClick={() => setOpen(!open)}>Menu</button>
}
export default MenuIcon