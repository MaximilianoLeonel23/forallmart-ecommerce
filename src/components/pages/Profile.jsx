import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import useFetch from "./../../hooks/useFetch";
import { token } from "./../../helpers/auth";
import Loading from "../molecules/Loading";
import Input from "../molecules/form/Input";
import axios from "axios";
import { API_URL } from "../../constants/env";
import Purchases from "../organisms/Purchases";
import UpdateProfile from "../organisms/UpdateProfile";
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
    <div className="sm:py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-8">
        Perfil de {userData?.details?.fullname}
      </h1>
      {/* Sección de info del usuario */}
      <section className="flex flex-col sm:flex-row gap-y-8 sm:gap-x-16 py-8 px-12 border border-gray-200 rounded bg-white">
        {/* Foto */}
        <div className="flex flex-col items-center gap-y-4">
          {userData?.details?.profileImage ? (
            <img src={userData?.details?.profileImage} alt="img"></img>
          ) : (
            <div className="h-16 sm:h-28 w-16 sm:w-28 flex items-center justify-center bg-gray-200 rounded-full">
              <p className="text-2xl sm:text-5xl text-gray-500">
                {(userData?.details?.fullname).slice(0, 1)}
              </p>
            </div>
          )}
          <h2 className="text-lg font-semibold text-gray-800">
            {userData?.details?.fullname}
          </h2>
        </div>
        {/* Info */}
        <div className="w-full">
          <UpdateProfile userData={userData} handleUpdate={handleUpdate}/>
        </div>
      </section>
      {/* Sección de compras del usuario */}
      <Purchases userData={userData} data={data} />
    </div>
  );
};
export default Profile;
