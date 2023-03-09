import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import CartItem from "../organisms/CartItem";
import { API_URL } from "./../../constants/env";
import { token } from "./../../helpers/auth";
import axios from "axios";
const Cart = () => {
  const { state } = useContext(CartContext);
  const [order, setOrder] = useState();

  const handleOrder = () => {
    let products = state.cart.map((p) => {
      return {
        product_id: p.id,
        amount: 1,
        unit_price: p.price,
      };
    });

    const data = {
      products,
    };

    axios
      .post(`${API_URL}/private/purchase-orders`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((resp) => {
        setOrder(resp.data.data);
      });
  };
  return (
    <div className="flex">
      <div className="w-full bg-gray-200 mx-auto mt-8 py-8 px-16 rounded">
        {/* producto */}
        {!state?.cart?.length > 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <div>
            {state.cart.map((prod) => {
              return (
                <div>
                  <CartItem key={prod.id} prod={prod} />
                </div>
              );
            })}

            {!order ? (
              <button className="btn-ghost" onClick={handleOrder}>
                Crear orden
              </button>
            ) : (
              <p>ID de la orden de compra: {order.id}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
