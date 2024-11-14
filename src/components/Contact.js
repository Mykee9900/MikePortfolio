import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {

    return(
        <div className="italic my-[100px] text-center">
            <h3 className="text-3xl pt-[50px]">Contact Me</h3>
            <div className="flex justify-around mt-[90px]">
                <form className="grid gap-2 w-full max-w-xs">
                    <label for="name" id="name" className="text-left">Name</label>
                    <input type="text" id="name" placeholder="Name" className="mb-2"/>
                    <label for="email" id="email" className="text-left">Email</label>
                    <input type="text" id="email" placeholder="Email" className="mb-2"/>
                    <label for="phoneN" id="phoneN" className="text-left">Phone Number</label>
                    <input type="text" id="phoneN" placeholder="Phone Number" className="mb-2"/>
                    <label for="msg" id="msg" className="text-left">Message</label>
                    <textarea maxLength={50} id="msg" className="mb-2"/>
                    <button type="submit" className="bg-blue-500 text-white p-1 w-[100px] ">Send</button>
                </form>
                <div>
                    <h6>You can also reach me here</h6>
                    <a href="https://www.linkedin.com/in/elias-flores-629113217/" target="_blank" className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/kikes9900/profilecard/?igsh=MWJpdmZhdG4zdDczMw%3D%3D" className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                        Instagram
                    </a>
                    <a href="mailto:mykee5511@gmail.com" className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact