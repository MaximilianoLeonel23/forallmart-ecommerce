import { Link } from "react-router-dom";

const AdminNavDesktop = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-x-6">
        <li>
          <Link className="menu-item" to="/admin/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/admin/ventas">
            Ventas
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/">
            Volver a la app
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavDesktop;
