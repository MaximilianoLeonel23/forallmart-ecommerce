import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import useFetch from "./../../hooks/useFetch";
import { token } from "./../../helpers/auth";
import Loading from "../molecules/Loading";
import Input from "../molecules/form/Input";
import axios from "axios";
import { API_URL } from "../../constants/env";
import Purchases from "../organisms/Purchases";

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { data, loading, error } = useFetch("private/invoices", {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    const updateData = {
      ...userData,
      email: e.target.email.value,
      details: {
        fullname: e.target.fullname.value,
        address: e.target.address.value,
        cel: e.target.cel.value,
      },
    };
    axios
      .put(`${API_URL}/public/user/${userData.id}`, updateData, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading)
    return (
      <div className="py-8">
        <Loading />
      </div>
    );

  if (error) return <p>error</p>;

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Perfil de {userData?.details?.fullname}
      </h1>
      {/* Sección de info del usuario */}
      <section className="flex gap-x-16 py-8 px-12 border border-gray-200 rounded bg-white">
        {/* Foto */}
        <div className="flex flex-col items-center gap-y-4">
          {userData?.details?.profileImage ? (
            <img src={userData?.details?.profileImage} alt="img"></img>
          ) : (
            <div className="h-28 w-28 flex items-center justify-center bg-gray-200 rounded-full">
              <p className={"text-5xl text-gray-500"}>
                {(userData?.details?.fullname).slice(0, 1)}
              </p>
            </div>
          )}
          <h2 className="text-lg font-semibold text-gray-800">
            {userData?.details?.fullname}
          </h2>
          <Input
            type="url"
            name="profileImage"
            defaultValue={userData?.details?.profileImage}
          />
        </div>
        {/* Info */}
        <div className="w-full">
          <form onSubmit={handleUpdate}>
            <div className="flex justify-between">
              <div className="text-gray-700">
                <div>
                  <p>Nombre y apellido</p>
                  <Input
                    type="text"
                    name="fullname"
                    defaultValue={userData?.details?.fullname}
                  />
                </div>
                <div>
                  <p>Email</p>
                  <Input
                    type="email"
                    name="email"
                    defaultValue={userData?.email}
                  />
                </div>
                <div>
                  <p>Celular</p>
                  <Input
                    type="text"
                    name="cel"
                    defaultValue={userData?.details?.cel}
                  />
                </div>
                <div>
                  <p>Dirección</p>
                  <Input
                    type="text"
                    name="address"
                    defaultValue={userData?.details?.adress}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <button className="btn-ghost">Actualizar perfil</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Sección de compras del usuario */}
      <Purchases userData={userData} data={data} />
    </div>
  );
};
export default Profile;
