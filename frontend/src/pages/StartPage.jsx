import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div>
      <div className="h-screen flex justify-between flex-col w-full bg-[url(/hero.jpg)] bg-cover bg-center shadow-lg">
        <Link to="/">
          <div className="h-20 pl-5 pt-8 absolute w-full">
            <img className="h-[100%]" src="/uber.png" alt="Uber" />
          </div>
        </Link>
        <div className="bg-white p-5 flex flex-col gap-8">
          <h2 className="font-semibold text-2xl">Get Started with Uber</h2>
          <Link
            to="/login"
            className="bg-black text-white py-3 text-lg font-medium rounded-lg text-center"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
