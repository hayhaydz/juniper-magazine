import React from 'react'
import { Link } from 'gatsby'
import { window} from 'browser-monads';

import Nav from './Nav/Nav'
import Social from './Social/Social'

import Logo from '../../img/logo.svg'

const Header = (props) => {
    const url = window.location.pathname;

    return (
        <header className="Header">
            <Link to={`/`} className="Header__logo">
                <img src={Logo} className="Header__logo--img" alt="Juniper Magazine logo"/>
            </Link>
            <Nav/>
            {url !== '/about/' &&
                <Social/>
            }
        </header>
    )
}
export default Header