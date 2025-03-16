import React from "react";

const ChooseVehicle = ({ setConfirmRide, setVehiclePanel }) => {
  return (
    <div className="bg-white flex flex-col gap-4 px-5 py-8">
      <h3 onClick={() => setVehiclePanel(false)} className="text-center">
        <i className="text-lg ri-arrow-down-wide-line"></i>
      </h3>
      <h3 className="font-semibold text-2xl mb-2">Choose a vehicle</h3>

      <div
        onClick={() => {
          setConfirmRide(true);
          setVehiclePanel(false);
        }}
        className="flex p-1 border-2 border-white active:border-black rounded-lg"
      >
        <img className="h-12 mr-4" src="/ubercar.jpg" alt="ubercar" />
        <div className="flex flex-col mr-3 leading-1 w-[50%]">
          <div className="flex items-center gap-2">
            <h2 className="font-medium">UberGo</h2>
            <span className="text-xs">
              <i className="ri-user-fill"></i> 4
            </span>
          </div>
          <h2 className="text-xs text-zinc-600">2 min away</h2>
          <h2 className="text-xs text-zinc-600">Comfortable, compact rides</h2>
        </div>
        <h3 className="font-semibold text-lg">₹158.60</h3>
      </div>

      <div
        onClick={() => {
          setConfirmRide(true);
          setVehiclePanel(false);
        }}
        className="flex p-1 border-2 border-white active:border-black rounded-lg"
      >
        <img className="h-12 mr-4" src="/ubermoto.jpg" alt="ubercar" />
        <div className="flex flex-col mr-3 leading-1 w-[50%]">
          <div className="flex items-center gap-2">
            <h2 className="font-medium">Moto</h2>
            <span className="text-xs">
              <i className="ri-user-fill"></i> 1
            </span>
          </div>
          <h2 className="text-xs text-zinc-600">2 min away</h2>
          <h2 className="text-xs text-zinc-600">Affordable motorcycle rides</h2>
        </div>
        <h3 className="font-semibold text-lg">₹76</h3>
      </div>

      <div
        onClick={() => {
          setConfirmRide(true);
          setVehiclePanel(false);
        }}
        className="flex p-1 border-2 border-white active:border-black rounded-lg"
      >
        <img className="h-12 mr-4" src="/uberauto.jpg" alt="ubercar" />
        <div className="flex flex-col mr-3 leading-1 w-[50%]">
          <div className="flex items-center gap-2">
            <h2 className="font-medium">UberAuto</h2>
            <span className="text-xs">
              <i className="ri-user-fill"></i> 3
            </span>
          </div>
          <h2 className="text-xs text-zinc-600">2 min away</h2>
          <h2 className="text-xs text-zinc-600">Affordable auto rides</h2>
        </div>
        <h3 className="font-semibold text-lg">₹98.10</h3>
      </div>
    </div>
  );
};

export default ChooseVehicle;
