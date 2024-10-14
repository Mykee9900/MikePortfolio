import React from "react";

const About = () => {
    return (
        <div>
            <div className="bg-AboutBg bg-contain absolute top-[80px] z-1 h-[300px] w-full">
                <h1 className="text-5xl text-center py-5 text-white">About Me</h1>
                <p className="text-white pt-[50px] text-center">Hello world! My name is Mykee, and I am a full stack developer. After my years In the Army I pursued a career in IT, So I found my way in software development. Now I build web applications for the joy of it.</p>
                <p>If you seek my skills connect with me to chat! </p>
            </div>
            <div>
                <h3>Skills</h3>
                <p>I have been programming for years and here are the skills I have attained.</p>
            </div>
        </div>
    );
}

export default About;