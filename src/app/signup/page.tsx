"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

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
    </div>
  );
}

export default SignUp;
