import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center pt-24 text-gray-800">
          <div className="flex items-center gap-x-4 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h1 className="text-lg font-semibold">Error 404</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>

          <p className="text-center sm:text-left text-sm sm:text-base">
            Vuelva a la{" "}
            <Link to="/" className="text-primary-500 underline">
              página principal
            </Link>{" "}
            e intentelo de nuevo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
