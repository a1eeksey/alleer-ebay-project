import React from "react";
import Logo from "./Logo";
import UserProfile from "./UserProfile";

function Header() {
  return (
    <header id="header" className="header px-4 fixed-top d-flex justify-content-between align-items-center">
        <Logo />
        <UserProfile />
    </header>
  );
}

export default Header;
