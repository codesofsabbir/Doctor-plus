import React from 'react'
import Title from '../Title'
import TitleDes from '../TitleDes'
import ServiceCard from './Services_Card/ServiceCard'
import Button from '../Button'

function Services() {
  return (
    <div className='bg-[#f5f5f3] py-28'>
        <div className="w-[90%] mx-auto">
            <div className='flex flex-col items-center pb-16'>
                <Title title={"Our Services"} />
                <TitleDes titleDes={"Begin Your Health Journey With Key Wellness Services"} className= "w-[80%]"/>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
              <ServiceCard imageURL={"https://i.ibb.co.com/bKZqWx9/health-logo.png"} cardTitle={"Women's Health"} bollatPoints={"Pap Smears, Breast Exams, Family Planning"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#b0c6fc"}/>

              <ServiceCard imageURL={"https://i.ibb.co.com/bKZqWx9/health-logo.png"} cardTitle={"Urgent Care"} bollatPoints={"Prompt Evaluation, common Illness, minor Injury"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#e9d368"}/>

              <ServiceCard imageURL={"https://i.ibb.co.com/bKZqWx9/health-logo.png"} cardTitle={"Telehealth Services"} bollatPoints={"Virtual Consultations, Remote Monitoring, Prescription Refills"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#f6cebd"}/>

              <ServiceCard imageURL={"https://i.ibb.co.com/bKZqWx9/health-logo.png"} cardTitle={"Diagnostic Services"} bollatPoints={"X-Ray, Laboratory Testing, Imaging(MRI/ CT Scans)"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#e8b7fa"}/>

              <ServiceCard imageURL={"https://i.ibb.co.com/bKZqWx9/health-logo.png"} cardTitle={"Primary Care"} bollatPoints={"Routine check-ups, Immunizations, Preventive Care"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#e8b7fa"}/>

              <ServiceCard imageURL={"https://i.ibb.co.com/bKZqWx9/health-logo.png"} cardTitle={"Specialty Care"} bollatPoints={"Cardiology, Dermatology, Gynecology"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#f6cebd"}/>

              <ServiceCard imageURL={"https://i.ibb.co.com/bKZqWx9/health-logo.png"} cardTitle={"Mental Health"} bollatPoints={"Counseling, Psychotherapy, Medication Management"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#e9d368"}/>

              <ServiceCard imageURL={"https://i.ibb.co.com/bKZqWx9/health-logo.png"} cardTitle={"Beauty Care"} bollatPoints={"Cosmetic Surgery, Breast Surgery, Hair Restoration"} cardDescription={"Focused on preventive care and overall well-being"} imageBgColor={"#b0c6fc"}/>
            </div>
            
            <Button buttonTitle={"View Moe Services"} className='mt-20 justify-center'/>
            
        </div>
    </div>
  )
}

export default Services