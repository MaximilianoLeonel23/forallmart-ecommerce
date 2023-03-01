import React, { useState } from "react";
import { API_URL } from "./../../constants/env";
import axios from "axios";
import { setToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import MainLogin from "./../templat/MainLogin";

const Login = () => {
  const [error, setError] = useState();
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(`${API_URL}/public/login`, data)
      .then((resp) => {
        setToken(resp.data.data.token);
        nav("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <MainLogin>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <div className="py-2">
            <input
              className="rounded-md border px-4 py-1"
              type="email"
              name="email"
              placeholder="correo electrónico"
              required
            />
          </div>
          <div className="py-2">
            <input
              className="rounded-md border px-4 py-1"
              type="password"
              name="password"
              placeholder="contraseña"
              required
            />
          </div>
          <div className="py-2">
            <button type="submit" className="btn-ghost">
              Ingresar
            </button>
          </div>
          {error && (
            <span className="text-red-500">{error?.response?.data?.data}</span>
          )}
        </div>
      </form>
    </MainLogin>
  );
};

export default Login;
