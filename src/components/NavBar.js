import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";


//Displays the side naviagtion menu
const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function that handles the menu visibillity
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className=" z-50">
      //Build Navbar here
    </div>
  );
};

export default SideBar;