import React from 'react'
import Title from '../Title'
import TitleDes from '../TitleDes'
import NavTab from './NavTab'

function DoctorNavTab() {
  return (
    <div className='w-full py-20'>
        <div className="mx-auto w-[90%]">
            <div className='flex flex-col items-center'>
                <Title title={"Medical Professionals"}/>
                <TitleDes titleDes={"The Skilled Professionals Making A Difference At Mavis Clinic"} className='w-[80%]'/>
            </div>
            <NavTab />
        </div>
    </div>
  )
}

export default DoctorNavTab