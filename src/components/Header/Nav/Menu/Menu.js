import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ links, open }) => {
    return (
        <nav className={'Nav' + (open ? ' Nav--open' : '')} >
            <ul>
                {links.map((link) => (
                    <li className="Nav__item" key={link.to}>
                        <Link
                            to={link.to}
                            className="Nav__item--link"
                            activeClassName="Nav__item--link--active"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Menu