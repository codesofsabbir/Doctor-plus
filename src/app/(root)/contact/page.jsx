import PageHeader from '@/components/PageHeader'
import React from 'react'
import ContactCard from './ContactCard'
import { FaLocationDot } from 'react-icons/fa6'
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from './ContactForm';
function page() {
  return (
    <div>
      <PageHeader />
      <div className='container mx-auto my-10'>
        <div className='grid md:grid-cols-3 gap-10'>
          <ContactCard icon={<CiLocationOn />} title={"address:"} first={"Birabo, Rupganj, Narayanganj"} second={"Dhaka, Bangladesh"} className='bg-[#B3C8FF]'/>
          <ContactCard icon={<FiPhone />} title={"phone:"} first={"01303142498"} second={"01326650567"} className='bg-[#F0DA69]'/>
          <ContactCard icon={<HiOutlineMail />} title={"Email:"} first={"ilrsabbir@gmail.com"} second={"imsabbiir@gmail.com"} className='bg-[#FCD3BF]'/>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default page