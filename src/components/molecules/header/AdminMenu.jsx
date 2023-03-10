import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-x-8">
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

export default AdminMenu;
