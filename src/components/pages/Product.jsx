import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { API_URL } from "./../../constants/env";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
const Product = () => {
  const params = useParams();
  const { state, dispatch } = useContext(CartContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/public/products/${params.id}`)
      .then((resp) => setProduct(resp.data.data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="flex justify-start pt-8">
      <div className="w-1/2 text-gray-800">
        <h1 className="text-2xl font-bold">{product?.product_name}</h1>
        <p>$ {product?.price}</p>
        <p>{product?.description}</p>

        <div className="flex gap-x-4 mt-8">
          {!state.cart.find((c) => c.id === product.id) ? (
            <button
              className="btn-ghost"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
            >
              Agregar al carrito
            </button>
          ) : (
            state.cart.find((c) => c.id === product.id) && (
              <button
                className="btn-ghost"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
              >
                Quitar del carrito
              </button>
            )
          )}
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="h-full w-72"
          src={product?.images}
          alt={product?.product_name}
        />
      </div>
    </div>
  );
};

export default Product;
