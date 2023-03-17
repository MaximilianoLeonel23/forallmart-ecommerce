import React, { useState } from "react";
import { API_URL } from "./../../constants/env";
import axios from "axios";
import { setToken } from "../../helpers/auth";
import { useNavigate, Link } from "react-router-dom";
import MainLogin from "./../templat/MainLogin";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import Logo from "../molecules/header/Logo";
import Input from "../molecules/form/Input";
const Login = () => {
  const [error, setError] = useState();
  const nav = useNavigate();

  const { setUserData } = useContext(UserContext);
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
        setUserData(resp.data.data.user);

        nav("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <MainLogin>
      <section className="bg-white relative drop-shadow text-gray-800 rounded px-8 pt-20 pb-4 sm:pb-8">
        <div className="absolute top-4 left-4">
          <Logo />
        </div>
        <h1 className="text-lg font-medium text-center mb-4">Inicia sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-1 sm:gap-y-2 items-center">
            <div className="text-sm w-full">
              <label for="email">Email</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="text-sm w-full">
              <label for="password">Contraseña</label>
              <Input type="password" id="password" name="password" required />
            </div>
          </div>
          <div className="my-4 sm:my-8 flex flex-col items-center gap-y-2">
            <button type="submit" className="btn-primary">
              Ingresar
            </button>
            <Link to="/registro" className="font-light text-sm">
              ¿Deseas registrarte?
            </Link>
            {error && (
              <span className="text-primary-600 bg-primary-300 py-0.5 px-4 rounded text-sm ">
                {error?.response?.data?.data}
              </span>
            )}
          </div>
        </form>
      </section>
    </MainLogin>
  );
};

export default Login;
