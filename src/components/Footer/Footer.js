import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className="Footer">
            <p className="Footer__copyright" >Juniper © {date}</p>
        </footer>
    )
}
export default Footer