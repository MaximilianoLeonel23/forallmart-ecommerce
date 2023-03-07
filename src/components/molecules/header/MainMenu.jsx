import { useNavigate, Link } from "react-router-dom";
import { deleteToken, token } from "./../../../helpers/auth";
const MainMenu = () => {
  const nav = useNavigate();

  const handleSession = () => {
    deleteToken();
    nav("/");
  };

  return (
    <nav>
      <ul className="flex items-center">
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

        {!token() ? (
          <li>
            <Link className="menu-item" to="/login">
              Iniciar sesión
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link className="menu-item" to="/admin/productos">
                Administración
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
