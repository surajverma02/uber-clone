import React from "react";

const LocationSearchPanel = ({ setVehiclePanel, setPanelOpen }) => {
  const locations = [
    "C-45, Shiv Nagar, Tilak Nagar, New Delhi",
    "B-345, Shiv Vihar, Uttam Nagar, New Delhi",
    "458-5/A, Kailash Vihar, Ramesh Nagar, New Delhi",
  ];

  return (
    <div className="p-5 flex flex-col gap-5">
      {locations.map((location, idx) => {
        return (
          <div
            onClick={() => {
              setVehiclePanel(true);
              setPanelOpen(false);
            }}
            key={idx}
            className="p-2 rounded-lg flex items-center gap-4 border-2 border-white active:border-black"
          >
            <span className="rounded-full bg-[#eee] flex justify-center items-center h-10 w-12">
              <i className="text-md ri-map-pin-fill"></i> 
            </span>
            <h4 className="font-medium leading-5">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
