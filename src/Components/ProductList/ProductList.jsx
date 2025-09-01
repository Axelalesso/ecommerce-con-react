import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getProductsList = async () => {
    setLoading(true);
    const product_list_response = await getProducts();
    if (product_list_response) {
      setProducts(product_list_response);
    } else {
      setError("Error al obtener productos");
    }
    setLoading(false);
  };

  useEffect(() => {
    getProductsList();
  }, []);

  let isAdmin = true;
  const div_props = {
    className: isAdmin ? "caja-administrador" : "caja",
    id: "caja-especial",
  };

  let content;
  if (loading) {
    content = <h2>Cargando...</h2>;
  } else if (error) {
    content = <h2>{error}</h2>;
  } else {
    content = (
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            is_admin={isAdmin}
          />
        ))}
      </div>
    );
  }

  return <div {...div_props}>{content}</div>;
};

export default ProductList;
