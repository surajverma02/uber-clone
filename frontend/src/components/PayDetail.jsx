import React from "react";

const PayDetail = ({ setPayDetail }) => {
  return (
    <div className="bg-white flex flex-col gap-2 px-5 py-6">

      <h3 onClick={() => setPayDetail(false)} className="text-center">
        <i className="text-lg ri-arrow-down-wide-line"></i>
      </h3>

      <h3 onClick={() => setPayDetail(true)} className="text-center">
        <i className="text-lg ri-arrow-up-wide-line"></i>
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
    </div>
  );
};

export default PayDetail;
