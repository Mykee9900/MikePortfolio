import React from "react";

const Projects = () => {
    return(
        <div className="mt-[100px]">
            <h1 className="text-center pt-[100px] text-4xl">Projects</h1>
            <div className="flex justify-center">
                <div>
                    <h3 className="text-2xl">Front End Projects</h3>
                    <div>
                        <figure>
                            <figcaption>Calculator</figcaption>
                        </figure>
                        <figure>
                            <figcaption>Quote Generator</figcaption>
                        </figure>
                        <figure>
                            <figcaption>Chore Manager</figcaption>
                        </figure>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl">Full Stack Projects</h3>
                </div>
            </div>
        </div>
    )
}

export default Projects