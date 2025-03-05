import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import useUserStore from "../stores/UseUserStore";
import Logo from "../components/Logo";

const UserSignUp = () => {
  const { register } = useUserStore();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    register({
      fullname: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      email: formData.email,
      password: formData.password,
    });

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <Logo />
      <form
        onSubmit={submitHandler}
        className="flex flex-col p-6 gap-4 justify-center h-screen"
      >
        <div className="gap-1 flex flex-col">
          <h3 className="text-lg">What's your name</h3>
          <div className="flex gap-3">
            <input
              value={formData.firstname}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstname: e.target.value,
                })
              }
              className="bg-zinc-200 p-2.5 rounded-sm w-full text-sm"
              type="text"
              placeholder="First name"
              required
            />
            <input
              value={formData.lastname}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lastname: e.target.value,
                })
              }
              className="bg-zinc-200 p-2.5 rounded-sm w-full text-sm"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="gap-1 flex flex-col">
          <h3 className="text-lg">What's your email</h3>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-zinc-200 p-2.5 rounded-sm w-full text-sm"
            type="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <h3 className="text-lg">Enter your password</h3>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="bg-zinc-200 p-2.5 rounded-sm w-full text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <button className="bg-black text-white py-2.5 font-medium rounded-sm text-center">
            Create User Account
          </button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-800">
              Login
            </Link>
          </p>
        </div>

        <p className="text-xs text-zinc-500 absolute bottom-5">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline font-medium">Google Privacy Policy</span>{" "}
          and{" "}
          <span className="underline font-medium">Terms of Service apply</span>.
        </p>
      </form>
    </div>
  );
};

export default UserSignUp;
