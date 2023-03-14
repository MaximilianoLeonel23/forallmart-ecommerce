import { Link } from "react-router-dom";
import { API_URL } from "../../../../constants/env";
import { token } from "../../../../helpers/auth";
import useFetch from "./../../../../hooks/useFetch";
import axios from "axios";
import Loading from "../../../molecules/Loading";
const Table = () => {
  const { data, error, loading } = useFetch("public/products");

  const deleteProduct = (prod) => {
    if (window.confirm("Está seguro que quiere eliminar este producto?")) {
      axios
        .delete(`${API_URL}/admin/products/${prod.id}`, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then(() => {
          alert("Producto eliminado");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  if (loading)
  return (
    <div className="py-8">
      <Loading />
    </div>
  );

  if (error) return <h1>Error en la petición de productos</h1>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Lista de productos</h1>
        <Link to="/admin/productos/crear">
          <button className="btn-ghost">Agregar producto</button>
        </Link>
      </div>
      <section className="overflow-x-auto w-full">
        <div className="grid grid-cols-4 gap-x-8 place-items-center uppercase border-y p-4 border-gray-300 font-medium text-gray-700">
          <h4>Producto</h4>
          <h4>Precio</h4>
          <h4>Editar</h4>
          <h4>Eliminar</h4>
        </div>
        {data.length === 0 && (
          <div className="border-b border-gray-200">
            <p className="py-4 px-4 text-gray-700">
              No existen productos actualmente
            </p>
          </div>
        )}
        {data.map((prod) => (
          <div className="grid grid-cols-4 gap-x-8 place-items-center items-center border-b p-4 border-gray-200 text-gray-600">
            <p>{prod.product_name}</p>
            <p>{prod.price}</p>
            <Link to={`/admin/productos/editar/${prod.id}`}>
              <button className="btn-edit">Editar</button>
            </Link>
            <a onClick={() => deleteProduct(prod)}>
              <button className="btn-soft">Eliminar</button>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Table;
