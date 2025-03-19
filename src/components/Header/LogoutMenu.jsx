import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function LogoutMenu({avatar, closeMenu}) {
  return (
    <div className='p-5 bg-white rounded-lg'>
            <div className='flex gap-5 items-center border-b border-gray-500 pb-5'>
                <div className='w-16 h-16 rounded-full'>

                <Image
                    src={avatar}
                    width={350}
                    height={350}
                    alt="Picture of the author"
                    /> 
                    </div>
                <div className=' leading-3'>
                    <h2 className='text-xl font-semibold'>User Name</h2>
                    <span className='text-sm text-gray-500'>user email</span>
                </div>
            </div>
            <ul className='menu flex flex-col gap-2 pt-5 '>
                <li onClick={closeMenu} className='menuItem capitalize w-fit'>
                    <Link href="login">Login</Link>
                </li>
                <li onClick={closeMenu} className='menuItem capitalize w-fit'>
                    <Link href="signup">Sign Up</Link>
                </li>
            </ul>
        </div>
  )
}

export default LogoutMenu