const Loading = () => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <div className="animate-pulse-slow h-4 w-4 bg-primary-500 rounded-full"></div>
      <div className="animate-pulse-slow h-4 w-4 bg-primary-500 rounded-full"></div>
      <div className="animate-pulse-slow h-4 w-4 bg-primary-500 rounded-full"></div>
    </div>
  );
};

export default Loading;
