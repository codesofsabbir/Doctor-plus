import PageHeader from '@/components/PageHeader'
import Services from '@/components/Services/Services'
import React from 'react'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import NavTab from './NavTab'

function Page() {
    
  return (
    <div className='w-full'>
        <PageHeader />
        <Services />
        <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-12 my-14">
            <div className='w-full px-16 py-20 bg-[#e1f3ca] rounded-4xl'>
                <h2 className='text-2xl font-bold text-blue-950'>Unlock Your Wellness Journey</h2>
                <span className='text-lg text-blue-950'>Your Health, Your Way. Secure Your Consultation Appointment!</span>
                <Link href={""} className='flex items-center gap-3 font-bold mt-20 hover:tracking-wider hover:text-blue-500 transition-all duration-500'>Book An Appoinment <i><FaArrowRightLong /></i></Link>
            </div>
            <div className='w-full px-16 py-20 bg-blue-200 rounded-4xl'>
                <h2 className='text-2xl font-bold text-blue-950'>Unlock Your Wellness Journey</h2>
                <span className='text-lg text-blue-950'>Your Health, Your Way. Secure Your Consultation Appointment!</span>
                <Link href={""} className='flex items-center gap-3 font-bold mt-20 hover:tracking-wider hover:text-blue-500 transition-all duration-500'>Book An Appoinment <i><FaArrowRightLong /></i></Link>
            </div>
        </div>
        <NavTab />
    </div>
  )
}

export default Page;
