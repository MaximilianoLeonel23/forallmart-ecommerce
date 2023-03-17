import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { formatPrice } from "./../../helpers/number";
import Input from "../molecules/form/Input";
const CartItem = ({ prod }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <article className="w-full border-b border-gray-200 text-gray-800 py-4 sm:px-8 sm:mb-4">
      <div className="flex justify-between gap-x-8">
        <div className="flex items-start gap-x-8">
          <div className="">
            <img
              className="w-24 sm:w-32 h-24 sm:h-32 object-cover"
              src={prod?.images}
              alt={prod?.product_name}
            />
          </div>
          <div>
            <h2 className="text-sm sm:text-lg font-semibold">
              {prod?.product_name}
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex flex-col">
            {prod?.features?.stats?.discount ? (
              <p className="font-semibold text-sm sm:text-base">
                {formatPrice(
                  prod?.price -
                    prod.price * (prod?.features?.stats?.discount / 100)
                )}
              </p>
            ) : (
              <p className="font-semibold text-sm sm:text-base">
                {formatPrice(prod?.price)}
              </p>
            )}
          </div>

          <button
            className="btn-ghost"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
