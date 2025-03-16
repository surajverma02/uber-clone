import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Logo from "../components/Logo";
import useUserStore from "../stores/UseUserStore";
import LocationSearchPanel from "../components/LocationSearchPanel";
import ChooseVehicle from "../components/ChooseVehicle";
import ConfirmRide from "../components/ConfirmRide";
import LookingVehicle from "../components/LookingVehicle";
import DriverDetail from "../components/DriverDetail";

const Home = () => {
  const { authUser } = useUserStore();

  const [destination, setDestination] = useState("");
  const [destinationInput, setDestinationInput] = useState(false);
  const destinationRef = useRef(null);

  const [pickup, setPickup] = useState("");
  const [pickupInput, setPickupInput] = useState(false);
  const pickupRef = useRef(null);

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmRide, setConfirmRide] = useState(false);
  const confirmRideRef = useRef(null);

  const [vehicleSearch, setVehicleSearch] = useState(false);
  const vehicleSearchRef = useRef(null);

  const [driverSearch, setDriverSearch] = useState(false);
  const driverSearchRef = useRef(null);

  useGSAP(() => {
    pickupInput
      ? gsap.to(pickupRef.current, {
          borderColor: "#000",
        })
      : gsap.to(pickupRef.current, {
          borderColor: "#fff",
        });
  }, [pickupInput]);

  useGSAP(() => {
    destinationInput
      ? gsap.to(destinationRef.current, {
          borderColor: "#000",
        })
      : gsap.to(destinationRef.current, {
          borderColor: "#fff",
        });
  }, [destinationInput]);

  useGSAP(() => {
    panelOpen
      ? gsap.to(panelRef.current, {
          height: "100%",
        })
      : gsap.to(panelRef.current, {
          height: "0",
        });
  }, [panelOpen]);

  useGSAP(() => {
    vehiclePanel
      ? gsap.to(vehiclePanelRef.current, {
          bottom: 0,
          display: "block",
          autoAlpha: 1,
        })
      : gsap.to(vehiclePanelRef.current, {
          bottom: "-100%",
          display: "none",
          autoAlpha: 0,
        });
  }, [vehiclePanel]);

  useGSAP(() => {
    confirmRide
      ? gsap.to(confirmRideRef.current, {
          bottom: 0,
          display: "block",
          autoAlpha: 1,
        })
      : gsap.to(confirmRideRef.current, {
          bottom: "-100%",
          display: "none",
          autoAlpha: 0,
        });
  }, [confirmRide]);

  useGSAP(() => {
    vehicleSearch
      ? gsap.to(vehicleSearchRef.current, {
          bottom: 0,
          display: "block",
          autoAlpha: 1,
        })
      : gsap.to(vehicleSearchRef.current, {
          bottom: "-100%",
          display: "none",
          autoAlpha: 0,
        });
  }, [vehicleSearch]);

  useGSAP(() => {
    driverSearch
      ? gsap.to(driverSearchRef.current, {
          bottom: 0,
          display: "block",
          autoAlpha: 1,
        })
      : gsap.to(driverSearchRef.current, {
          bottom: "-100%",
          display: "none",
          autoAlpha: 0,
        });
  }, [driverSearch]);

  if (authUser)
    return (
      <section>
        <Logo />
        <section className="h-screen w-screen">
          {/* Map Container */}
          <div className="h-screen w-screen ">
            <img
              className="w-full h-full object-cover"
              src="/ubermap.png"
              alt="ubermap"
            />
          </div>

          {/* Form container */}
          <div className="flex flex-col justify-end h-screen w-screen absolute bottom-0 overflow-hidden">
            {/* Form for pickup and destination */}
            <div className="bg-white flex flex-col gap-3 px-5 py-8">
              {panelOpen ? (
                <h3 onClick={() => setPanelOpen(false)} className="text-center">
                  <i className=" text-lg ri-arrow-down-wide-line"></i>
                </h3>
              ) : (
                <h3 className="font-semibold text-2xl mb-2">Find a trip</h3>
              )}

              <div
                ref={pickupRef}
                className="flex gap-4 pl-3 items-center w-full bg-[#eee] border-2 rounded-lg border-white"
              >
                <span>
                  <i className="text-xs ri-circle-line"></i>
                </span>
                <input
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  onMouseEnter={() => setPickupInput(true)}
                  onMouseOut={() => setPickupInput(false)}
                  onClick={() => setPanelOpen(true)}
                  type="text"
                  className="w-full p-2.5 outline-none"
                  placeholder="Add a pick-up location"
                />
              </div>

              <div
                ref={destinationRef}
                className="flex gap-4 pl-3 items-center w-full bg-[#eee] border-2 rounded-lg border-white"
              >
                <span>
                  <i className="text-xs ri-square-line"></i>
                </span>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onMouseEnter={() => setDestinationInput(true)}
                  onMouseOut={() => setDestinationInput(false)}
                  onClick={() => setPanelOpen(true)}
                  type="text"
                  className="w-full p-2.5 outline-none"
                  placeholder="Enter destination location"
                />
              </div>
            </div>

            {/* Select locations panel */}
            <div ref={panelRef} className="h-0 bg-white">
              <LocationSearchPanel
                setVehiclePanel={setVehiclePanel}
                setPanelOpen={setPanelOpen}
              />
            </div>
          </div>

          {/* Choose vehicle panel */}
          <div
            ref={vehiclePanelRef}
            className="z-10 w-screen absolute -bottom-full"
          >
            <ChooseVehicle
              setConfirmRide={setConfirmRide}
              setVehiclePanel={setVehiclePanel}
            />
          </div>

          {/* Confirm your ride  */}
          <div
            ref={confirmRideRef}
            className="z-10 w-screen absolute -bottom-full"
          >
            <ConfirmRide
              setConfirmRide={setConfirmRide}
              setVehicleSearch={setVehicleSearch}
            />
          </div>

          {/* Looking for vehicles  */}
          <div
            ref={vehicleSearchRef}
            className="z-10 w-screen absolute -bottom-full"
          >
            <LookingVehicle
              setVehicleSearch={setVehicleSearch}
              setDriverSearch={setDriverSearch}
            />
          </div>

          {/* Waiting for driver  */}
          <div
            ref={driverSearchRef}
            className="z-20 w-screen absolute -bottom-full"
          >
            <DriverDetail setDriverSearch={setDriverSearch} />
          </div>
        </section>
      </section>
    );
};

export default Home;
