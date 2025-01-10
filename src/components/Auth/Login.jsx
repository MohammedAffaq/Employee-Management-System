import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-8 sm:p-10 md:p-14 lg:p-20 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center w-full"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full max-w-xs md:max-w-md outline-none bg-transparent border-2 border-emerald-600 text-base sm:text-lg md:text-xl py-2 sm:py-3 px-4 sm:px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full max-w-xs md:max-w-md outline-none bg-transparent border-2 border-emerald-600 text-base sm:text-lg md:text-xl py-2 sm:py-3 px-4 sm:px-5 rounded-full mt-4 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="text-white outline-none border-none bg-emerald-600 text-sm sm:text-base md:text-lg py-2 px-6 sm:px-8 mt-6 rounded-full font-semibold hover:bg-emerald-700 transition duration-300 ease-in-out">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
