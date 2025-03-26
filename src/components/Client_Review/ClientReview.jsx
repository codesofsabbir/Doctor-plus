import React from 'react'
import Title from '../Title'
import TitleDes from '../TitleDes'
import ReviewSlider from './ReviewSlider'
import Image from 'next/image'
import { CiFaceSmile } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import Counter from '../counter'
function ClientReview() {
  return (
    <div className='w-full'>
        <div className="mx-auto container">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-20'>
                <div className=''>
                    <Title title={"Why Choose Doctor Plus"}/>
                    <TitleDes titleDes={"Unique Approach To Your Health Needs"} className='text-start py-7'/>
                    <ReviewSlider />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-2 mx-5 md:mx-0">
  
  {/* First Large Image */}
  <div className="rounded-4xl group overflow-hidden md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
    <Image 
      src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/choose1.jpg"
      alt="image"
      width={500}
      height={900}
      className="object-cover w-full h-full md:aspect-[3/4] group-hover:scale-110 transition-all duration-500"
    />
  </div>

  {/* First Box */}
  <div className="rounded-4xl h-fit overflow-hidden bg-purple-300 p-10 text-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
    <CiFaceSmile className="text-5xl mb-3 mx-auto" />
    <Counter target={25} prefix={"K"} className='text-3xl text-blue-950 font-bold'/>
    <span className="text-lg text-blue-950">Happy Patients</span>
  </div>

  {/* Second Box */}
  <div className="rounded-4xl h-fit overflow-hidden bg-blue-200 p-10 text-center md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
    <FaGoogle className="text-5xl mb-3 mx-auto" />
    <Counter target={4.9} prefix={""} className='text-3xl text-blue-950 font-bold'/>
    <span className="text-lg text-blue-950">Google Ratings</span>
  </div>

  {/* Second Large Image */}
  <div className="rounded-4xl group overflow-hidden md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4">
    <Image 
      src="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/choose2.jpg"
      alt="image"
      width={700}
      height={700}
      className="object-cover w-full h-full md:aspect-[3/4] group-hover:scale-110 transition-all duration-500"
    />
  </div>

</div>

            </div>
        </div>
    </div>
  )
}

export default ClientReview