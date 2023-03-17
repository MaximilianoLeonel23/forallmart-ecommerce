import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../helpers/number";
const ProductCard = ({ prod }) => {
  const { state, dispatch } = useContext(CartContext);

  const formatStr = (str) => {
    if (str.length >= 50) {
      return `${str.slice(0, 50) + "..."}`;
    } else {
      return str;
    }
  };
  const formatTitle = (str) => {
    if (str.length >= 20) {
      return `${str.slice(0, 20) + "..."}`;
    } else {
      return str;
    }
  };

  

  return (
    <article className="w-full sm:max-h-card bg-white rounded-md border-gray-200 drop-shadow-md cursor-pointer hover:drop-shadow-md transition delay-75">
      <div className="flex flex-col h-full ">
        <div>
          <Link to={`/productos/${prod.id}`}>
            <img
              className="w-full h-40 sm:h-15 object-cover rounded-t-md"
              src={prod.images ? prod.images[0] : "Producto no disponible"}
              alt={prod.product_name}
            ></img>
          </Link>
        </div>
        <div className="flex flex-col h-48 sm:h-15 text-gray-800 justify-between p-4">
          <div className="sm:leading-8">
            <Link to={`/productos/${prod.id}`}>
              <h4 className="font-semibold sm:text-lg">{formatTitle(prod.product_name)}</h4>
            </Link>
            <p className="text-xs sm:text-sm"> {formatStr(prod.description)}</p>
            {prod?.features?.stats?.discount ? (
              <div className="flex gap-x-4 mt-4">
                <p className="text-xs sm:text-sm text-gray-400 line-through">
                  {formatPrice(prod.price)}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-sm py-0.5 px-2 text-primary-500 bg-primary-300 rounded font-semibold sm:text-xl">
                    {formatPrice(
                      prod.price -
                        prod.price * (prod.features.stats.discount / 100)
                    )}
                  </p>
                  <span className="text-xs sm:text-base font-bold text-primary-400">
                    {prod.features.stats.discount}% OFF
                  </span>
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <p className="py-2 font-semibold text-sm sm:text-xl">
                  {formatPrice(prod.price)}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-end gap-x-4 mt-8">
            {!state.cart.find((c) => c.id === prod.id) ? (
              <button
                className="btn-primary"
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
                  className="btn-primary"
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
      </div>
    </article>
  );
};

export default ProductCard;
