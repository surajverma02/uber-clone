import React, { useRef, useState } from "react";
import DriverDetail from "../components/DriverDetail";
import Logo from "../components/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PayDetail from "../components/PayDetail";

const Riding = () => {
  const [payDetail, setPayDetail] = useState(true);
  const payDetailRef = useRef(null);

  useGSAP(() => {
    payDetail
      ? gsap.to(payDetailRef.current, {
          bottom: "0%",
        })
      : gsap.to(payDetailRef.current, {
          bottom: "-30%",
        });
  }, [payDetail]);

  return (
    <section>
      <Logo />
      {/* Map Container */}
      <div className="h-screen w-screen ">
        <img
          className="w-full h-full object-cover"
          src="/ubermap.png"
          alt="ubermap"
        />
      </div>

      <div ref={payDetailRef} className="z-20 w-screen absolute bottom-0">
        <PayDetail setPayDetail={setPayDetail} />
      </div>
    </section>
  );
};

export default Riding;
