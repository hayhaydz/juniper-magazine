import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
    const links = [
        { name: 'Home', to: '/' },
        { name: 'Fashion', to: '/fashion' },
        { name: 'Interviews', to: '/interviews' },
        { name: 'Lifestyle', to: '/lifestyle' },
        { name: 'BTS', to: '/bts' },
        { name: 'About', to: '/about' }
    ]

    return (
        <nav className="Nav">
            <ul>
                {links.map((link) => (
                    <li className="Nav__item">
                        <Link
                            key={link.to}
                            to={link.to}
                            className="Nav__item--link"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Nav