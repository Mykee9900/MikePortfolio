import React from "react";
// import affirmGen from "../media/affirmGen.mp4";
// import calculator from "../media/calculator.mp4";
// import toDo from "../media/toDoList.mp4";
// import bookLab from "../media/Book Lab - 12 September 2023.mp4";
// import movieMake from "../media/MovieMaker.mp4";
// import taskMan from "../media/TaskVid.mp4";

const Projects = () => {
    return(
        <div className="mt-[100px]">
            <h1 className="text-center pt-[100px] text-4xl">Projects</h1>
            <div className="flex flex-col justify-around items-center">
                <div>
                    <h3 className="text-2xl mt-[60px] text-center">Front End Projects</h3>
                    <div className="overflow-x-auto mt-6 flex lg:flex-row sm:flex-col md:flex-row justify-around max-w-[100vw]">
                        <figure className="min-w-[280px] bg-opacity-20 bg-cyan-200 p-4 m-4 rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                            <h6 className="text-xl text-center">Affirmation Generator</h6>
                            <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[270px] h-[150px]" src="/media/affirmGen.mp4" controls aria-label="A project that generates affirmations"></video>
                            <figcaption className="text-center w-[270px]">An interactive website built using HTML, CSS, and JavaScript to generate personalized affirmations instantly.”</figcaption>
                        </figure>
                        <figure className="min-w-[280px] bg-opacity-20 bg-cyan-200 p-4 m-4 rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h6 className="text-xl text-center">Calculator</h6>
                            <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[270px] h-[165px]" src="/media/calculator.mp4" controls aria-label="A project that is a calculator"></video>
                            <figcaption className="text-center w-[270px]">A functional calculator website designed and developed using HTML, CSS, and JavaScript, providing users with an intuitive interface for performing basic arithmetic operations.</figcaption>
                        </figure>
                        <figure className="min-w-[280px] bg-opacity-20 bg-cyan-200 p-4 m-4 rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                            <h6 className="text-xl text-center">ToDo List</h6>
                            <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[270px] h-[161px]" src="/media/toDoList.mp4" controls aria-label="A project that is used as a ToDo List"></video>
                            <figcaption className="text-center w-[270px]">A dynamic and visually appealing To-Do List website built using the React front-end framework and styled with CSS, offering seamless task management and an intuitive user experience.</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="mb-9">
                    <h3 className="text-2xl mt-[100px] text-center">Full Stack Projects</h3>
                    <div className="overflow-x-auto flex flex-row overflow-auto lg:flex-row sm:flex-col md:flex-row justify-around mt-6 max-w-[100vw]">
                        <figure className="bg-opacity-20 bg-cyan-200 p-4 m-4 rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h6 className="text-xl text-center">Book Lab</h6>
                            <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[270px] h-[160px]" src="/media/bookLab.mp4" controls aria-label="A project that has crud operations to view books"></video>
                            <figcaption className="text-center w-[270px]">A website that uses CRUD operations and allows users to view books stored in website database. It was built using Python Django Framework, SQL Lite database and HTML, CSS, and Javascript.</figcaption>
                        </figure >
                        <figure className="bg-opacity-20 bg-cyan-200 p-4 m-4 rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h6 className="text-xl text-center">Movie Maker</h6>
                            <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[248px] h-[165px]" src="/media/MovieMaker.mp4" controls aria-label="A project that has crud operations to view and search movies"></video>
                            <figcaption className="text-center w-[248px]">A movie-centric website with CRUD functionality, enabling users to explore movies, watch trailers, like, and save favorites to their profiles. Built with Python, Django, JavaScript, and SQLite.</figcaption>
                        </figure>
                        <figure className="bg-opacity-20 bg-cyan-200 p-4 m-4 rounded-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h6 className="text-xl text-center">Task Manager</h6>
                            <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[249px] h-[165px]" src="media/TaskVid.mp4" controls aria-label="A project that allows user to add and remove tasks"></video>
                            <figcaption className="text-center w-[249px]">A task manager website with CRUD functionality, letting users add, manage, like, and remove tasks from their profiles. Built with Python, Django, JavaScript, and SQLite.</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects