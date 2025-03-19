import React from 'react'
import Image from 'next/image'
function PartnersLogo({partnerLogo}) {
  return (
    <Image 
        src={partnerLogo}
        alt={"Doctor Plus Partner Logo"}
        width={500}
        height={500}
        className='object-contain w-32'
    />
  )
}

export default PartnersLogo