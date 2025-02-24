import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { faJava } from "@fortawesome/free-brands-svg-icons/faJava";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
    return(
        <div className="mt-[100px]">
            <h1 className="pt-[50px] text-center text-[40px]">Services and Skills</h1>
            <div className="flex flex-col lg:flex-row sm:flex-col sm:items-center justify-around align-middle mt-[100px] mb-[150px]">
                <div className="w-[500px] sm:mb-6">
                    <h3 className="text-[30px] mb-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px]">Services</h3>
                    <p className="text-[20px] md:text-[15px] sm:w-[150px] md:w-[300px]">I deliver high-quality, functional products quickly and efficiently, ensuring both you and your users are delighted. My services include:</p>
                    <ul className="mt-[20px] ml-[50px] text-[20px] md:text-[15px]">
                        <li className="font-bold list-disc">Product Design</li>
                        <li className="font-bold list-disc">Web and Mobile Application Development</li>
                        <li className="font-bold list-disc">Front-End Development</li>
                        <li className="font-bold list-disc">Back-End Development</li>
                        <li className="font-bold list-disc">Full-Stack Development</li>
                    </ul>
                </div>
                <div className="w-[500px] h-[300px]">
                    <h3 className="text-[30px] mb-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px]">Skills</h3>
                    <p className="text-[20px] md:text-[15px] md:w-[300px]">I have a wide variety of programming skills that allows me to build products that suit your needs. The programming tools I know are:</p>
                    <ul className="flex justify-around mt-[30px] text-[20px] md:text-[15px]">
                        <ul className="font-bold">Languages:
                            <li><FontAwesomeIcon icon={faJs} beat style={{color: "#74C0FC",}} /> JavaScript</li>
                            <li><FontAwesomeIcon icon={faCss3} beat style={{color: "#74C0FC"}} /> CSS</li>
                            <li><FontAwesomeIcon icon={faPython} beat style={{color: "#74C0FC",}} /> Python</li>
                            <li><FontAwesomeIcon icon={faJava} beat style={{color: "#74C0FC",}} /> Java</li>
                            <li><FontAwesomeIcon icon={faCode} beat style={{color: "#74C0FC",}} /> C#</li>
                        </ul>
                        <ul className="font-bold">Databases:
                            <li><FontAwesomeIcon icon={faDatabase} beat style={{color: "#74C0FC",}} /> SQLite</li>
                            <li><FontAwesomeIcon icon={faServer} beat style={{color: "#74C0FC",}} /> MySQL</li>
                        </ul>
                        <ul className="font-bold">Frameworks:
                            <li><FontAwesomeIcon icon={faPython} beat style={{color: "#74C0FC",}} /> Django</li>
                            <li><FontAwesomeIcon icon={faCode} beat style={{color: "#74C0FC",}} /> .NET</li>
                            <li><FontAwesomeIcon icon={faReact} beat style={{color: "#74C0FC",}} /> React</li>
                            <li><FontAwesomeIcon icon={faBootstrap} beat style={{color: "#74C0FC",}} /> Bootstrap</li>
                            <li><FontAwesomeIcon icon={faCode} beat style={{color: "#74C0FC",}} /> Tailwind</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <h3 className="text-center text-[30px] m-[112px]">Contact me for prices on any service listed above.</h3>
        </div>
    )
}

export default Services;