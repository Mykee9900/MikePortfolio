import React from "react";
import affirmGen from "../media/affirmGen.mp4";
import calculator from "../media/calculator.mp4";
import toDo from "../media/toDoList.mp4";
import bookLab from "../media/Book Lab - 12 September 2023.mp4";
import movieMake from "../media/MovieMaker.mp4";
import taskMan from "../media/TaskVid.mp4";

const Projects = () => {
    return(
        <div className="mt-[100px]">
            <h1 className="text-center pt-[100px] text-4xl">Projects</h1>
            <div className="flex flex-col justify-around items-center">
                <div>
                    <h3 className="text-2xl mt-[60px] text-center">Front End Projects</h3>
                    <div className="mt-6 flex justify-around w-full">
                        <figure className="bg-opacity-20 bg-cyan-500 p-4 m-4 rounded-[20px]">
                            <video className="rounded-[20px] border-gray-600 border-8 my-4 w-[270px] h-[158px]" src={affirmGen} controls aria-label="A project that generates affirmations"></video>
                            <figcaption className="text-center">Affirmation Generator</figcaption>
                        </figure>
                        <figure className="bg-opacity-20 bg-cyan-500 p-4 m-4 rounded-[20px]">
                            <video className="rounded=[20px] border-gray-600 border-8 my-4 w-[270px] h-[165px]" src={calculator} controls aria-label="A project that is a calculator"></video>
                            <figcaption className="text-center">Calculator</figcaption>
                        </figure>
                        <figure className="bg-opacity-20 bg-cyan-500 p-4 m-4 rounded-[20px]">
                            <video className="rounded=[20px] border-gray-600 border-8 my-4 w-[270px] h-[161px]" src={toDo} controls aria-label="A project that is used as a ToDo List"></video>
                            <figcaption className="text-center">ToDo List</figcaption>
                        </figure>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl">Full Stack Projects</h3>
                    <div>
                        <figure>
                            <figcaption>Book Lab</figcaption>
                        </figure>
                        <figure>
                            <figcaption>Movie Maker</figcaption>
                        </figure>
                        <figure>
                            <figcaption>Task Manager</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects