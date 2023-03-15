import { formatPrice } from "../../helpers/number";

const Resumen = ({ship, value}) => {
  return (
    <div className="w-full sm:w-1/3 bg-white border border-gray-200 rounded p-4">
      <h3 className="text-lg sm:text-xl  mb-6">Resumen</h3>
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between items-center text-sm sm:text-base">
          <p>Subtotal</p>
          <p>{formatPrice(value)}</p>
        </div>
        {/* <div className="flex justify-between items-center bg-slate-100 text-gray-400 px-2 py-1 rounded-sm">
              <p>Descuento</p>
              <p>$00,00</p>
            </div> */}
        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-base">Envío</p>
          {ship ? (
            <p>{formatPrice(ship)}</p>
          ) : (
            <p className="text-primary-500 text-sm sm:text-base">Gratis</p>
          )}
        </div>
        <div className="flex justify-between items-center text-base sm:text-lg font-bold">
          <p>Total</p>
          {ship ? (
            <p>{formatPrice(value + ship)}</p>
          ) : (
            <p>{formatPrice(value)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resumen;
