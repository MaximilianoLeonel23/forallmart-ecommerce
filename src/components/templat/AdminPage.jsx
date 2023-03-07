import { Outlet } from "react-router-dom";
import AdminMenu from "../molecules/header/AdminMenu";
import MainHeader from "./../organisms/MainHeader";
const AdminPage = () => {
  return (
    <div>
      <MainHeader>
        <AdminMenu/>
      </MainHeader>
      <div className="pt-16 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;