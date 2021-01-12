import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import logo from './logo.jpg';

function Header() {


    return (
        <div className="header">
         <h1 className="title">ShopbeeOnline</h1>

        <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">

<div  className="header__option">
        <span className="header__optionLineOne">Hello </span>
    <span className="header__optionLineTwo"></span>
        </div>



        <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
        </div>



        <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
        <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">0</span>
    </div>
    </div>
    </div>
);
}

export default Header;