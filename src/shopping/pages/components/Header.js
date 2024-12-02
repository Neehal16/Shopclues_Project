
import React from 'react'

const Header = () => {
    return(
        <div className="header">
    <div className="left">
    <div className="title">
        <h2>
            <i className="fas fa-shopping-cart"></i> ShopClues
        </h2>
        
    </div>
    </div>

    <div className="center">
    <ul>
        <li>Mens</li>
        <li>Womens</li>
        <li>Childrens</li>
        <li>Beauty</li>
    </ul>
    </div>
   <div className="search">
    <input type="text" placeholder="Search" />
    <button type="button">Search</button>
   </div>
    <div className="right">
   <div className="signin">
    Signin / Signup
   </div>

   <div className="cart">
   Cart ( )
   </div>
    </div>

        </div>
    )
}
export default Header;