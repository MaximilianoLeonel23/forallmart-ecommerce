import React from "react";
import useFetch from "./../../hooks/useFetch";
import { token } from './../../helpers/auth';

const Sales = () => {
  const { data, loading, error } = useFetch("admin/invoices", {
    headers: {
        Authorization: `Bearer ${token()}`
    },
  });
  if (loading) <p>cargando</p>
  if (error) <p>error</p>

  return (
    <div>
      <h1>Ventas de los usuarios</h1>
    </div>
  );
};

export default Sales;
