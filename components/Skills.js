import React from 'react'
import "@styles/utils.css"
import Image from 'next/image'
const Skills = () => {
    return (
        <div className='bg-[#08131c] '>
            <h2 className="text-5xl text-center py-10">My Skills</h2>
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-4 mx-auto">

                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                <Image src="/Cpp.png" alt="C++" width={50} height={50} className=" bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium text-2xl">C++</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex  items-center border-gray-800 border p-4 rounded-lg ">
                                <Image src="/Python.png" alt="Python" width={50} height={50} className=" bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium text-2xl">PYTHON</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex  items-center border-gray-800 border p-4 rounded-lg ">
                                <Image src="/Js.png" alt="JS" width={50} height={50} className=" bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium text-2xl">JAVASCRIPT</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex  items-center border-gray-800 border p-4 rounded-lg ">
                                <Image src="/mysql-logo.svg" alt="sql" width={50} height={50} className=" bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium text-2xl">MySQL</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex  items-center border-gray-800 border p-4 rounded-lg ">
                                <Image src="/mongo.svg" alt="mongo" width={50} height={50} className=" bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium text-2xl">MongoDB</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex  items-center border-gray-800 border p-4 rounded-lg ">
                                <Image src="/next.png" alt="next" width={50} height={50} className=" bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium text-2xl">NextJs</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex  items-center border-gray-800 border p-4 rounded-lg ">
                                <Image src="/React.png" alt="react" width={50} height={50} className=" bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium text-2xl">ReactJs</h2>

                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full flex  items-center border-gray-800 border p-4 rounded-lg ">
                                <Image src="/Node.png" alt="node" width={50} height={50} className=" bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4" />

                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium text-2xl">NodeJs</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

        </div>
    )
}

export default Skills