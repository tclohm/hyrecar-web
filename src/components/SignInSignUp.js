import React from "react";
import { Link } from "react-router-dom";

const SigninSignup = () => {

  return (
    <div className="fixed right-8 top-14 z-50 flex flex-col bg-white w-52 rounded shadow-lg">
      <Link className="py-3 px-4 hover:bg-gray-100 rounded-t" to="/login">
        Sign in
      </Link>
      <Link 
        className="bg-yellow-300 hover:bg-yellow-400 text-white font-medium px-4 py-3 rounded-b" 
        to="/signup">
        Sign up
      </Link>
    </div>
  )
}

export default SigninSignup