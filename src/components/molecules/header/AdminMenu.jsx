import { Link } from "react-router-dom";
import AdminAside from "./AdminAside";

const AdminMenu = () => {
  const asideAdmin = document.getElementById("asideAdmin");

  return (
    <div>
      {/* Menú superior admin mobile */}
      <nav className="block sm:hidden">
        <ul className="flex items-center gap-x-2 fill-gray-800">
          <li>
            <div
              onClick={() => {
                asideAdmin?.classList?.toggle("-translate-x-full");
                
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M3.5 17.275v-1h17v1Zm0-4.775v-1h17v1Zm0-4.775v-1h17v1Z" />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
      {/* Menú desplegable admin mobile */}
      <AdminAside aside={asideAdmin} />
      {/* Menú admin desktop */}
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
    </div>
  );
};

export default AdminMenu;
