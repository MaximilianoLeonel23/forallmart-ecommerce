import ProductCard from "../organisms/ProductCard";
import useFetch from "./../../hooks/useFetch";
const Previews = () => {
  const { data, loading, error } = useFetch("public/products");

  if (loading) return <p>cargando</p>;

  if (error) return <p>error</p>;

  const productsWithDiscount = data.filter((c) => c?.features?.stats?.discount > 0);
    
  return (
    <section className="py-12">
      <h2 className="text-gray-800 font-bold text-2xl text-center">
        ¡No te pierdas nuestras ofertas! Descuentos de primavera ahora
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {productsWithDiscount.map((prod) => {
          return <ProductCard prod={prod} key={prod.id} />;
        })}
      </div>
    </section>
  );
};

export default Previews;
