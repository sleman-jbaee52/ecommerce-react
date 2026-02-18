import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Product from "../components/slideProducts/Product";
import SlideProductsLoading from "../page/productDetails/SlideProductsLoading";
function SearchResultes() {
  const [resultes, setResultes] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchResultes = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setResultes(data.products || []);
      } catch (error) {
        console.error("search Error", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResultes();
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="category_products">
        {loading ? (
          <SlideProductsLoading key={query} />
        ) : resultes.length > 0 ? (
          <div className="container">
            <div className="top_slide">
              <h2>Resultes For : {query}</h2>
            </div>
            <div className="products">
              {resultes.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <p>No Resultes Found</p>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default SearchResultes;


