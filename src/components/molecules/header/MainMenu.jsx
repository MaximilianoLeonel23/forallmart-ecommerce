import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";
import MainNavDesktop from "../../atoms/MainNavDesktop";
import { deleteToken, token } from "./../../../helpers/auth";
import MainAside from "./MainAside";
const MainMenu = () => {
  const nav = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const { state } = useContext(CartContext);
  const aside = document.getElementById("aside");
  const handleSession = () => {
    deleteToken();
    nav("/");
    setUserData();
  };

  return (
    <div>
      {/* Menu superior mobile */}
      <nav className="block sm:hidden">
        <ul className="flex items-center gap-x-2 fill-gray-800">
          <li>
            <Link className="menu-item" to="/carrito">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path d="M6.625 21q-.7 0-1.162-.462Q5 20.075 5 19.375V8.625q0-.7.463-1.162Q5.925 7 6.625 7H8.5v-.5q0-1.45 1.025-2.475Q10.55 3 12 3q1.45 0 2.475 1.025Q15.5 5.05 15.5 6.5V7h1.875q.7 0 1.163.463.462.462.462 1.162v10.75q0 .7-.462 1.163-.463.462-1.163.462Zm0-1h10.75q.25 0 .437-.188.188-.187.188-.437V8.625q0-.25-.188-.437Q17.625 8 17.375 8H15.5v2.5q0 .225-.137.363Q15.225 11 15 11q-.225 0-.363-.137-.137-.138-.137-.363V8h-5v2.5q0 .225-.137.363Q9.225 11 9 11q-.225 0-.363-.137-.137-.138-.137-.363V8H6.625q-.25 0-.437.188Q6 8.375 6 8.625v10.75q0 .25.188.437.187.188.437.188ZM9.5 7h5v-.5q0-1.05-.725-1.775Q13.05 4 12 4q-1.05 0-1.775.725Q9.5 5.45 9.5 6.5ZM6 20V8v12Z" />
                </svg>
                <span className="font-light text-sm">
                  ({state.cart.length})
                </span>
              </div>
            </Link>
          </li>
          <li>
            <div
              onClick={() => {
                aside?.classList?.toggle("-translate-x-full");
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M3.5 17.275v-1h17v1Zm0-4.775v-1h17v1Zm0-4.775v-1h17v1Z" />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
      {/* Menú desplegable mobile */}
      <MainAside
        userData={userData}
        handleSession={handleSession}
        aside={aside}
      />
      {/* Menú superior desktop */}
      <MainNavDesktop
        state={state}
        userData={userData}
        handleSession={handleSession}
      />
    </div>
  );
};

export default MainMenu;
