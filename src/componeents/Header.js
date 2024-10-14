import React from "react";
import SideBar from "./SideBar";
import Logo from "../media/logo.png";

const Header = () => {
    return (
        <div className="flex flex-row">
            <h3>Mykee Flores</h3>
            <img src={Logo} alt="Website logo" className="h-[100px]"/>
            <SideBar />
        </div>
    )
}

export default Header