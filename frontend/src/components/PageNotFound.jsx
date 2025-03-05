import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Page Not Found</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go to Home Page
            </Link>
        </div>
    </div>
);
};

export default PageNotFound;
