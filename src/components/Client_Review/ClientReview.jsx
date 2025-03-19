import React from 'react'
import Title from '../Title'
import TitleDes from '../TitleDes'
import ReviewSlider from './ReviewSlider'

function ClientReview() {
  return (
    <div className='w-full'>
        <div className="mx-auto w-[90%]">
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <Title title={"Why Choose Doctor Plus"}/>
                    <TitleDes titleDes={"Unique Approach To Your Health Needs"} className='text-start'/>
                    <ReviewSlider />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientReview