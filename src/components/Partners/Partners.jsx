import React from 'react'
import PartnersLogo from './PartnersLogo'

function Partners() {
  return (
    <div className="w-full px-10 py-20 bg-[#f5f5f3] mt-10">
      <h3 className="text-2xl text-blue-950 font-semibold text-center pb-10">
        Trusted by hundreds of organisations
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 place-items-center">
        <PartnersLogo partnerLogo="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/partner2.png" />
        <PartnersLogo partnerLogo="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/partner1.png" />
        <PartnersLogo partnerLogo="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/partner3.png" />
        <PartnersLogo partnerLogo="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/partner4.png" />
        <PartnersLogo partnerLogo="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/partner7.png" />
        <PartnersLogo partnerLogo="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/partner5.png" />
        <PartnersLogo partnerLogo="https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/partner6.png" />
      </div>
    </div>

  )
}

export default Partners