import AdminAside from "./AdminAside";
import AdminNavDesktop from "./../../atoms/AdminNavDesktop";

const AdminMenu = () => {
  const showAdmin = () => {
    const asideAdmin = document.getElementById("asideAdmin");
    asideAdmin.classList?.toggle("-translate-x-full");
  };

  return (
    <div>
      {/* Menú superior admin mobile */}
      <nav className="block sm:hidden">
        <ul className="flex items-center gap-x-2 fill-gray-800 z-40">
          <li>
            <div onClick={showAdmin}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M3.5 17.275v-1h17v1Zm0-4.775v-1h17v1Zm0-4.775v-1h17v1Z" />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
      {/* Menú desplegable admin mobile */}
      <AdminAside showAdmin={showAdmin} />
      {/* Menú admin desktop */}
      <AdminNavDesktop />
    </div>
  );
};

export default AdminMenu;
