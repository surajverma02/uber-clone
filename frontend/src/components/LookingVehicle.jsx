import React from "react";

const LookingVehicle = ({ setVehicleSearch, setDriverSearch }) => {
  return (
    <div className="bg-white flex flex-col gap-2 px-5 py-4">
      <h3 onClick={() => setVehicleSearch(false)} className="text-center">
        <i className="text-lg ri-arrow-down-wide-line"></i>
      </h3>
      <h3 className="text-center font-semibold text-xl mb-2">
        Looking for a driver
      </h3>
      <div className="w-full flex justify-center py-6">
        <img className="h-20 " src="/ubercar.jpg" alt="ubercar" />
      </div>

      <hr className="text-zinc-400" />

      <div className="flex gap-4 p-1 items-center">
        <h3>
          <i className="ri-map-pin-3-fill"></i>
        </h3>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-lg">592/11-A</h3>
          <p className="leading-5 text-zinc-600">
            Kailash Vihar, Ramesh Nagar, New Delhi
          </p>
        </div>
      </div>

      <hr className="text-zinc-400" />

      <div className="flex gap-4 p-1 items-center">
        <h3>
          <i className="ri-square-fill"></i>
        </h3>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-lg">Third wave coffee</h3>
          <p className="leading-5 text-zinc-600">
            5, Shiv Vihar,Kailash Vihar, Ramesh Nagar, New Delhi
          </p>
        </div>
      </div>

      <hr className="text-zinc-400" />

      <div className="flex gap-4 p-1 items-center">
        <h3>
          <i className="ri-bank-card-fill"></i>
        </h3>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-lg">₹193.20</h3>
          <p className="leading-5 text-zinc-600">Cash Cash</p>
        </div>
      </div>

      <button
        onClick={() => {
          setVehicleSearch(false);
          setDriverSearch(true);
        }}
        className="bg-[#5CB338] text-white py-2.5 font-medium rounded-sm text-center"
      >
        Driver Details
      </button>
    </div>
  );
};

export default LookingVehicle;
