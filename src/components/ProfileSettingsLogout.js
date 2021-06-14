import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ProfileSettingsLogout = () => {

  const { logout } = useContext(AuthContext)

  return (
    <div className="fixed right-8 top-14 z-50 flex flex-col bg-white w-52 rounded-xl shadow border">
      <Link className="hover:bg-gray-100 py-3 px-4 rounded-t-xl" to="/account/profile">
        Profile
      </Link>
      <Link className="hover:bg-gray-100 py-3 px-4" to="/account">
        Settings
      </Link>
      <Link 
        onClick={logout}
        className="hover:bg-gray-100 px-4 py-3 rounded-b-xl" 
        to="/">
        Sign Out
      </Link>
    </div>
  )
}

export default ProfileSettingsLogout