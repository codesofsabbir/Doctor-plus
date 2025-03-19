import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const LoginMenu = ({user, closeMenu}) => {
    console.log(user)
  return (
    <div className='p-5 bg-white rounded-lg '>
            <div className='flex gap-5 items-center '>
                <div className="avator w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden relative cursor-pointer border-2 border-black">
                    <Image
                        src={user.image}
                        width={350}
                        height={350}
                        alt="Picture of the author"
                    />    
                </div>
                <div className=' leading-3'>
                    <h2 className='text-xl font-semibold'>Sabbir Ahmed</h2>
                    <span className='text-sm text-gray-500'>ilrsabbir@gmail.com</span>
                </div>
            </div>
            <ul className='menu flex flex-col gap-2 pt-5'>
                <div className=' border-y border-gray-400 py-5'>
                    <li onClick={closeMenu} className='menuItem capitalize w-fit'>
                        <Link href="profile">Profile</Link>
                    </li>
                    <li onClick={closeMenu} className='menuItem capitalize w-fit'>
                        <Link href="setting">Setting</Link>
                    </li>
                </div>
                
                <li onClick={closeMenu} className='menuItem capitalize w-fit'>
                    <Link href="/">Logout</Link>
                </li>
            </ul>
        </div>
  )
}

export default LoginMenu