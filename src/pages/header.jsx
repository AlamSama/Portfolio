import { useState, useEffect } from 'react'


import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'

import Hero from '../components/hero'
import ButtonToTop from '../components/buttonToTop'



function Header(props) {


  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? '' : 'dark')
  }


  const [headerfix, setHeaderFix] = useState(false)

  useEffect(() => {

    const handleHeader = () => {
      if (window.pageYOffset > 0) {
        setHeaderFix(true)
      } else {
        setHeaderFix(false)
      }
    }

    window.addEventListener('scroll', handleHeader)

    return () => {
      window.removeEventListener('scroll', handleHeader)
    }

  }, [])



  return (
    <>
      <div className={`bg-teal-400 dark:bg-black z-50 lg:text-lg flex items-center justify-around py-4 ${headerfix === true ? 'fixed top-0 right-0 left-0 shadow-md shadow-teal-400' : ''}`}>
        
        <div className="logo font-bold dark:text-teal-400 text-white text-xl lg:text-4xl">
          <h3>Restu Alam</h3>
        </div>


        <nav className={`${props.openBar ? 'py-4 h-[230px]' : 'h-0'} lg:static lg:h-[44px] absolute left-0 right-0 top-11 z-10 overflow-hidden transition-all duration-300 px-2 bg-teal-400 dark:bg-black lg:bg-transparent lg:dark:bg-transparent`}>
          <ul className='text-white lg:flex lg:justify-between lg:h-full lg:items-center lg:gap-6'>
            <li className='px-1 py-1 rounded-md border-2 border-transparent hover:shadow-sm dark:hover:shadow-teal-400 dark:hover:text-teal-400 hover:border-2 dark:hover:border-teal-400 hover:border-white hover:shadow-white cursor-pointer'>Home</li>
            <li className='px-1 py-1 mt-3 lg:mt-0 rounded-md border-2 border-transparent hover:shadow-sm dark:hover:shadow-teal-400 dark:hover:text-teal-400 hover:border-2 dark:hover:border-teal-400 hover:border-white hover:shadow-white cursor-pointer' onClick={() => props.handleLink(props.about)} >About</li>
            <li className='px-1 py-1 mt-3 lg:mt-0 rounded-md border-2 border-transparent hover:shadow-sm dark:hover:shadow-teal-400 dark:hover:text-teal-400 hover:border-2 dark:hover:border-teal-400 hover:border-white hover:shadow-white cursor-pointer' onClick={() => props.handleLink(props.certificate)} >Certificate</li>
            <li className='px-1 py-1 mt-3 lg:mt-0 rounded-md border-2 border-transparent hover:shadow-sm dark:hover:shadow-teal-400 dark:hover:text-teal-400 hover:border-2 dark:hover:border-teal-400 hover:border-white hover:shadow-white cursor-pointer' onClick={() => props.handleLink(props.project)} >Project</li>
          </ul>
        </nav>


        <div className={`w-9 flex items-center justify-center py-[2px] rounded-xl text-yellow-300 transition-all cursor-pointer ${theme === 'dark' ? 'bg-teal-600' : 'bg-white'}`} onClick={handleTheme}>
          <BsFillMoonStarsFill className={`transition-all ${theme === 'dark' ? 'translate-x-3 opacity-0' : ''}`} />
          <BsFillSunFill className={`transition-all ${theme != 'dark' ? '-translate-x-3 opacity-0' : ''}`} />
        </div>


        <div className="bar lg:hidden" onClick={() => props.setOpenBar((prev) => !prev)}>
          <div className={`${props.openBar ? '-rotate-45 translate-y-[6px]' : ''} transition-all w-6 h-[2px] bg-white`}></div>
          <div className={`${props.openBar ? 'translate-x-12 opacity-0' : ''} transition-all w-4 h-[2px] translate-x-[7px] mt-1 bg-white`}></div>
          <div className={`${props.openBar ? 'rotate-45 -translate-y-[6px]' : ''} transition-all w-6 h-[2px] mt-1 bg-white`}></div>
        </div>

       


      </div>



      <Hero />
      <ButtonToTop />
    </>
  )
}

export default Header;