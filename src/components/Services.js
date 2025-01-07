import React from "react";

const Services = () => {
    return(
        <div className="mt-[100px]">
            <h1 className="pt-[50px] text-center text-[40px]">Services and Skills</h1>
            <div className="flex justify-around align-middle mt-[100px] ">
                <div>
                    <h3>Services</h3>
                    <p>I can deliver products that you will love in fast, better and functional that your users will love. My services include:</p>
                    <ul>
                        <li>Product Design</li>
                        <li>Web and Mobile App development</li>
                        <li>Front-end Development</li>
                        <li>Back-end Development</li>
                        <li>Fullstack Development</li>
                    </ul>
                </div>
                <div>
                    <h3>Skills</h3>
                    <p>I have a wide variety of programming skills that allows me to build products that suit your needs. The programming tools I know are:</p>
                    <ul>
                        <ul>Languages
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>Python</li>
                            <li>C#</li>
                        </ul>
                        <ul>Databases
                            <li>SQLLite</li>
                            <li>MySQL</li>
                        </ul>
                        <ul>Frameworks
                            <li>Django</li>
                            <li>.NET</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;