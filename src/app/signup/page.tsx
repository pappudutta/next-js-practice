"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function SignUp() {
  // const router = useRouter;
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/signup", user);
      console.log(response.data);
      // router.push("/login ");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      // toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-yellow-600">{loading ? "Loading..." : "Sign Up"}</h1>
      <hr />
      <label htmlFor="username" className="py-2">
        User Name
      </label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={e => setUser({ ...user, username: e.target.value })}
        placeholder="Jhon Cena"
        className="text-sm text-black px-3 py-1.5 rounded-2xl focus:outline-none"
      />
      <label htmlFor="email" className="py-2">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
        placeholder="jhon@yourmail.com"
        className="text-sm text-black px-3 py-1.5 rounded-2xl focus:outline-none"
      />
      <label htmlFor="password" className="py-2">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
        placeholder="Password@123"
        className="text-sm text-black px-3 py-1.5 rounded-2xl focus:outline-none"
      />
      {buttonDisabled ? (
        <button
          onClick={onSignup}
          className="bg-blue-600 py-1.5 px-6 my-4 rounded-2xl text-sm hover:bg-blue-500 focus:outline-sky-300"
        >
          Sign Up
        </button>
      ) : (
        <button
          disabled
          className="bg-blue-200 py-1.5 px-6 my-4 rounded-2xl text-sm  focus:outline-sky-300"
        >
          Sign Up
        </button>
      )}
      <div className="text-xs py-4">
        <span>Already SignUp? </span>
        <Link href="/login" className="text-blue-600 hover:text-blue-700">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
