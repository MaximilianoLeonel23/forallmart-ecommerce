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
    <nav>
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
  );
};

export default MainMenu;
