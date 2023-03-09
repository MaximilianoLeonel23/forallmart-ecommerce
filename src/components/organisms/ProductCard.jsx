import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ prod }) => {
  const { state, dispatch } = useContext(CartContext);

  const formatStr = (str) => {
    if (str.length >= 75) {
      return `${str.slice(0, 75) + "..."}`;
    } else {
      return str;
    }
  };

  return (
    <article className="w-full max-w-xs border border-gray-100 rounded-2xl drop-shadow-sm cursor-pointer hover:drop-shadow-md transition delay-75">
      <div className="flex flex-col font-serif">
        <div className="h-72">
          <Link to={`/productos/${prod.id}`}>
            <img
              className="w-full h-full object-cover rounded-t-2xl"
              src={prod.images ? prod.images[0] : "Producto no disponible"}
              alt={prod.product_name}
            ></img>
          </Link>
        </div>
        <div className="h-40 flex flex-col bg-white p-2 rounded-b-2xl">
          <h4 className="text-lg font-semibold">{prod.product_name}</h4>
          <p className="text-sm "> {formatStr(prod.description)}</p>
          <span className="pt-2">{prod.price}</span>
        </div>
        <div className="flex gap-x-4 mt-8">
          {!state.cart.find((c) => c.id === prod.id) ? (
            <button
              className="btn-ghost"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
            >
              Agregar al carrito
            </button>
          ) : (
            state.cart.find((c) => c.id === prod.id) && (
              <button
                className="btn-ghost"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
              >
                Quitar del carrito
              </button>
            )
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
