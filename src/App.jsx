import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/categoryPage/CategoryPage";
import SearchResultes from "./page/SearchResultes";
import Favorites from "./page/favorites/Favorites";
import HeaderLayout from "./components/header/HeaderLayout";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <header>
        <HeaderLayout />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#c9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResultes />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}
export default App;
