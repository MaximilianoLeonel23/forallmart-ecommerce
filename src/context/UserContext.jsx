import { createContext, useState, useEffect } from "react";
import { token } from "./../helpers/auth";
import { API_URL } from "./../constants/env";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (token()) {
      axios
        .get(`${API_URL}/private/users`, {
          headers: {
            authorization: `Bearer ${token()}`,
          },
        })
        .then((resp) => {
          setUserData(resp.data.data);
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
