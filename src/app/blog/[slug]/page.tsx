import React from 'react'
import Image from "next/image";

const page = () => {
    return (
        <div className='font-geist-mono grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
            <div className="">
                <h1></h1>
                <p></p>
                <Image src={""} alt="image" />
            </div>
        </div>
    )
}

export default page