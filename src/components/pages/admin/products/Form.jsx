import Input from "../../../molecules/form/Input";
import React from "react";
import { API_URL } from "./../../../../constants/env";
import { token } from "./../../../../helpers/auth";
import axios from "axios";
import TextArea from "../../../molecules/form/TextArea";
import Select from "../../../molecules/form/Select";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Form = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    if (params) {
      axios
        .get(`${API_URL}/public/products/${params.id}`)
        .then((resp) => setProduct(resp.data.data))
        .finally(setLoading(false));
    }
  }, []);

  console.log(product);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.images.value],
      description: e.target.description.value,
      features: {
        details: {
          color: e.target.color.value,
          model: e.target.model.value,
          brand: e.target.brand.value,
          year: e.target.year.value,
          category: e.target.category.value,
        },
        stats: {
          stock: Number(e.target.stock.value),
          rating: Number(e.target.rating.value),
          discount: Number(e.target.discount.value),
        },
      },
    };

    if (!params.id) {
      axios
        .post(`${API_URL}/admin/products`, data, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then((resp) => {
          console.log("Producto creado");
          nav("/admin/productos");
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      axios
        .put(`${API_URL}/admin/products/${params.id}`, data, {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        })
        .then(() => {
          nav("/admin/productos");
        })
        .catch((error) => {
          setError(error);
          console.log(error);
        });
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-8">
      <h1>{params.id ? "Editar" : "Agregar"} producto</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 ">
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
    </div>
  );
};

export default Form;
