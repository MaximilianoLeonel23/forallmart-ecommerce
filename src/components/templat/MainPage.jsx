import { Outlet } from "react-router-dom";
import MainHeader from "./../organisms/MainHeader";
import MainMenu from "./../molecules/header/MainMenu";
const MainPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MainHeader>
        <MainMenu />
      </MainHeader>
      <div className="pt-24 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
