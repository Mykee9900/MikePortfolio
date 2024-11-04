import React from "react";
import pyMovie from "../media/MovieMaker.mp4";
import taskApp from "../media/TaskVid.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
    return (
        <div className="italic text-center font-medium500Italic mt-9">
            <div className="flex justify-center  w-full my-[100px]">
                <div className="flex flex-col content-around items-center">
                    <h3 className="text-2xl text-blue-500 mb-4">Mykee Flores. I create great software, from creative ideas. </h3>
                    <p className="w-1/4 m-auto text-1xl mb-[50px] italic font-medium500Italic">Hello world!, I build websites for clients, and I am a Army veteran who found his path in Web Development. Explore my website to learn more about me and see my work. Reach me in the contact page for a project or more info.</p>
                </div>
                <div className="w-2/4">
                    <p className="text-2xl my-4 self-center">Reach me here</p>
                    <div className="flex justify-center">
                        <a href="https://www.linkedin.com/in/elias-flores-629113217/" target="_blank" className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/kikes9900/profilecard/?igsh=MWJpdmZhdG4zdDczMw%3D%3D" className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                            Instagram</a>
                        <a href="mailto:mykee5511@gmail.com" className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            Email
                        </a>
                    </div>
                </div>
            </div>            <div>
                <h3 className="text-4xl border-b-2 border-black inline-block">Full Stack web applications</h3>
                <div className="flex flex-row justify-around items-center w-full max-w-screen-lg mx-auto mt-6">
                    <figure className="flex flex-col items-center mx-[40px] my-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h6 className="text-xl">A movie website</h6>
                        <video className="rounded-[20px] border-blue-500 border-2 my-4 w-[280px] h-[180px]" src={pyMovie} controls aria-label="Python movie website example" />
                        <figcaption>The website was created using Python, and the Django framework. It utilizes CRUD operations and makes API calls to the movie database website.</figcaption>
                    </figure>
                    <figure className="flex flex-col items-center mx-[40px] my-9 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h6 className="text-xl">A task manager website</h6>
                        <video className="rounded-[20px] border-blue-500 border-2 my-4 w-[280px] h-[180px]" src={taskApp} controls aria-label="A Python web application example for managing tasks" />
                        <figcaption>The website has basic CRUD operations and also allows users to effectively view and manage tasks. Python, JavaScript, and the Django framework were used building this web application.</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Home;