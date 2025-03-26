import React from 'react'
import Link from "next/link";
function FooterBottom() {
  return (
    <div className="w-full bg-white ">
        <div className="w-[80%] mx-auto h-20 flex flex-col md:flex-row md:justify-between justify-center md:items-center text-blue-900 ">
            <span className='text-sm md:text-base font-semibold md:font-normal'>Doctor Plus All Rights Reserved by Sabbir Ahmed.</span>
            <div>
                <ul className="flex text-sm md:text-base md:font-semibold gap-5 md:gap-5">
                    <Link href={''}>Terms & Conditions</Link>
                    <Link href={''}>Legal Notice</Link>
                </ul>
            </div>
        </div>
      </div>
  )
}

export default FooterBottom