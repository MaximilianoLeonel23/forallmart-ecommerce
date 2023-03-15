import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";
import { deleteToken, token } from "./../../../helpers/auth";
const MainMenu = () => {
  const nav = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const { state } = useContext(CartContext);
  const handleSession = () => {
    deleteToken();
    nav("/");
    setUserData();
  };

  return (
    <>
      <nav className="block sm:hidden">
        <ul className="flex items-center gap-x-2">
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
          {token() && (
            <li>
              <Link className="menu-item" to="/perfil">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                  >
                    <path d="M12 11.375q-1.25 0-2.125-.875T9 8.375q0-1.225.875-2.113.875-.887 2.125-.887t2.125.887Q15 7.15 15 8.375q0 1.25-.875 2.125T12 11.375Zm-7 7.25v-1.65q0-.625.363-1.163.362-.537.962-.837 1.425-.675 2.838-1.013 1.412-.337 2.837-.337 1.425 0 2.838.337 1.412.338 2.837 1.013.6.3.963.837.362.538.362 1.163v1.65Zm1-1h12v-.65q0-.35-.212-.638-.213-.287-.588-.487-1.25-.6-2.562-.912-1.313-.313-2.638-.313t-2.637.313q-1.313.312-2.563.912-.375.2-.587.487-.213.288-.213.638Zm6-7.25q.825 0 1.413-.588Q14 9.2 14 8.375t-.587-1.412q-.588-.588-1.413-.588-.825 0-1.412.588Q10 7.55 10 8.375t.588 1.412q.587.588 1.412.588Zm0-2Zm0 9.25Z" />
                  </svg>
                </div>
              </Link>
            </li>
          )}
          <li>
            <div
              onClick={() => {
                console.log("Hiciste click");
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M3.5 17.275v-1h17v1Zm0-4.775v-1h17v1Zm0-4.775v-1h17v1Z" />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-x-8">
          <li>
            <Link className="menu-item" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/productos">
              Productos
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/carrito">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path d="M6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V8.3q0-.75.525-1.275Q5.55 6.5 6.3 6.5h1.95v-.25q0-1.55 1.1-2.65 1.1-1.1 2.65-1.1 1.55 0 2.65 1.1 1.1 1.1 1.1 2.65v.25h1.95q.75 0 1.275.525.525.525.525 1.275v11.4q0 .75-.525 1.275-.525.525-1.275.525Zm0-1.5h11.4q.1 0 .2-.1t.1-.2V8.3q0-.1-.1-.2t-.2-.1h-1.95v2.25q0 .325-.212.537Q15.325 11 15 11q-.325 0-.537-.213-.213-.212-.213-.537V8h-4.5v2.25q0 .325-.212.537Q9.325 11 9 11q-.325 0-.537-.213-.213-.212-.213-.537V8H6.3q-.1 0-.2.1t-.1.2v11.4q0 .1.1.2t.2.1ZM9.75 6.5h4.5v-.25q0-.95-.65-1.6Q12.95 4 12 4q-.95 0-1.6.65-.65.65-.65 1.6ZM6 20V8v12Z" />
                </svg>
                ({state.cart.length})
              </div>
            </Link>
          </li>

          {!token() ? (
            <li>
              <Link to="/login">
                <button className="btn-primary">Inicia sesión</button>
              </Link>
            </li>
          ) : (
            <>
              {userData?.is_admin && (
                <li>
                  <Link className="menu-item" to="/admin/productos">
                    Administración
                  </Link>
                </li>
              )}
              <li>
                <Link className="menu-item" to="/perfil">
                  Perfil
                </Link>
              </li>
              <li>
                <a onClick={handleSession} className="menu-item cursor-pointer">
                  Cerrar sesión
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
