import React from "react";
import aboutPhoto from "../media/aboutPhoto.jpg";

const About = () => {
    return (
        <div className="mt-[100px]">
            <h1 className="pt-[50px] text-center text-[40px]">About Me</h1>
            <div className="flex justify-around w-full my-[80px]">
                <img className="h-[300px] border-2 border-gray-500 rounded-md " src={aboutPhoto} alt="Profile picture" />
                <div>
                    <h3>Hello! I'm Mykee.</h3>
                    <p>I'm a Army veteran from El Paso</p>
                </div>
            </div>
        </div>
    );
}

export default About;