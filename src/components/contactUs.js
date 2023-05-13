import React from "react";
import {BsGithub , BsLinkedin , BsTwitter , BsTelegram} from 'react-icons/bs'
import { ImMail4} from "react-icons/im"
import { FaTwitterSquare} from "react-icons/fa"

const ContactUs = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div>


            <footer class="bg-black">
            <div className="  flex ">
                <h1 class="mb-4 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
                        
                    </span>
                    {" "}
                    <span class="   underline underline-offset-3 decoration-8 decoration-blue-600  decoration-blue-600">
                        Contact Us
                    </span>
                </h1>
            </div>
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex items-center justify-center">
                        {/* <div class="mb-6 md:mb-0">
                            
                                 <div  className=" nav text-gray-900 text-5xl  font-black max-w-6xl pt-10 pl-5 m-auto ">
           Diwakar Here
        </div>
                            
                        </div> */}
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                                    Resources
                                </h2>
                                <ul class="text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a
                                            href="https://flowbite.com/"
                                            class="hover:underline"
                                        >
                                            Flowbite
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://tailwindcss.com/"
                                            class="hover:underline"
                                        >
                                            Tailwind CSS
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                                    Follow us
                                </h2>
                                <ul class="text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a
                                            href="https://github.com/themesberg/flowbite"
                                            class="hover:underline "
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://discord.gg/4eeurUVvTy"
                                            class="hover:underline"
                                        >
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                                    Legal
                                </h2>
                                <ul class="text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
                    <div class="flex items-center justify-center">
                    
                        <div class="flex  mt-4 space-x-6 justify-center sm:mt-0 ">
                            <a
                                href="https://www.linkedin.com/in/diwakar-kashyap-317a5223b/"
                                target="_blank"
                                class="text-gray-500  hover:text-white"
                            >
                                <BsLinkedin className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="mailto:didk9675@gmail.com"
                                target="_blank"
                                class="text-gray-500   hover:text-white"
                            >
                                <ImMail4 className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="https://github.com/DIWAKARKASHYAP"
                                target="_blank"
                                class="text-gray-500   hover:text-white"
                            >
                                <BsGithub className="w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="https://t.me/didk9675"
                                target="_blank"
                                class="text-gray-500   hover:text-white"
                            >
                               <BsTelegram className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="https://twitter.com/Diwakar_766"
                                target="_blank"
                                class="text-gray-500   hover:text-white"
                            >
                               <FaTwitterSquare className=" w-10 h-10 lg:w-14 lg:h-14" /> 
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
