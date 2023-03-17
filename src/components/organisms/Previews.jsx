import ProductCard from "../organisms/ProductCard";
import useFetch from "./../../hooks/useFetch";
import Loading from "./../molecules/Loading";

const Previews = () => {
  const { data, loading, error } = useFetch("public/products");

  if (loading)
    return (
      <div className="py-16">
        <Loading />
      </div>
    );

  if (error) return <p>error</p>;

  const productsWithDiscount = data.filter(
    (c) => c?.features?.stats?.discount > 0
  );

  return (
    <section className="py-6 sm:py-12">
      <h2 className="text-gray-800 font-bold text-lg sm:text-2xl text-center">
        ¡No te pierdas nuestras ofertas y descuentos de primavera!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-8">
        {productsWithDiscount.map((prod) => {
          return <ProductCard prod={prod} key={prod.id} />;
        })}
      </div>
    </section>
  );
};

export default Previews;
