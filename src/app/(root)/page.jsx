import About from '@/components/About/About';
import Banner from '@/components/Banner/Banner'
import Blog from '@/components/Blog/Blog';
import Card from '@/components/card/Card'
import ClientReview from '@/components/Client_Review/ClientReview';
import DoctorNavTab from '@/components/DoctorNavTab/DoctorNavTab';
import Footer from '@/components/Footer/Footer';
import Partners from '@/components/Partners/Partners';
import Services from '@/components/Services/Services';
import React from 'react'
import Doctor from '@/svg/doctor';
import { FaUserDoctor, FaHeadphonesSimple, FaRegCalendarPlus } from "react-icons/fa6";
import Calender from '@/svg/calender';
import Emargency from '@/svg/Emargency';
function page() {
  
  return (
    <div>
        <Banner />
        
        <div className='container mx-auto mb-10'>
          <div className='flex flex-col md:flex-row justify-between gap-7'>
            <Card color={"#b3c8fc"} title={"Find Doctors Near You"} description={"Trusted expertise is just a click away"} icon={<Doctor color={"#b3c8fc"}/>}/>
            <Card color={"#fed3c0"} title={"24/7 Emergency Care"} description={"Find essential information"} icon={<Emargency color={"#fed3c0"}/>}/>
            <Card color={"#f2bcfc"} title={"Online Appoinment Booking"} description={"Easy-to-use online booking system"} icon={<Calender color={"#f2bcfc"}/>}/>
          </div>
        </div>
        <Services />
        <About />
        <DoctorNavTab />
        <ClientReview />
        <Partners />
        <Blog />
        <Footer />
    </div>
  )
}

export default page