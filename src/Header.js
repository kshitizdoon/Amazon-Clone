import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
    const[{ basket, user }] = useStateValue();

    // console.log(bakset);
    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return ( 
    <nav className="header">
        {/* {logo} */}
        <Link to ="/">
            <img className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="NF"
            />
        </Link>
        {/* search box */}
        <div class="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
        </div>
        {/* 3 links */}
        {/* 1 links */}
        <div class="header__nav">
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} class="header__option">
                    <span className="header__optionLineOne">Hello {user?.email}</span>
                    <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <Link to ='/orders'>
                <div className='header__option'>
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>    
                </div>    
            </Link>
            {/* 2nd link */}
            <Link to="/" className="header__link">
                <div class="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
        {/* 3rd link */}
            <Link to="/" className="header__link">
                <div class="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
        </div>
        {/* Basket icon with number */}
        <Link to="/checkout" className="header__link">
            <div class="header__optionBasket  ">
                {/* shopping basket icon */}
                <ShoppingBasketIcon />
                {/* Number of items in the basket */}
                <span className="header__optionLineTwo  header__BasketCount">{basket?.length}</span>
            </div> 
        </Link>
    </nav>
    );
}

export default Header;
