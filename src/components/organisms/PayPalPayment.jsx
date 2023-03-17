import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const PayPalPayment = ({ value, order }) => {
  const nav = useNavigate();
  const { dispatch } = useContext(CartContext);
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value,
                },
                custom_id: order.id,
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((resp) => {
            if (resp.status === "COMPLETED") {
              navigator("/pago-exitoso");
              dispatch({
                type: "CLEAR_CART",
              });
            } else {
              alert("Tu pago no se procesó. Intenta nuevamente");
            }
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
