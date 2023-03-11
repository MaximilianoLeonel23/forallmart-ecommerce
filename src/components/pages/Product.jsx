import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { API_URL } from "./../../constants/env";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "./../../helpers/number";
import Star from "../atoms/Star";
const Product = () => {
  const params = useParams();
  const { state, dispatch } = useContext(CartContext);
  const [product, setProduct] = useState({});
  console.log(product);
  const details = product?.features?.details;
  const stats = product?.features?.stats;
  useEffect(() => {
    axios
      .get(`${API_URL}/public/products/${params.id}`)
      .then((resp) => setProduct(resp.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex justify-start gap-x-8 pt-8">
      <article className="w-1/2 flex flex-col justify-between bg-white border border-gray-200 rounded p-8 text-gray-800">
        <div>
          {/* Cabecera */}
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-4">
              <h1 className="text-2xl font-bold">{product?.product_name}</h1>
              {stats?.stock ? (
                <p className="text-gray-300">{stats.stock} disponibles</p>
              ) : (
                <></>
              )}
            </div>
            <div className="w-fit">
              {product.features?.stats?.discount ? (
                <div className="flex flex-col gap-y-2">
                  <p className="py-1 px-4 text-primary-500 bg-primary-300 rounded font-semibold text-3xl">
                    {formatPrice(
                      product.price -
                        product.price * (product.features.stats.discount / 100)
                    )}
                  </p>
                  <span className="font-bold text-primary-400">
                    {product.features.stats.discount}% OFF
                  </span>
                </div>
              ) : (
                <p className="font-semibold text-3xl">
                  {formatPrice(product?.price)}
                </p>
              )}
            </div>
          </div>
          {/* Descripcion */}
          <div className="flex flex-col gap-y-2 my-4 py-2 border-t border-t-gray-200 rounded">
            <p className="text-gray-500 text-sm">
              Descripción: {product?.description}
            </p>

            <ul className="flex flex-col gap-y-2 text-gray-500 text-sm">
              {details?.brand ? <li>Marca: {details.brand}</li> : <></>}
              {details?.color ? <li>Color: {details.color}</li> : <></>}
              {details?.model ? <li>Modelo: {details.model}</li> : <></>}
              {details?.category ? (
                <li>
                  Categoría:{" "}
                  {details.category[0].toUpperCase() +
                    details.category.slice(1)}
                </li>
              ) : (
                <></>
              )}
              {details?.year ? <li>Año: {details.year}</li> : <></>}
            </ul>
          </div>
        </div>
        {/* Botones */}
        <div className="flex gap-x-4 mt-8">
          <button className="btn-soft">Favoritos</button>
          {!state.cart.find((c) => c.id === product.id) ? (
            <button
              className="btn-primary"
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
                className="btn-primary"
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
      </article>
      {/* Imagen */}
      <div className="w-1/2">
        <img
          className="w-full object-cover h-30"
          src={product?.images}
          alt={product?.product_name}
        />
      </div>
    </div>
  );
};

export default Product;
