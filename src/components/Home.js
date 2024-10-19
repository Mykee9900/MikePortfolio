import React from "react";
import pyMovie from "../media/MovieMaker.mp4";
import taskApp from "../media/TaskVid.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    return (
        <div className="italic text-center font-medium500Italic mt-9">
            <h3 className="text-4xl mb-5"><span className="border-b-2 border-black inline-block">Software Developer</span></h3>
            <div>
            <p className="w-[400px] m-auto text-2xl mb-[50px]">My name is Mykee Flores, I build websites for clients, and I am a Army veteran who found his path in Web Development. Explore my website to learn more about me and see my work. Reach me in the contact page for a project or more info.</p>
            <div>
                <p>Reach me here</p>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:text-blue-900">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> {/* Add margin for spacing */}
                        LinkedIn
                </a>
                <a href="" target="_blank"></a>
            </div>
            </div>            <div>
                <h3 className="text-4xl">Full Stack web applications</h3>
                <div className="flex flex-row justify-around items-center w-full max-w-screen-lg mx-auto">
                    <figure className="mx-[40px] my-9">
                        <h6>A movie website</h6>
                        <video className="rounded-[20px] border-blue-50 border-2 my-4" src={pyMovie} width={500} height={300} controls aria-label="Python movie website example" />
                        <figcaption>The website was created using Python, and the Django framework. It utilizes CRUD operations and makes API calls to the movie database website.</figcaption>
                    </figure>
                    <figure className="mx-[40px] my-9">
                        <h6>A task manager website</h6>
                        <video className="rounded-[20px] border-blue-50 border-2 my-4" src={taskApp} width={500} height={300} controls aria-label="A Python web application example for managing task" />
                        <figcaption>The website has basic CRUD operations and also allows users to effectively view and manage tasks. Python, JavaScript, and the Django framework were used building this web application.</figcaption>
                    </figure>
                </div>
            </div>
            <div>
                <button>Reach me here</button>
            </div>
        </div>
    )
}

export default Home;