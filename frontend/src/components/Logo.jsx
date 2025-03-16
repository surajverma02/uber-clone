import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="h-22 pl-5 mt-3 absolute w-full">
        <img className="h-[100%]" src="/uberlogo.svg" alt="Uber" />
      </div>
    </Link>
  );
};

export default Logo;
