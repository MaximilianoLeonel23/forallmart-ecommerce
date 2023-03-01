import React from "react";

import { Link } from "react-router-dom";
const MainMenu = () => {
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
      </ul>
    </nav>
  );
};

export default MainMenu;
