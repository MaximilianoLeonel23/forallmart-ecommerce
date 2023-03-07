import MainLogin from "./../templat/MainLogin";
import { Link, useNavigate } from "react-router-dom";
import Input from "../molecules/form/Input";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants/env";
const Register = () => {
  const nav = useNavigate();
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      details: {
        fullName: e.target.fullName.value,
      },
    };

    axios
      .post(`${API_URL}/public/users`, data)
      .then(() => {
        nav("/login");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <MainLogin title="Regístrate">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <Input
            type={"text"}
            name={"fullName"}
            placeholder={"Nombre y apellido"}
            required={true}
          />
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Correo eletrónico"}
            required={true}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"Contraseña"}
            required={true}
          />
          <div className="py-2 flex flex-col gap-y-2 ">
            <button type="submit" className="btn-ghost">
              Ingresar
            </button>
            <Link to="/login" className="font-light">
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </div>
          {error && (
            <span className="text-red-500">{error?.response?.data?.data}</span>
          )}
        </div>
      </form>
    </MainLogin>
  );
};

export default Register;
