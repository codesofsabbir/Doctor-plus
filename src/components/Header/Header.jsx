"use client"
import Logo from './Logo'
import Menu from './Menu'
import Button from './Button'
import Avator from './Avator'
import HeaderTop from './HeaderTop'

function Header() {
  
  return (
    <>
      
      <div className={`w-full h-fit flex items-center z-[1000] fixed top-0 left-0 bg-white transition-all duration-300 ease-in-out`}>
        <div className='w-full'>
          <HeaderTop />
          <div className="w-[90%] mx-auto">
            <div className="flex justify-between items-center h-24">
              <Logo />
              <div className="hidden md:inline-block">
                <Menu />
              </div>
              <div className="flex flex-row-reverse md:flex-row items-center gap-3 md:gap-10">
                <div className="hidden md:inline-block">
                  <Button />
                </div>
                <div className="md:hidden">
                  <Menu />
                </div>
                <Avator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
