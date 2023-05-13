import React from "react";

import dnewsImg from "../images/dnewsImage.png";
import immortalImg from "../images/immortalImg.png";
import remoteJobImg from "../images/remoteJobImg.png";
import portfolio from "../images/portfolio.png";

const websiteProjects = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div>

            <div className="  flex px-5 lg:p-0 ">
                <h1 class="mb-4 m-auto text-3xl font-extrabold   md:text-5xl lg:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
                        Some Projects
                    </span>
                    {" In "}
                    <span class="   underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
                        Web Development
                    </span>
                </h1>
            </div>

            <div className=" lg:flex flex-wrap justify-between  max-w-5xl m-auto mt-5 p-4 lg-p-16  ">
                <div
                    data-aos="flip-left"
                    data-aos-anchor-placement="center-bottom"
                    className=" h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
                >
                    <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400 via-green-400 to-gray-800"></div>
                    <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-pink-400 via-pink-400 to-gray-800"></div>

                    <div className=" relative  max-w-sm p-1   rounded-lg shadow   ">
                        <div className=" bg-black rounded-md">
                            <a href="/blogs/role-of-software-engineering-in-blockchain-development">
                                <img
                                    className="rounded-t-lg cursor-pointer"
                                    src={immortalImg}
                                    alt="block-remote-job"
                                />
                            </a>
                            <div className="p-5">
                                <a href="/blogs/role-of-software-engineering-in-blockchain-development">
                                    <h5 className=" costomFont mb-2 text-2xl font-bold tracking-tight text-white cursor-pointer">
                                        Immortal Chat
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-400">
                                    Our website is designed to provide a secure
                                    and anonymous chat platform for two
                                    individuals. You can access your chat using
                                    a unique chat address, which is generated
                                    when you initiate a conversation. However,
                                    it's import
                                </p>
                                <div class="flex justify-between mt-4 space-x-3 md:mt-6">
                                    <a
                                        href="#"
                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href="#"
                                        className=" buttonAnimation  inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="flip-left"
                    data-aos-anchor-placement="center-bottom"
                    className=" h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
                >
                    <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-yellow-400 via-yellow-400 to-gray-800"></div>
                    <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-sky-400 via-sky-400 to-gray-800"></div>

                    <div className=" relative  max-w-sm p-1   rounded-lg shadow   ">
                        <div className=" bg-black rounded-md">
                            {" "}
                            <a href="/blogs/role-of-software-engineering-in-blockchain-development">
                                <img
                                    className="rounded-t-lg cursor-pointer"
                                    src={remoteJobImg}
                                    alt="block-remote-job"
                                />
                            </a>
                            <div className="p-5">
                                <a href="/blogs/role-of-software-engineering-in-blockchain-development">
                                    <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-white cursor-pointer">
                                        Dnews
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-400">
                                    Our website is designed to provide a secure
                                    and anonymous chat platform for two
                                    individuals. You can access your chat using
                                    a unique chat address, which is generated
                                    when you initiate a conversation. However,
                                    it's important to keep your chat address
                                </p>
                                <div class="flex justify-between mt-4 space-x-3 md:mt-6">
                                    <a
                                        href="#"
                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href="#"
                                        className=" buttonAnimation  inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="flip-left"
                    data-aos-anchor-placement="center-bottom"
                    className=" h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
                > 
                    {" "}
                    <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-pink-400 via-pink-400 to-gray-800"></div>
                    <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-sky-400 via-sky-400 to-gray-800"></div>
                    <div className=" relative  max-w-sm p-1   rounded-lg shadow   ">
                        <div className=" bg-black rounded-md">
                            {" "}
                            <a href="/blogs/role-of-software-engineering-in-blockchain-development">
                                <img
                                    className="rounded-t-lg cursor-pointer"
                                    src={dnewsImg}
                                    alt="block-remote-job"
                                />
                            </a>
                            <div className="p-5">
                                <a href="/blogs/role-of-software-engineering-in-blockchain-development">
                                    <h5 className=" costomFont mb-2 text-2xl font-bold tracking-tight text-white cursor-pointer">
                                        Dnews
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-400">
                                    I created this website using Next.js and
                                    Tailwind CSS, and I sourced all the news
                                    data from newsapi.org API . As the sole
                                    developer of this website, I aimed to
                                    provide a useful resource for anyone looking
                                    to stay up-to-date with the latest news.
                                </p>
                                <div class="flex justify-between mt-4 space-x-3 md:mt-6">
                                    <a
                                        href="#"
                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href="#"
                                        className=" buttonAnimation  inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="flip-left"
                    data-aos-anchor-placement="center-bottom"
                    className=" h-fit w-fit m-auto lg:m-0 lg:mb-12 relative   rounded-md  overflow-hidden bg-gray-800 mb-12"
                >
                    {" "}
                    <div className=" rotate-border1 w-full h-full absolute bg-gradient-to-b from-green-400  via-green-400 to-gray-800"></div>
                    <div className=" rotate-border2 w-full h-full absolute bg-gradient-to-t from-yellow-400 via-yellow-400 to-gray-800"></div>
                    <div className=" relative  max-w-sm p-1   rounded-lg shadow   ">
                        <div className=" bg-black rounded-md">
                            <a href="/blogs/role-of-software-engineering-in-blockchain-development">
                                <img
                                    className="rounded-t-lg cursor-pointer"
                                    src={portfolio}
                                    alt="block-remote-job"
                                />
                            </a>
                            <div className="p-5">
                                <a href="/blogs/role-of-software-engineering-in-blockchain-development">
                                    <h5 className="costomFont mb-2 text-2xl font-bold tracking-tight text-white cursor-pointer">
                                        Dnews
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-400">
                                    I created this website using Next.js and
                                    Tailwind CSS, and I sourced all the news
                                    data from newsapi.org API . As the sole
                                    developer of this website, I aimed to
                                    provide a useful resource for anyone looking
                                    to stay up-to-date with the latest news.
                                </p>
                                <div class="flex justify-between mt-4 space-x-3 md:mt-6">
                                    <a
                                        href="#"
                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        View Code
                                    </a>
                                    <a
                                        href="#"
                                        className=" buttonAnimation  inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-500 font-extrabold  border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        <span className=" buttonCircle w-4 h-4 mr-2 bg-red-500  rounded-full"></span>{" "}
                                        Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default websiteProjects;
