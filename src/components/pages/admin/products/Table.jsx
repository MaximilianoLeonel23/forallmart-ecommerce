import { Link } from "react-router-dom";
import { API_URL } from "../../../../constants/env";
import { token } from "../../../../helpers/auth";
import useFetch from "./../../../../hooks/useFetch";
import axios from "axios";
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

  if (loading) return <h1>Cargando...</h1>;

  if (error) return <h1>Error en la petición de productos</h1>;

  return (
    <div className="w-1/2 mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className=" text-gray-800 font-bold">Lista de productos</h1>
        <Link to="/admin/productos/crear">
          <button className="btn-ghost">Agregar producto</button>
        </Link>
      </div>

      <table className="overflow-x-auto w-full text-sm text-left">
        <thead className="uppercase text-gray-800">
          <tr className="border border-gray-200">
            <th scope="row" className="py-4 px-4 text-gray-700">
              Producto
            </th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr className="border-b">
              <td className="py-4 px-4 text-gray-700">
                No existen productos actualmente
              </td>
            </tr>
          )}
          {data.map((prod) => (
            <tr className="border-b" key={prod.id}>
              <td scope="row" className="py-4 px-4 text-gray-700">
                {prod.product_name}
              </td>
              <td>{prod.price}</td>
              <td>
                <Link
                  to={`/admin/productos/editar/${prod.id}`}
                  className="text-blue-500 hover:bg-blue-100 p-2 rounded-sm"
                >
                  Editar
                </Link>
              </td>
              <td>
                <a
                  className="text-red-500 cursor-pointer hover:bg-red-100 p-2 rounded-sm"
                  onClick={() => deleteProduct(prod)}
                >
                  Eliminar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
