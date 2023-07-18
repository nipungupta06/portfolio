import React from 'react'
import Image from 'next/image'
const Certificate = () => {
    return (
        <div className='my-5 px-5 py-4 mx-auto'>
            <h2 className="text-3xl lg:text-5xl  text-center py-10">Certifications</h2>
            <div className="flex items-center flex-wrap">
                <div className="p-2 lg:w-1/3 sm:w-1/2 w-full">
                    <div className=" border-gray-800 border p-4 rounded-lg">
                        <Image src="/Python.jpg" alt='IITK Python' width={500}height={1} className='m-auto '></Image>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 sm:w-1/2 w-full">
                    <div className=" items-center justify-center border-gray-800 border p-4 rounded-lg">
                    <Image src="/DigitalGarage.jpg" alt='Marketing' width={500} height={1} className='m-auto '></Image>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 sm:w-1/2 w-full">
                    <div className=" items-center border-gray-800 border p-4 rounded-lg">
                    <Image src="/UdmeyPy.jpg" alt='IITK Python' width={500} height={1} className='m-auto '></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate