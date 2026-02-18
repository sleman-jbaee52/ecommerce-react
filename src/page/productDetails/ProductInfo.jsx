import { Heart, LucideShare, ShoppingCart, Star, StarHalf } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  const {
    cartItems,
    addToCart,
    favorites,
    addToFavorites,
    remvoveFromFavorites,
  } = useContext(CartContext);
  const isInCart = cartItems.some((i) => i.id === product.id);
  const navigate = useNavigate();
  const handleAddToCart = () => {
    addToCart(product);

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
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
  const isInFav = favorites.some((i) => i.id === product.id);
  const handleAddToFav = () => {
    if (isInFav) {
      remvoveFromFavorites(product.id);
      toast.error(`${product.title} Removed From Favorites`);
    } else {
      addToFavorites(product);
      toast.success(`${product.title} added to favorites`);
    }
  };

  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <Star />
        <Star />
        <Star />
        <Star />
        <StarHalf />
      </div>
      <p className="price">{product.price}</p>

      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5 className="stock">
        Herry Up! Only <span>{product.stock}Products Left in stock.</span>
      </h5>

      <button
        onClick={handleAddToCart}
        className={`btn ${isInCart ? `in-cart` : ""}`}
      >
        {isInCart ? "item in cart" : "Add to cart "}
        <ShoppingCart />
      </button>

      <div className="icons">
        <span>
          <LucideShare />
        </span>
        <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleAddToFav}>
          <Heart />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;
