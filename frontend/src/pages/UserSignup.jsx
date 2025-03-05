import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import useUserStore from "../stores/UseUserStore";

const UserSignUp = () => {
  // const navigate = useNavigate();
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
          <div className="flex gap-3">
            <input
              value={formData.firstname}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstname: e.target.value,
                })
              }
              className="bg-zinc-200 p-2.5 rounded-sm w-full"
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
              className="bg-zinc-200 p-2.5 rounded-sm w-full"
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
            className="bg-zinc-200 p-2.5 rounded-sm w-full"
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
            className="bg-zinc-200 p-2.5 rounded-sm w-full"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="gap-1 flex flex-col">
          <button className="bg-black text-white py-2.5 font-medium rounded-sm text-center">
            Create Account
          </button>
          <p className="text-center">
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
