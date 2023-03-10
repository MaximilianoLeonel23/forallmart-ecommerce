import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import useFetch from "./../../hooks/useFetch";
import { API_URL } from "./../../constants/env";
import { token } from "./../../helpers/auth";

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { data, loading, error } = useFetch("private/invoices", {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });

  if (loading) return <p>cargando</p>;
  if (error) return <p>error</p>

  return (
    <div>
      <h1>Perfil de {userData?.details?.fullname}</h1>
      <p>{JSON.stringify(userData)}</p>
      <div className="pt-16">
        <h2>Compras del usuario</h2>
        <ul>
          {data?.map((inv) => {
            return <li key={inv.id}>{JSON.stringify(inv)}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
