import Input from "../../../molecules/form/Input";
import React from "react";
import { API_URL } from "./../../../../constants/env";
import { token } from "./../../../../helpers/auth";
import axios from "axios";
import TextArea from "../../../molecules/form/TextArea";
import Select from "../../../molecules/form/Select";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AddProduct from "../../../organisms/AddProduct";
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
    <div className="mx-auto overflow-x-auto w-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          {params.id ? "Editar" : "Agregar"} producto
        </h1>
      </div>
      <section className="border border-gray-200 bg-white rounded p-8">
        <AddProduct
          handleSubmit={handleSubmit}
          product={product}
          params={params}
          error={error}
        />
      </section>
    </div>
  );
};

export default Form;
