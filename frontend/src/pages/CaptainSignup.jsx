import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`email: ${email}, password: ${password}, name: ${name}`);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Link to="/">
        <div className="h-20 pl-5 pt-8 absolute w-full">
          <img className="h-[100%]" src="/uber.png" alt="Uber" />
        </div>
      </Link>
      <form
        onSubmit={submitHandler}
        className="flex flex-col p-6 gap-4 justify-center h-screen"
      >
        <div className="gap-1 flex flex-col">
          <h3 className="text-lg">What's your name</h3>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-zinc-200 p-2.5 rounded-lg w-full"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <h3 className="text-lg">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-zinc-200 p-2.5 rounded-lg w-full"
            type="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <h3 className="text-lg">Enter your password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-zinc-200 p-2.5 rounded-lg w-full"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <button className="bg-black text-white py-3 font-medium rounded-lg text-center">
            Create Account
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-800">
              Login
            </Link>
          </p>
        </div>
        <hr className="text-zinc-600" />
        <Link
          to="/signup"
          className="bg-[#FF9D23] text-white py-3 font-medium rounded-lg text-center"
        >
          Sign up as User
        </Link>
      </form>
    </div>
  );
};

export default CaptainSignup;
