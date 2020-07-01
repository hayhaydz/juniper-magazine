import React from 'react'
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import DiamondSvg from './diamond-svg'

const Social = () => {
    return (
        <div className="Social" >
            <ul>
                <li className="Social__item"><a href="https://twitter.com/juniper_mag" className="Social__item--link" target="_blank" rel="noreferrer" aria-label="Open Juniper Magazine Twitter account"><FaTwitter className="Social__item--link--icon"/></a></li>
                <li className="Social__item"><a href="https://www.instagram.com/juniper_magazine_/" className="Social__item--link" target="_blank" rel="noreferrer" aria-label="Open Juniper Magazine Instagram account"><FaInstagram className="Social__item--link--icon"/></a></li>
                <li className="Social__item"><a href="https://www.youtube.com/channel/UCdO_70Ruw8q6xGjLn3egTSg" className="Social__item--link" target="_blank" rel="noreferrer" aria-label="Open Leticia Curteis-Lateo Youtube account"><FaYoutube className="Social__item--link--icon"/></a></li>
                <li className="Social__item"><a href="https://tishhlah.blogspot.co.uk/" className="Social__item--link" target="_blank" rel="noreferrer" aria-label="Open Leticia Curteis-Lateo's Blo"><DiamondSvg/></a></li>
            </ul>
        </div>
    )
}
export default Social