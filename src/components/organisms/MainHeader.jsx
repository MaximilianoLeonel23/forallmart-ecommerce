import Logo from "../molecules/header/Logo";
const MainHeader = ({ children }) => {
  return (
    <div className="fixed w-full border-b border-b-gray-200 bg-white z-20">
      <div className="container flex justify-between items-center mx-auto h-12 sm:h-16">
        <Logo />
        {children}
      </div>
    </div>
  );
};

export default MainHeader;
