import { formatPrice, calculateInvPrice } from "../../helpers/number";

const Purchases = ({userData, data}) => {
  return (
    <section className="my-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-8">
          Compras de {userData?.details?.fullname}
        </h2>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 text-center border-y border-gray-300 py-4 font-medium">
            <p>Fecha</p>
            <p>Orden de compra</p>
            <p>Monto</p>
          </div>
          {data.map((inv) => {
            return (
              <div
                key={inv?.invoice?.id}
                className="grid grid-cols-3 text-center border-b  border-gray-200 py-4 text-sm"
              >
                <p>{Date(inv?.invoice?.created_at)}</p>

                <p>#{inv?.invoice?.purchase_order_id}</p>
                <p>{formatPrice(calculateInvPrice(inv))}</p>
              </div>
            );
          })}
        </div>
      </section>
  )
}

export default Purchases
