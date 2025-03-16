import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Logo from "../components/Logo";
import useUserStore from "../stores/UseUserStore";
import LocationSearchPanel from "../components/LocationSearchPanel";

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
          autoAlpha: 1
        })
      : gsap.to(vehiclePanelRef.current, {
          bottom: "-100%",
          display: "none",
          autoAlpha: 0
        });
  }, [vehiclePanel]);

  useGSAP(() => {
    confirmRide
      ? gsap.to(confirmRideRef.current, {
          bottom: 0,
          display: "block",
          autoAlpha: 1
        })
      : gsap.to(confirmRideRef.current, {
          bottom: "-100%",
          display: "none",
          autoAlpha: 0
        });
  }, [confirmRide]);

  useGSAP(() => {
    vehicleSearch
      ? gsap.to(vehicleSearchRef.current, {
          bottom: 0,
          display: "block",
          autoAlpha: 1
        })
      : gsap.to(vehicleSearchRef.current, {
          bottom: "-100%",
          display: "none",
          autoAlpha: 0
        });
  }, [vehicleSearch]);

  useGSAP(() => {
    driverSearch
      ? gsap.to(driverSearchRef.current, {
          bottom: 0,
          display: "block",
          autoAlpha: 1
        })
      : gsap.to(driverSearchRef.current, {
          bottom: "-100%",
          display: "none",
          autoAlpha: 0
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
            <div className="bg-white flex flex-col gap-4 px-5 py-8">
              <h3
                onClick={() => setVehiclePanel(false)}
                className="text-center"
              >
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
                  <h2 className="text-xs text-zinc-600">
                    Comfortable, compact rides
                  </h2>
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
                  <h2 className="text-xs text-zinc-600">
                    Affordable motorcycle rides
                  </h2>
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
                  <h2 className="text-xs text-zinc-600">
                    Affordable auto rides
                  </h2>
                </div>
                <h3 className="font-semibold text-lg">₹98.10</h3>
              </div>
            </div>
          </div>

          {/* Confirm your ride  */}
          <div
            ref={confirmRideRef}
            className="z-10 w-screen absolute -bottom-full"
          >
            <div className="bg-white flex flex-col gap-2 px-5 py-4">
              <h3 onClick={() => setConfirmRide(false)} className="text-center">
                <i className="text-lg ri-arrow-down-wide-line"></i>
              </h3>
              <h3 className="text-center font-semibold text-xl mb-2">
                Confirm your ride
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
                  setVehicleSearch(true);
                  setConfirmRide(false);
                }}
                className="bg-[#5CB338] text-white py-2.5 font-medium rounded-sm text-center"
              >
                Confirm ride
              </button>
            </div>
          </div>

          {/* Looking for vehicles  */}
          <div
            ref={vehicleSearchRef}
            className="z-10 w-screen absolute -bottom-full"
          >
            <div className="bg-white flex flex-col gap-2 px-5 py-4">
              <h3
                onClick={() => setVehicleSearch(false)}
                className="text-center"
              >
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
          </div>

          {/* Waiting for driver  */}
          <div
            ref={driverSearchRef}
            className="z-20 w-screen absolute -bottom-full"
          >
            <div className="bg-white flex flex-col gap-2 px-5 py-4">
              <h3
                onClick={() => setDriverSearch(false)}
                className="text-center"
              >
                <i className="text-lg ri-arrow-down-wide-line"></i>
              </h3>

              <h3 className="text-left font-semibold text-xl mb-2">
                Meet at the Pickup point
              </h3>

              <hr className="text-zinc-400" />

              <div className="w-full flex justify-between items-center py-6">
                <img src="/ubercar.jpg" alt="uber" className="h-16 rounded-full" />
                <div className="flex flex-col items-end">
                  <h2 className="text-zinc-600">SANTH</h2>
                  <h3 className="text-2xl font-bold">KA15AK00-0</h3>
                  <h3 className="text-zinc-600">White Maruti Suzuki LXI</h3>
                </div>
              </div>

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
            </div>
          </div>

        </section>
      </section>
    );
};

export default Home;
