import { Outlet } from "react-router-dom";
import MainHeader from "./../organisms/MainHeader";
const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <div className="pt-16 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
