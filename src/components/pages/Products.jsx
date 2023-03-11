import useFetch from "../../hooks/useFetch";
import ProductCard from "../organisms/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./../molecules/Loading";

const Products = () => {
  const { data, error, loading } = useFetch("public/products");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (data) setResult(data);
  }, [data]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    console.log(filterValue);

    setResult(
      data.filter((p) => JSON.stringify(p).toLowerCase().includes(filterValue))
    );
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
      <div className="flex justify-between py-8">
        <h1 className="text-2xl font-bold text-gray-800">Nuestros productos</h1>
        <input
          className="rounded-md border px-4 py-1 outline-0"
          type="text"
          placeholder="Filtro de productos"
          onChange={handleFilter}
        />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {data.length === 0 && <p>No existen productos</p>}
        {result.map((prod) => (
          <ProductCard prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
