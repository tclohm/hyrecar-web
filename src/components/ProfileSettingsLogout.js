import React from "react";
import { Link } from "react-router-dom";

const ProfileSettingsLogout = () => {

  return (
    <div className="fixed right-8 top-14 z-50 flex flex-col bg-white w-52 rounded-xl shadow border">
      <Link className="hover:bg-gray-100 py-3 px-4 rounded-t-xl" to="/profile">
        Profile
      </Link>
      <Link className="hover:bg-gray-100 py-3 px-4" to="/account/settings">
        Settings
      </Link>
      <Link 
        className="hover:bg-gray-100 px-4 py-3 rounded-b-xl" 
        to="/">
        Sign Out
      </Link>
    </div>
  )
}

export default ProfileSettingsLogout