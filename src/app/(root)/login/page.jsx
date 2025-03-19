'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@/media/images/login/logo.png'
import Art from '@/media/images/login/Art-1.png'
import google from '@/media/images/login/google.png'
import TextField from '@mui/material/TextField';
import PasswordField from '@/components/PasswordField'
import Link from 'next/link'

function Page() {
  return (
    <div className="pt-20 md:pt-28 min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse items-center justify-between bg-gray-200 p-6 md:p-10 rounded-lg shadow-lg">
        
        {/* Form Section */}
        <div className="flex flex-col gap-4 md:gap-6 w-[90%] md:w-1/2">
          <Image src={Logo} width={40} height={40} alt="Logo" className="w-10 md:w-12"/>
          <h2 className="text-xl md:text-3xl font-semibold">Login to your Account</h2>
          <span className="text-sm md:text-base text-gray-600">See what is going on with your business</span>
          
          <TextField 
            id="phone-basic" 
            label="Phone" 
            variant="outlined" 
            sx={{ '& .MuiOutlinedInput-notchedOutline': { borderRadius: '10px' } }}
            fullWidth
          />
          <PasswordField label="Password"/>
          
          <div className="text-right">
            <Link href="/forget-password" className="text-sm md:text-base text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          
          <button className="w-full py-3 rounded-lg bg-[#162D3A] text-white text-base md:text-lg font-semibold">
            Login
          </button>
          
          <p className="text-center text-sm md:text-base">or</p>
          
          <button className="w-full flex items-center justify-center gap-4 md:gap-6 border border-gray-400 bg-[#F3F9FA] rounded-lg py-2 md:py-3">
            <Image src={google} width={24} height={24} alt="Google Logo" className="w-6 md:w-8"/>
            <span className="text-sm md:text-base">Continue with Google</span>
          </button>
          
          <p className="text-center text-sm md:text-base font-semibold">
            Don’t have an account? 
            <Link href="/signup" className="text-blue-600 hover:underline ml-1">Sign up</Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden w-full md:w-1/2 md:flex justify-start">
          <Image src={Art} width={400} height={250} alt="Illustration" className="w-[80%] lg:w-full max-w-[450px]"/>
        </div>
      </div>
    </div>
  )
}

export default Page
