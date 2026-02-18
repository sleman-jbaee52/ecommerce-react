import React, { useContext } from "react";
import {
  Star,
  StarHalf,
  ShoppingCart,
  Heart,
  LucideShare,
  Check,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import toast from "react-hot-toast";
function Product({ item }) {
  const {
    cartItems,
    addToCart,
    favorites,
    addToFavorites,
    remvoveFromFavorites,
  } = useContext(CartContext);
  const isInCart = cartItems.some((i) => i.id === item.id);
  const navigate = useNavigate();

  // ========== Cart ==========
  const handleAddToCart = () => {
    addToCart(item);

    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          added to cart
        </div>
        <button className="btn" onClick={() => navigate("/cart")}>
          View Cart
        </button>
      </div>,
      { duration: 3500 },
    );
  };

  // ========= favorites =======
  const isInFav = favorites.some((i) => i.id === item.id);
  const handleAddToFav = () => {
    if (isInFav) {
      remvoveFromFavorites(item.id);
      toast.error(`${item.title} Removed From Favorites`);
    } else {
      addToFavorites(item);
      toast.success(`${item.title} added to favorites`);
    }
  };

  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="status_cart">
          <Check />
          in cart
        </span>

        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>

        <p className="name_product">{item.title}</p>

        <div className="stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>

        <p className="price">
          <span>{item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="btn_addToCart" onClick={handleAddToCart}>
          <ShoppingCart />
        </span>
        <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleAddToFav}>
          <Heart />
        </span>
        <span>
          <LucideShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
