import { Link } from "react-router-dom";
import { token } from "../../helpers/auth";
const MainNavDesktop = ({ state, userData, handleSession }) => {
  return (
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
                <path d="M6.625 21q-.7 0-1.162-.462Q5 20.075 5 19.375V8.625q0-.7.463-1.162Q5.925 7 6.625 7H8.5v-.5q0-1.45 1.025-2.475Q10.55 3 12 3q1.45 0 2.475 1.025Q15.5 5.05 15.5 6.5V7h1.875q.7 0 1.163.463.462.462.462 1.162v10.75q0 .7-.462 1.163-.463.462-1.163.462Zm0-1h10.75q.25 0 .437-.188.188-.187.188-.437V8.625q0-.25-.188-.437Q17.625 8 17.375 8H15.5v2.5q0 .225-.137.363Q15.225 11 15 11q-.225 0-.363-.137-.137-.138-.137-.363V8h-5v2.5q0 .225-.137.363Q9.225 11 9 11q-.225 0-.363-.137-.137-.138-.137-.363V8H6.625q-.25 0-.437.188Q6 8.375 6 8.625v10.75q0 .25.188.437.187.188.437.188ZM9.5 7h5v-.5q0-1.05-.725-1.775Q13.05 4 12 4q-1.05 0-1.775.725Q9.5 5.45 9.5 6.5ZM6 20V8v12Z" />
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

export default MainNavDesktop;
