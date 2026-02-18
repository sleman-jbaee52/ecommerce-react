import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductsLoading from "./SlideProductsLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";
import SlideProduct from "../../components/slideProducts/slideProduct";



function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(true);

  const [relateProducts, setRelateProducts] = useState([]);
  const [loadingRelateProducts, setloadingRelateProducts] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelateProducts(data.products);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setloadingRelateProducts(false));
  }, [product]);


  if (!product) return <p>Product Not Found</p>;

  return (
    <PageTransition key={id}>
      <div>
        {Loading ? (
          <ProductDetailsLoading />
        ) : (
          <div className="item_details">
            <div className="container">
              <ProductImages product={product} />

              <ProductInfo product={product} />
            </div>
          </div>
        )}

        {loadingRelateProducts ? (
          <SlideProductsLoading />
        ) : (
          <SlideProduct
            key={product.category}
            data={relateProducts}
            title={product.category.replace("-", " ")}
          />
        )}
      </div>
    </PageTransition>
  );
}

export default ProductDetails;
