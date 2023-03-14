import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import CartItem from "../organisms/CartItem";
import { API_URL } from "./../../constants/env";
import { token } from "./../../helpers/auth";
import axios from "axios";
import PayPalPayment from "../organisms/PayPalPayment";
import { formatPrice } from "./../../helpers/number";
const Cart = () => {
  const { state } = useContext(CartContext);
  const [order, setOrder] = useState();

  let value = 0;
  state.cart.forEach((c) => (value += c.price));
  let ship = 0;
  if (value < 1000) {
    ship = value * 0.1;
  }

  console.log(value);
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
    <div className="flex flex-col justify-start gap-x-8 pt-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Carrito de compras</h1>
      </div>
      <div className="w-full flex items-start gap-x-8 mt-8">
        <div className="flex flex-col w-2/3">
          {!state?.cart?.length > 0 ? (
            <div className="flex gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>

              <p>No hay productos en el carrito</p>
            </div>
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
                <button className="btn-primary" onClick={handleOrder}>
                  Crear orden
                </button>
              ) : (
                <>
                  <p>ID de la orden de compra: {order.id}</p>
                  <PayPalPayment value={value} order={order} />
                </>
              )}
            </div>
          )}
        </div>
        <div className="w-1/3 bg-white border border-gray-200 rounded p-4">
          <h3 className="text-xl mb-6">Resumen</h3>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p>{formatPrice(value)}</p>
            </div>
            {/* <div className="flex justify-between items-center bg-slate-100 text-gray-400 px-2 py-1 rounded-sm">
              <p>Descuento</p>
              <p>$00,00</p>
            </div> */}
            <div className="flex justify-between items-center">
              <p>Envío</p>
              {ship ? (
                <p>{formatPrice(ship)}</p>
              ) : (
                <p className="text-primary-500">Gratis</p>
              )}
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <p>Total</p>
              {ship ? (
                <p>{formatPrice(value + ship)}</p>
              ) : (
                <p>{formatPrice(value)}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
