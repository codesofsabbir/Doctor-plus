import React from 'react'

function TitleDes({className = '', titleDes}) {
  return (
    <h2 className={`text-[#222659] text-5xl font-semibold text-center pt-5 ${className}`}>{titleDes}</h2>
  )
}

export default TitleDes