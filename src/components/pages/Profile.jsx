import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import useFetch from "./../../hooks/useFetch";
import { token } from "./../../helpers/auth";
import Loading from "../molecules/Loading";

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { data, loading, error } = useFetch("private/invoices", {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });

  if (loading)
    return (
      <div className="py-8">
        <Loading />
      </div>
    );
  if (error) return <p>error</p>;

  return (
    <div className="py-8">
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
