import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img src="/public/assets/undraw_Page_not_found_re_e9o6.png" alt="404 Not Found" className="w-1/4 h-auto mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={goHome}
        className="bg-indigo-500 text-white px-4 py-2 rounded"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
