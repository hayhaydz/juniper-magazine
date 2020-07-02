import React from 'react'
import { Link } from 'gatsby'

const ShopBanner = () => {
    return (
        <div className="ShopBanner">
            <Link to={`/shop`} className="ShopBanner__link">
                <div className="ShopBanner__link--banner">
                    <h1 className="ShopBanner__link--heading">Issue No.1 // Juniper's First</h1>
                </div>
            </Link>
        </div>
    )
}
export default ShopBanner