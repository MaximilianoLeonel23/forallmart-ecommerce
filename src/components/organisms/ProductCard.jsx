import { Link } from "react-router-dom";

const ProductCard = ({ product_name, description, price, images, id }) => {

  const formatStr = (str) => {
      if (str.length >= 75) {
        
        return `${str.slice(0, 75) + "..."}`
      } else {
        return str
      }
  }

  return (
    <article className="w-full max-w-xs border border-gray-100 rounded-2xl drop-shadow-sm cursor-pointer hover:drop-shadow-md transition delay-75">
      <div className="flex flex-col font-serif">
        <div className="h-72">
          <Link to={`/productos/${id}`}>
            <img
              className="w-full h-full object-cover rounded-t-2xl"
              src={images ? images[0] : "Producto no disponible"}
              alt={product_name}
            ></img>
          </Link>
        </div>
        <div className="h-40 flex flex-col bg-white p-2 rounded-b-2xl">
          <h4 className="text-lg font-semibold">{product_name}</h4>
          <p className="text-sm "> {formatStr(description)}</p>
          <span className="pt-2">{price}</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
