import React, {useRef} from 'react'
import logo from '../images/logo.svg'
import iconmenu from '../images/icon-menu.svg'
import iconmenuclose from '../images/icon-menu-close.svg'

const Navbar = () => {
    const sidebar = useRef()
    const trans = useRef()

    const openMenu = () => {
        sidebar.current.classList.remove('-right-96')
        sidebar.current.classList.add('right-0')
        trans.current.classList.toggle('hidden')
    }

    const closeMenu = () => {
        sidebar.current.classList.add('-right-96')
        sidebar.current.classList.remove('right-0')
        trans.current.classList.toggle('hidden')
    }


    return (
      
        <nav className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="W" className='w-14' />
            </div>
            
            <div className='md:hidden'>
                <img src={iconmenu} alt="menu" className='md:hidden' onClick={openMenu} />
                <div id="tranparentbg" ref={trans} className='fixed top-0 right-0 w-screen h-screen bg-slate-600/70 z-0 hidden'></div>
                <div id="sidebar" ref={sidebar} className='fixed p-5 w-2/3 top-0 -right-96 max-w-xs bg-off-white md:hidden h-screen pl-7 transition-all z-10'>
                
                    <img src={iconmenuclose} alt="close" className='absolute right-8' onClick={closeMenu} />
                    <ul className='flex flex-col text mt-20 space-y-6'>
                        <li className='font-inter font-normal'>Home</li>
                        <li className='font-inter font-normal'>New</li>
                        <li className='font-inter font-normal'>Popular</li>
                        <li className='font-inter font-normal'>Trending</li>
                        <li className='font-inter font-normal'>Categories</li>
                    </ul>
                </div>
            </div>

            <div className='hidden md:block'>
                <ul className='flex space-x-5'>
                    <li className='font-inter text-grayish-blue font-normal hover:text-soft-orange hover:cursor-pointer'>Home</li>
                    <li className='font-inter text-grayish-blue font-normal hover:text-soft-orange hover:cursor-pointer'>New</li>
                    <li className='font-inter text-grayish-blue font-normal hover:text-soft-orange hover:cursor-pointer'>Popular</li>
                    <li className='font-inter text-grayish-blue font-normal hover:text-soft-orange hover:cursor-pointer'>Trending</li>
                    <li className='font-inter text-grayish-blue font-normal hover:text-soft-orange hover:cursor-pointer'>Categories</li>
                </ul>
            </div>
            
    </nav>
  )
}

export default Navbar