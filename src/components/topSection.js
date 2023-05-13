import React from "react";
import banner from "./images/5927911.gif";

const Section = () => {
    return (
        <div  className=" lg:flex flex-row-reverse   items-center p-10 ">
        <div className=" md:w-4/5 m-auto lg:mr-12  bg-pink-600">
                <img
                    id="bannerImg"
                    src={banner}
                    className="   relative -top-3 -left-4 border-t-4 border-l-2 rounded"
                />
            </div>
            
            <div className=" costomFont  max-w-2xl m-auto  relative   lg:pb-10  text-gray-400">
                <div
                    id="text"
                    className="  m-4 pt-10  sm:p-20 lg:p-28 text-xl backdrop-blur"
                >
                    Hi,
                    <br />I am a developer by heart love to learn new things
                    starting with web development and currently learning
                    Blockchain and Web 3.0 and try to make a world better place
                    to live and more secure by using Blockchain
                </div>
            </div>

            
           
            {/* https://wallpaperaccess.com/pixel-art-gif */}
        </div>
    );
};

export default Section;
