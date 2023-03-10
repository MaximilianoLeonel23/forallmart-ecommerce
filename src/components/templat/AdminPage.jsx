import { Outlet } from "react-router-dom";
import AdminMenu from "../molecules/header/AdminMenu";
import MainHeader from "./../organisms/MainHeader";
const AdminPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
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