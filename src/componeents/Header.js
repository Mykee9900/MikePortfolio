import React from "react";
import SideBar from "./SideBar";
import Logo from "../media/logo.png";

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <SideBar className="float-left"/>
            <div className="float-right flex items-center">
                <img src={Logo} alt="Website logo" className="h-[100px]"/>
                <h3>Mykee Flores</h3>
            </div>
        </div>
    )
}

export default Header;