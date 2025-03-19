import React from 'react'
import Image from 'next/image'
import '@/app/globals.css';
function ServiceCard({className = '',imageBgColor, imageURL, cardTitle, bollatPoints, cardDescription}) {
    const lists = bollatPoints.split(", ").map(sentence => sentence.trim()).filter(Boolean);
  return (
    <div className={`bg-white h-[350px] p-5 rounded-2xl group transition-all relative ${className}`}>
        <div className="w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24  flex justify-center items-center rounded-full transition-all duration-700 group-hover:w-16 group-hover:h-16" style={{backgroundColor:imageBgColor}}>
            {/* <Image 
                src={imageURL}
                alt={cardTitle}
                width={500}
                height={500}
                className="w-16 transition-all duration-300 group-hover:w-10"
            /> */}
            <i className='flaticon-emergency-call'></i>
        </div>

        <div className='bg-white pt-5'>
            <h2 className='text-[#222659] text-xl md:text-base lg:text-xl font-bold'>{cardTitle}</h2>
            <ul className='my-3'>
                {
                    lists.map((list)=>{
                        return(
                            <li key={list} className='list-disc list-inside text-lg md:text-base lg:text-lg font-medium text-[#222659]'>{list}</li>
                        )
                    })
                }
            </ul>
            <p className='font-medium text-[#222659] text-base md:text-sm lg:text-base'>{cardDescription}</p>
        </div>
        <button className='absolute bottom-5 text-blue-600 font-semibold text-sm lg:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 hover:text-yellow-500'>Learn More</button>
    </div>
  )
}

export default ServiceCard