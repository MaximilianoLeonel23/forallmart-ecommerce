const MainLogin = ({ children }) => {
  return (
    <div className="bg-primary-200 min-h-screen">
      <div className="container mx-auto ">
        <div className="flex items-center pt-12 sm:pt-16">
          <div className="w-full sm:w-1/3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
