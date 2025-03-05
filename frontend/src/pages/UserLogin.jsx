import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import useUserStore from "../stores/UseUserStore";

const UserLogin = () => {
  // const navigate = useNavigate();
  const { login } = useUserStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    login({ email, password });

    // navigate("/home");

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
          <h3 className="text-lg">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-zinc-200 p-2.5 rounded-sm w-full"
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
            className="bg-zinc-200 p-2.5 rounded-sm w-full"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <button className="bg-[#272727] text-white py-2.5 font-medium rounded-sm text-center">
            Login
          </button>
          <p className="text-center">
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
