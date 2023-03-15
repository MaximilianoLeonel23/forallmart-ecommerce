import React from "react";
import useFetch from "./../../hooks/useFetch";
import { token } from "./../../helpers/auth";
import { formatPrice, calculateInvPrice } from "../../helpers/number";
import Loading from "../molecules/Loading";
const Sales = () => {
  const { data, loading, error } = useFetch("admin/invoices", {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });
  console.log(data);
  if (loading)
    return (
      <div className="py-8">
        <Loading />
      </div>
    );
  if (error) return <p>error</p>;

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Ventas</h1>
      </div>
      <section className="overflow-x-auto w-full">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 gap-x-4 sm:gap-x-8 place-items-center uppercase border-y py-2 px-4 sm:py-4 border-gray-300 font-medium text-sm sm:text-base text-gray-700">
            <p>Usuario</p>
            <p>Fecha</p>
            <p>Orden</p>
            <p>Monto</p>
          </div>
          {data.map((inv) => {
            return (
              <div
                key={inv?.invoice?.id}
                className="grid grid-cols-4 gap-x-4 sm:gap-x-8 place-items-center items-center border-b py-2 px-4 sm:py-4 border-gray-200 text-gray-600 text-xs sm:text-sm"
              >
                <p>{inv?.user?.email}</p>
                <p>{Date(inv?.invoice?.created_at)}</p>

                <p>#{inv?.invoice?.purchase_order_id}</p>
                <p>{formatPrice(calculateInvPrice(inv))}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Sales;
