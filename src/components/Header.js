import React from "react";
import SideBar from "./SideBar";
import Logo from "../media/logo.png";

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <SideBar className="float-left"/>
            <div className="float-right flex items-center mr-6 mt-4">
                <img src={Logo} alt="Website logo" className="h-[100px]"/>
                <h3 className=" italic font-medium500Italic font-medium">Mykee Flores</h3>
            </div>
        </div>
    )
}

export default Header;