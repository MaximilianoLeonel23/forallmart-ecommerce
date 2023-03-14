import MainLogin from "./../templat/MainLogin";
import { Link, useNavigate } from "react-router-dom";
import Input from "../molecules/form/Input";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants/env";
import Logo from "../molecules/header/Logo";

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
        fullname: e.target.fullname.value,
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
    // <MainLogin title="Regístrate">
    //   <form onSubmit={handleSubmit}>
    //     <div className="flex flex-col items-center">
    //       <Input
    //         type={"text"}
    //         name={"fullname"}
    //         placeholder={"Nombre y apellido"}
    //         required={true}
    //       />
    //       <Input
    //         type={"email"}
    //         name={"email"}
    //         placeholder={"Correo eletrónico"}
    //         required={true}
    //       />
    //       <Input
    //         type={"password"}
    //         name={"password"}
    //         placeholder={"Contraseña"}
    //         required={true}
    //       />
    //       <div className="py-2 flex flex-col gap-y-2 ">
    //         <button type="submit" className="btn-ghost">
    //           Ingresar
    //         </button>
    //         <Link to="/login" className="font-light">
    //           ¿Ya tienes una cuenta? Inicia sesión
    //         </Link>
    //       </div>
    //       {error && (
    //         <span className="text-red-500">{error?.response?.data?.data}</span>
    //       )}
    //     </div>
    //   </form>
    // </MainLogin>
    <MainLogin>
      <section className="bg-white relative drop-shadow text-gray-800 rounded px-8 pt-20 pb-8">
        <div className="absolute top-4 left-4">
          <Logo />
        </div>
        <h1 className="text-lg font-medium text-center mb-4">Regístrate</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2 items-center">
            <div className="text-sm w-full">
              <label for="fullname">Nombre y apellido</label>
              <Input type="text" name="fullname" required />
            </div>
            <div className="text-sm w-full">
              <label for="email">Email</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="text-sm w-full">
              <label for="password">Contraseña</label>
              <Input type="password" id="password" name="password" required />
            </div>
          </div>
          <div className="my-8 flex flex-col items-center gap-y-2">
            <button type="submit" className="btn-primary">
              Crear cuenta
            </button>
            <Link to="/login" className="font-light text-sm">
              ¿Ya tienes una cuenta? Inicia sesión
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

export default Register;
