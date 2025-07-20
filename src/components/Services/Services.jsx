import React from 'react'
import Title from '../Title'
import TitleDes from '../TitleDes'
import ServiceCard from './Services_Card/ServiceCard'
import Button from '../Button'
import WomenCare from '@/svg/women-care'
import UrgentCare from '@/svg/urgent-care'
import Diagnostic from '@/svg/diagnostic'
import MentalHealth from '@/svg/mental-health'
import HeartBeat from '@/svg/heart-beat'
import OldCare from '@/svg/old-care'
import Telehealth from '@/svg/Telehealth'
import BeautyCare from '@/svg/beauty-care'
function Services() {
  return (
    <div className='bg-[#f5f5f3] py-28'>
        <div className="container mx-auto">
            <div className='flex flex-col items-center pb-16'> 
                <Title title={"Our Services"} />
                <TitleDes titleDes={"Begin Your Health Journey With Key Wellness Services"} className= "w-[80%] "/>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
              <ServiceCard icon={<WomenCare />} cardTitle={"Women's Health"} bollatPoints={"Pap Smears, Breast Exams, Family Planning"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#b0c6fc"}/>
              <ServiceCard icon={<UrgentCare />} cardTitle={"Urgent Care"} bollatPoints={"Prompt Evaluation, common Illness, minor Injury"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#e9d368"}/>
              <ServiceCard icon={<Telehealth />} cardTitle={"Telehealth Services"} bollatPoints={"Virtual Consultations, Remote Monitoring, Prescription Refills"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#f6cebd"}/>
              <ServiceCard icon={<Diagnostic />} cardTitle={"Diagnostic Services"} bollatPoints={"X-Ray, Laboratory Testing, Imaging(MRI/ CT Scans)"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#e8b7fa"}/>
              <ServiceCard icon={<OldCare />} cardTitle={"Senior Care"} bollatPoints={"Geriatric Assessments, Chronic Disease, Memory Care"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#e8b7fa"}/>
              <ServiceCard icon={<HeartBeat />} cardTitle={"Specialty Care"} bollatPoints={"Cardiology, Dermatology, Gynecology"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#f6cebd"}/>
              <ServiceCard icon={<MentalHealth />} cardTitle={"Mental Health"} bollatPoints={"Counseling, Psychotherapy, Medication Management"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#e9d368"}/>
              <ServiceCard icon={<BeautyCare />} cardTitle={"Beauty Care"} bollatPoints={"Cosmetic Surgery, Breast Surgery, Hair Restoration"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#b0c6fc"}/>
            </div>
            
            <Button buttonTitle={"View Moe Services"} className='mt-20 mx-auto'/>
            
        </div>
    </div>
  )
}

export default Services