import { Link } from "react-router-dom";

const AdminAside = ({ asideAdmin }) => {
  return (
    <aside
      id="asideAdmin"
      className="sm:hidden absolute top-12 left-0 border-t z-10 w-2/3 -translate-x-full transition"
    >
      <nav className="container min-h-screen bg-white">
        <ul className="flex flex-col gap-y-6 pt-4 fill-gray-700 text-gray-700">
          <li
            className="flex items-center gap-x-2"
            onClick={() => {
              asideAdmin?.classList?.toggle("-translate-x-full");
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9.625 18.5v-1H20v1Zm0-6v-1H20v1Zm0-6v-1H20v1Zm-4.3 12.825q-.55 0-.937-.387Q4 18.55 4 18q0-.55.388-.938.387-.387.937-.387t.938.387q.387.388.387.938 0 .55-.387.938-.388.387-.938.387Zm0-6q-.55 0-.937-.387Q4 12.55 4 12q0-.55.388-.938.387-.387.937-.387t.938.387q.387.388.387.938 0 .55-.387.938-.388.387-.938.387Zm0-6q-.55 0-.937-.387Q4 6.55 4 6q0-.55.388-.938.387-.387.937-.387t.938.387q.387.388.387.938 0 .55-.387.938-.388.387-.938.387Z"/></svg>

            <Link className="menu-item" to="/admin/productos">
              Productos
            </Link>
          </li>
          <li
            className="flex items-center gap-x-2"
            onClick={() => {
              asideAdmin?.classList?.toggle("-translate-x-full");
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M13.55 20.7q-.275.3-.7.3-.425 0-.725-.3l-8.8-8.8q-.15-.15-.237-.338Q3 11.375 3 11.15V4q0-.4.3-.7.3-.3.7-.3h7.15q.2 0 .388.075.187.075.337.225l8.8 8.8q.3.3.313.737.012.438-.288.713Zm-.725-.7L20 12.85 11.15 4H4v7.15ZM6.5 7.5q.425 0 .713-.287.287-.288.287-.713t-.287-.713Q6.925 5.5 6.5 5.5t-.713.287Q5.5 6.075 5.5 6.5t.287.713q.288.287.713.287ZM4 4Z" />
            </svg>
            <Link className="menu-item" to="/ventas">
              Ventas
            </Link>
          </li>
          <li
            className="flex items-center gap-x-2"
            onClick={() => {
              asideAdmin?.classList?.toggle("-translate-x-full");
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M12 19.225 4.775 12 12 4.775l.725.7L6.7 11.5h12.525v1H6.7l6.025 6.025Z" />
            </svg>
            <Link className="menu-item" to="/">
              Regresar
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminAside;
