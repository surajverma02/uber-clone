import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../stores/UseUserStore";
import Logo from "../components/Logo";

const UserLogin = () => {
  const { login } = useUserStore();
  
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
            New here?{" "}
            <Link to="/signup" className="text-blue-800">
              Create new account
            </Link>
          </p>
        </div>
        <Link
          to="/captain-login"
          className="w-[85%] bg-[#16C47F] text-white py-2.5 font-medium rounded-sm text-center absolute bottom-6 justify-items-center"
        >
          Sign in as Captain
        </Link>
      </form>
    </div>
  );
};

export default UserLogin;
