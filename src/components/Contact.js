import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("In the function");
        if(dataValidator()){
            try {
                console.log("trying to send message");
                const response = await fetch('/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, phone, msg }),
                });
                if(response.ok){
                    console.log("success")
                    alert("Message sent!");
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMsg('');
                } else {
                    alert("Failed to send!");
                    console.log("failed");
                }
            } catch(error){
                console.log('Error:', error);
                alert("An error occured, please try again.");
            }
        }  else {
            alert("Please input correct data in the form.");
        }
    };

    const dataValidator = () => {
        //Variables are used to check for malicious characters
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const scriptRegex = /<\s*script.*?>.*?<\s*\/\s*script\s*>/gi;
        const invalidChars = /[<>{}]/g; 

        if(name.length > 20 || name.length < 2 || invalidChars.test(name) || scriptRegex.test(name)){
            alert("Name must be greater than 2 or less than 20 characters, and only contain characters.");
            console.log("error");
            return false;
        }
        if(!emailRegex.test(email) || invalidChars.test(email) || scriptRegex.test(email)){
            alert("Please enter a valid email address.");
            console.log("error");
            return false;
        }
        if(phone.length !==10 || !/^\d+$/.test(phone)){
            alert("Phone number must be 10 digits.")
            console.log("error");
            return false;
        }
        if(msg.length > 150 || msg.length < 2 || scriptRegex.test(msg) || invalidChars.test(msg)){
            alert("Message must be greater than 2 characters or less than 150 characters, and only contain characters or numbers.");
            console.log("error");
            return false;
        }
        return true;
    }

    return(
        <div className="flex flex-col items-center italic mt-[94px] mb-[50px] text-center">
            <h3 className="text-3xl pt-[30px]">Contact Me</h3>
            <h6 className="mt-[40px] mb-[18px] text-center text-2xl w-[500px]">Any Questions? Or have a web application in mind? Send me a message and I will get back to you soon. I strive to provide the best service to my clients when it comes to web applications. I Will be looking forward to hearing from you soon!</h6>
            <div className="flex justify-around mt-[90px] w-full">
                <form className="grid gap-2 w-full max-w-xs" onSubmit={handleSubmit}>
                    <p className="w-[500px] mb-5">Use the form below to send me a message regarding services or Ideas. I will normally reply to all emails within 24 business hours. </p>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="mb-2 h-9 p-2 dark:bg-gray-500 dark:text-black" required/>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-2 h-9 p-2 dark:bg-gray-500 dark:text-black" required/>
                    <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="mb-2 h-9 p-2  dark:bg-gray-500 dark:text-black" required/>
                    <textarea rows={4} maxLength={150} placeholder="Message" id="msg" value={msg} onChange={(e) => setMsg(e.target.value)} className="mb-2 p-2  dark:bg-gray-500 dark:text-black" required/>
                    <button type="submit" className="bg-blue-500 text-white p-1 w-[100px] dark:text-black">Send</button>
                </form>
                <div>
                    <h6 className="text-[25px] mb-8">You can also reach me here</h6>
                    <a href="https://www.linkedin.com/in/elias-flores-629113217/" target="_blank" className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 my-3">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/kikes9900/profilecard/?igsh=MWJpdmZhdG4zdDczMw%3D%3D" className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 my-3" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                        Instagram
                    </a>
                    <a href={`mailto:${process.env.REACT_APP_EMAIL_USER}`} className="flex items-center text-xl text-blue-700 hover:text-blue-900 mx-[20px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 my-3" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact