import Input from "../molecules/form/Input";
import Select from "../molecules/form/Select";
import TextArea from "../molecules/form/TextArea";

const AddProduct = ({ handleSubmit, product, params, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8">
        <Input
          type="text"
          name="productName"
          placeholder="Nombre"
          defaultValue={product?.product_name}
          required
        />
        <Input
          type="number"
          name="price"
          placeholder="Precio"
          defaultValue={product?.price}
          required
        />
        <Input
          type="url"
          name="images"
          placeholder="Imagen"
          defaultValue={product?.images}
          required
        />
        <Input
          type="text"
          name="brand"
          placeholder="Marca"
          defaultValue={product?.features?.details?.brand}
        />
        <Input
          type="text"
          name="model"
          placeholder="Modelo"
          defaultValue={product?.features?.details?.model}
        />
        <Input
          type="text"
          name="year"
          placeholder="Año"
          defaultValue={product?.features?.details?.year}
        />
        <Input
          type="number"
          name="rating"
          placeholder="Calificación"
          defaultValue={product?.features?.stats?.rating}
        />
        <Input
          type="text"
          name="color"
          placeholder="Color"
          defaultValue={product?.features?.details?.color}
        />
        <Input
          type="number"
          name="discount"
          placeholder="Descuento"
          defaultValue={product?.features?.stats?.discount}
        />
        <Input
          type="number"
          name="stock"
          placeholder="Stock"
          defaultValue={product?.features?.stats?.stock}
          required
        />
        <Select
          name="category"
          categories={[
            "joyeria",
            "moda",
            "autos",
            "hogar",
            "tecnología",
            "electrodomésticos",
            "salud y belleza",
            "accesorios",
            "otros",
          ]}
          defaultValue={product?.features?.details?.category}
        />
        <TextArea
          name="description"
          placeholder="Descripción"
          rows="2"
          required
          defaultValue={product?.description}
        />
        <button type="submit" className="btn-ghost">
          {params.id ? "Editar" : "Agregar"} producto
        </button>
        {error && <p>{JSON.stringify(error)}</p>}
      </div>
    </form>
  );
};

export default AddProduct;
