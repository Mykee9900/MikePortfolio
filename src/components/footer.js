import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="flex justify-around items-center w-full h-[50px] bg-gray-500">
            <p className="text-xs sm:text-base md:text-l">Made with ❤️ in TX 2022 Mykee Flores</p>
            <span>
                <Link to="/contact" className="text-xs sm:text-base md:text-l transition ease-in-out delay-150 hover:bg-blue-500 hover:-translate-y-1 p-1 hover:scale-110 duration-500">
                    Contact Me
                </Link>
            </span>
        </div>
    )
}

export default Footer