import React from "react";
import { Link } from "react-router-dom";

const RideDetail = ({ driverSearch, setDriverSearch }) => {
  return (
    <div className="z-50 rounded-full absolute right-1 top-10 text-right flex gap-1 items-center">
      <Link
        onClick={() => {
          setDriverSearch(true);
        }}
        to="/riding"
        className="bg-white flex gap-1 items-center rounded-full px-2 py-1"
      >
        <i className="ri-car-fill text-zinc-600"></i>
        <span className="text-xs font-semibold text-zinc-600">Ride</span>
      </Link>
      <div
        onClick={() => {
          setDriverSearch(!driverSearch);
        }}
        className="bg-white flex gap-1 items-center rounded-full px-2 py-1"
      >
        <i className="ri-shield-user-fill text-zinc-600"></i>
        <span className="text-xs font-semibold text-zinc-600">Driver</span>
      </div>
    </div>
  );
};

export default RideDetail;
