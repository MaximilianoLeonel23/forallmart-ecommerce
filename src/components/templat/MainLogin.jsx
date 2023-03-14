const MainLogin = ({ children }) => {
  return (
    <div className="bg-primary-300 min-h-screen">
      <div className="container mx-auto ">
        <div className="flex items-center pt-16">
          <div className="w-1/3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
