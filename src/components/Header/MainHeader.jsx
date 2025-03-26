import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Button from './Button'
import Avator from './Avator'
function MainHeader() {
  return (
    <>
        <ComputerHeader />
        <MobileHeader />
    </>
  )
}

const ComputerHeader = () => {
    return(
        <div className={`w-full py-4 hidden lg:block`}>
            <div className="w-[90%] mx-auto flex items-center justify-between">
                <div className='flex items-center gap-10'>
                    <div className=''>
                        <Logo />
                    </div>
                    <Menu />
                </div>
                <div className="flex items-center gap-7">
                    <Button />
                    <Avator />
                </div>
            </div>
        </div>
    )
}


const MobileHeader = () => {
    return(
        <div className={`w-full py-4 lg:hidden`}>
        <div className="w-[90%] mx-auto flex items-center justify-between">
            <div className='flex items-center gap-10'>
                <Logo />
            </div>
            <div className="flex items-center">
                <Avator />
                <Menu />
            </div>
            
        </div>
    </div>
    )
}

export default MainHeader