import React from "react";
import pyMovie from "../media/MovieMaker.mp4";
import taskApp from "../media/TaskVid.mp4";

const Home = () => {
    return (
        <div className="italic text-center font-medium500Italic mt-9">
            <h3 className="text-2xl mb-5">Software Developer</h3>
            <p className="w-[400px] m-auto">My name is Mykee Flores, Founder of Web Creator. I am a Army veteran who found his path in Web Development. Explore my website to learn more about me and see my work. Reach me in the contact page for a project or more info.</p>
            <div >
                <h3>Full Stack web applications</h3>
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
        </div>
    )
}

export default Home;