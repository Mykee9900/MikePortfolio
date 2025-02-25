import React from "react";
import movieMake from "../media/MovieMaker.mp4";
import taskMan from "../media/TaskVid.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
    return (
        <div className="italic text-center font-medium500Italic mt-9">
            <div className="flex flex-col justify-center items-center w-full my-[100px]">
                    <h3 className="sm:text-l md:text-2xl lg:text-4xl text-black-600 my-[70px]">Hello World! My name is Mykee. I create great software, from creative ideas. </h3>
                <div className="w-2/4">
                    <p className="text-2xl my-4 self-center">Reach me here</p>
                    <div className="flex justify-center">
                        <a href="https://www.linkedin.com/in/elias-flores-629113217/" target="_blank" className="flex items-center sm:text-l md:text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/kikes9900/profilecard/?igsh=MWJpdmZhdG4zdDczMw%3D%3D" className="flex items-center sm:text-l md:text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                            Instagram</a>
                        <a href={`mailto:${process.env.REACT_APP_EMAIL_USER}`} className="flex items-center sm:text-l md:text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            Email
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-4xl border-b-2 border-black inline-block">Recent Projects</h3>
                <div className="overflow-x-auto flex flex-row justify-around items-center w-full max-w-screen-lg mx-auto my-6">
                    <figure className="bg-opacity-20 bg-cyan-200 p-4 m-4 rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h6 className="text-xl text-center">Movie Maker</h6>
                        <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[248px] h-[165px]" src={movieMake} controls aria-label="A project that has crud operations to view and search movies"></video>
                        <figcaption className="text-center w-[248px]">A movie-centric website with CRUD functionality, enabling users to explore movies, watch trailers, like, and save favorites to their profiles. Built with Python, Django, JavaScript, and SQLite.</figcaption>
                    </figure>
                    <figure className="bg-opacity-20 bg-cyan-200 p-4 m-4 rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h6 className="text-xl text-center">Task Manager</h6>
                        <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[249px] h-[165px]" src={taskMan} controls aria-label="A project that allows user to add and remove tasks"></video>
                        <figcaption className="text-center w-[249px]">A task manager website with CRUD functionality, letting users add, manage, like, and remove tasks from their profiles. Built with Python, Django, JavaScript, and SQLite.</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Home;