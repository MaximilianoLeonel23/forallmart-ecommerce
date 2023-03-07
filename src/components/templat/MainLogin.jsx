const MainLogin = ({ children, title }) => {
  return (
    <div className="container mx-auto">
      <div className="pt-16">
        <div className="py-4">
          <h1 className="font-semibold text-lg text-gray-700 text-center">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLogin;
