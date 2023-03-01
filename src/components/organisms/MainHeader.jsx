import MainMenu from "../molecules/header/MainMenu";
import Logo from "../molecules/header/Logo";
const MainHeader = () => {
  return (
    <div className="fixed w-full border border-b-gray-200 bg-white z-20">
      <div className="container flex justify-between items-center mx-auto py-4">
        <Logo />
        <MainMenu />
      </div>
    </div>
  );
};

export default MainHeader;
