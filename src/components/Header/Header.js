import React from "react";
import IconBag from "../../assets/icon-bag.png"


import "./header.css"

const Header = () => {
    return (
        <header>
            <nav className="header-nav">
                <h1>Panto</h1>
                <ul className="header-ul">
                    <li><a href="">Furniture</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <img className="icon-bag" src={IconBag} alt=""/>
            </nav>
        </header>
    );
}

export default Header;