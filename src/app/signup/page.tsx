"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-yellow-600">Sign Up</h1>
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
      <button
        onClick={onSignup}
        className="bg-blue-600 py-1.5 px-6 my-4 rounded-2xl text-sm hover:bg-blue-500 focus:outline-sky-300"
      >
        Sign Up
      </button>
      <div className="text-xs">
        <span>Already SignUp? </span>
        <Link href="/login" className="text-blue-600 hover:text-blue-700">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
