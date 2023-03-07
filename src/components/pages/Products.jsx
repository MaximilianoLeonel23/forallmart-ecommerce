import useFetch from "../../hooks/useFetch";
import ProductCard from "../organisms/ProductCard";

const Products = () => {
  const { data, error, loading } = useFetch("public/products");

  if (loading) return <h1>Cargando...</h1>;

  if (error) return <h1>Error en la petición de productos</h1>;

  console.log(data);
  return (
    <div>
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-gray-800">Productos</h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {data.length === 0 && <p>No existen productos</p>}
        {data.map((prod) => (
          <ProductCard
            description={prod.description}
            product_name={prod.product_name}
            images={prod.images}
            price={prod.price}
            id={prod.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
