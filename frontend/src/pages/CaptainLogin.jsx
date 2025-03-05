import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCaptainStore from "../stores/UseCaptainStore";
import Logo from "../components/Logo";

const CaptainLogin = () => {
  const { login } = useCaptainStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    login({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Logo />
      <form
        onSubmit={submitHandler}
        className="flex flex-col p-6 gap-4 justify-center h-screen"
      >
        <div className="gap-1 flex flex-col">
          <h3 className="text-lg">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-zinc-200 p-2.5 rounded-sm w-full text-sm"
            type="text"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <h3 className="text-lg">Enter your password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-zinc-200 p-2.5 rounded-sm w-full text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <button className="bg-[#272727] text-white py-2.5 font-medium rounded-sm text-center">
            Login
          </button>
          <p className="text-center text-sm">
            Join us?{" "}
            <Link to="/captain-signup" className="text-blue-800">
              Create captain account
            </Link>
          </p>
        </div>
        <Link
          to="/login"
          className="w-[85%] bg-[#FF9D23] text-white py-2.5 font-medium rounded-sm text-center absolute bottom-6 justify-items-center"
        >
          Sign in as User
        </Link>
      </form>
    </div>
  );
};

export default CaptainLogin;
