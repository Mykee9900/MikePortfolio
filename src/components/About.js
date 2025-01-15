import React from "react";
import aboutPhoto from "../media/aboutPhoto.jpg";

const About = () => {
    return (
        <div className="mt-[100px]">
            <h1 className="pt-[50px] text-center text-[40px]">About Me</h1>
            <div className="flex justify-around w-full my-[80px]">
                <img className="h-[500px] border-8 border-gray-500 rounded-2xl " src={aboutPhoto} alt="Profile picture" />
                <div className="italic text-xl w-[400px]">
                    <h3 className="text-2xl pb-4">Hello! I'm Mykee.</h3>
                    <p>I am an Army veteran from El Paso who became a software developer.</p>
                    <p>As a child, I always had an imaginative mind and enjoyed using my creativity with computers. While experimenting with computers, I discovered my passion for IT.</p>
                    <p>After completing my journey in the Army, I began searching for my ideal career. Reflecting on my past, I wondered why I had never pursued a career in IT. That realization led me to explore various jobs, and eventually, I discovered coding. Since then, it has been the best decision I’ve ever made. Now, I am ready to help others turn their creative ideas into reality. Reach out to me below, and let’s start a project together!</p>
                    <button className="p-2 mt-6 border-4 border-black bg-gray-500 transition ease-in-out duration-100 hover:translate-y-1 hover:scale-110 cursor-pointer"><a href="/efResume.pdf" target="_blank">Resume</a></button>
                </div>
            </div>
        </div>
    );
}

export default About;