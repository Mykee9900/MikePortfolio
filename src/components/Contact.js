import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {

    return(
        <div>
            <h3>Contact Me</h3>
            <div>
                <form>
                    <label for="name" id="name">Name</label>
                    <input type="text" id="name" placeholder="Name"/>
                    <label for="email" id="email">Email</label>
                    <input type="text" id="email" placeholder="Email"/>
                    <label for="phoneN" id="phoneN">Phone Number</label>
                    <input type="text" id="phoneN" placeholder="Phone Number"/>
                    <label for="msg" id="msg">Message</label>
                    <textarea maxLength={50} id="msg" />
                </form>
                <div>
                    <h6>You can also reach me here</h6>
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
        </div>
    )
}

export default Contact