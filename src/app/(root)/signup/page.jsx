'use client'
import React from 'react'
import Image from 'next/image'
import Art from '@/media/images/login/Art-3.png'
import google from '@/media/images/login/google.png'
import TextField from '@mui/material/TextField';
import PasswordField from '@/components/PasswordField'
import Link from 'next/link'
function Signup() {
  return (
    <div className=''>
        <div className='w-[85%] mx-auto h-screen flex items-center justify-center'>
            <div className='flex flex-col-reverse md:flex-row-reverse w-[80%] h-fit items-center justify-between bg-gray-200 p-10 rounded-lg'>


                <div className='flex gap-3 flex-col w-1/2'>          
                  <h2 className='text-3xl font-semibold'>Create A new Account</h2>
                  <span className='text-base text-gray-600'>See what is going on with your business</span>
                  
                  <TextField id="phone-basic" label="Phone" variant="outlined" sx={{
                    '& .MuiOutlinedInput-notchedOutline':{
                      borderRadius: '10px',
                    }
                  }}/>
                  <PasswordField label={"Password"}/>
                  <PasswordField label={"Confirm Password"}/>
                  <button className='py-3 rounded-[10px] bg-[#162D3A] text-lg text-white font-semibold'>Sign Up</button>
                  <p className='text-center'>or</p>
                  <button className='bg-[#F3F9FA] flex gap-8 items-center border border-black rounded-lg justify-center py-2 pl-5 pr-10'>
                    <Image
                      src={google}
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />    
                    <span>Continue with Google</span>
                  </button>
                  <li className='list-none text-center font-semibold'>Already Have an Account? <Link href={"login"} className='text-blue-600 hover:underline'>Login</Link></li>
                </div>


                <div className=''>
                <Image
                    src={Art}
                    width={350}
                    height={200}
                    alt="Picture of the author"
                  />    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup