import React from "react";
import { useState } from "react";
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

import UserDropdown from "./UserDropdown";

//icon
import arrowDown from "../../assets/icons/arrowDown.svg"
import userSquare from "../../assets/icons/userSquare.svg"

function UserProfile() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const [dropdownOpen, setdropdownOpen] = useState(false)

    const handleClick = () => {
      logout()
    }

    return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="user-profile_container d-flex">
        <div onClick={() => setdropdownOpen((prev) => !prev)} className="user-profile d-flex">
          <h6 className="my-0">User</h6>
          <img src={arrowDown} alt="" />
        </div>
        {dropdownOpen && <UserDropdown userName={user.given_name || user.name ? user.given_name || user.name : 'User'} userPicture={user.picture ? user.picture : userSquare} userEmail={user.email} handleClick={handleClick}/> }
      </div>
    </div>

    );
}

export default UserProfile;
