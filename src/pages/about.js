import React from 'react'
import JuniperAbout from '../img/juniperAbout.gif'

import Layout from '../components/Layout/Layout'
import Social from '../components/Header/Social/Social'

const About = () => {
    return (
        <Layout>
            <div className="About">
                <h1 className="About__title">about us</h1>
                <div className="About__container">
                    <div className="About__left">
                        <div className="About__left--headings">
                            <h1 className="About__left--headings--heading">Issue 1 //</h1>
                            <h2 className="About__left--headings--subheading">What do you want to <br/> be when you grow up?</h2>
                        </div>
                        <img src={JuniperAbout} className="About__left--img" alt="Lady in dress with words Juniper being written accross" />
                    </div>
                    <div className="About__right">
                        <p className="About__right--description">Established in 2017, juniper magazine is an independent print publication. Juniper aims to inspire and motivate creativity inside young minds. The publication is driven by creative freedom and the inspiration around them. It aims to showcase the new artists, writers and everyday talented people. Juniper is more than just a magazine it is a place to inspire and drive people to do what they love.</p>
                        <div className="About__right--founder">
                            <h1 className="About__right--founder--heading">founder & editor-in-chief //</h1>
                            <p className="About__right--founder--name">Leticia Curteis-Lateo</p>
                        </div>
                        <div className="About__right--social">
                            <h3 className="About__right--social--heading">Never miss an update // Follow us on social media</h3>
                            <Social />
                        </div>
                        <div className="About__right--contact">
                            <h1 className="About__right--contact--heading">CONTACT</h1>
                            <a href="mailto:juniper-magazine@outlook.com" className="About__right--contact--link" target="_blank" rel="noreferrer">juniper-magazine@outlook.com</a>
                            <p className="About__right--contact--text">@juniper_magazine_</p>
                            <a href="mailto:leticia.cl999@hotmail.com" className="About__right--contact--link" target="_blank" rel="noreferrer">leticia.cl999@hotmail.com</a>
                            <p className="About__right--contact--text">@tishh_lah</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default About