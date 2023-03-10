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
            Carrito({state.cart.length})
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
