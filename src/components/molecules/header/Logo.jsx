import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h4 className="text-lg text-gray-900 font-semibold">Logo</h4>
      </Link>
    </div>
  );
};

export default Logo;
