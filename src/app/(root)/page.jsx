import Banner from '@/components/Banner/Banner'
import Blog from '@/components/Blog/Blog';
import Card from '@/components/card/Card'
import ClientReview from '@/components/Client_Review/ClientReview';
import Footer from '@/components/Footer/Footer';
import Partners from '@/components/Partners/Partners';
import Services from '@/components/Services/Services';
import React from 'react'

import { FaUserDoctor, FaHeadphonesSimple, FaRegCalendarPlus } from "react-icons/fa6";
function page() {
  return (
    <div>
        <Banner />
        <div className='w-[90%] mx-auto mb-10'>
          <div className='flex flex-col md:flex-row justify-between gap-7'>
            <Card color={"#b3c8fc"} title={"Find Doctors Near You"} description={"Trusted expertise is just a click away"} icon={<FaUserDoctor />}/>
            <Card color={"#fed3c0"} title={"24/7 Emergency Care"} description={"Find essential information"} icon={<FaHeadphonesSimple />}/>
            <Card color={"#f2bcfc"} title={"Online Appoinment Booking"} description={"Easy-to-use online booking system"} icon={<FaRegCalendarPlus />}/>
          </div>
        </div>
        <Services />
        <ClientReview />
        <Partners />
        <Blog />
        <Footer />
    </div>
  )
}

export default page