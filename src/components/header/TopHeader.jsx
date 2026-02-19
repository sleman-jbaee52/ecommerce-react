import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/mylogo.png";
import { Heart, ShoppingCart, Menu, UserPlus } from "lucide-react";
import "./header.css";
import { CartContext } from "../CartContext";
import SearchBox from "./SearchBox";

function TopHeader({ toggleSidebar }) {
  const { cartItems, favorites } = useContext(CartContext);
  const cartCount = cartItems?.length || 0;

  return (
    <nav className="top-header">
      <div className="container">
        <div className="left-section">
          <Menu size={33} className="menu-btn" onClick={toggleSidebar}>
            <button onClick={toggleSidebar}></button>
          </Menu>
          <Link className="logo" to="/">
            {" "}
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="search-section">
          <SearchBox />
        </div>
        <div className="right-section">
          <Link to="/favorites" className="icon-link">
            <Heart />
            <span className="count">{favorites.length}</span>
          </Link>

          <Link to="/cart" className="icon-link">
            <ShoppingCart />
            <span className="count">{cartCount}</span>
          </Link>

          <Link className="icon-link">
            <UserPlus />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopHeader;
