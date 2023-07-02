import { useEffect, useState } from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

function ButtonToTop(){

    const [showButton, setShowButton] = useState(false)

    useEffect(()=>{
        const handleShow = () => {
            if(window.pageYOffset > 500){
                setShowButton(true)
            }else{
                setShowButton(false)
            }
        }


        window.addEventListener('scroll', handleShow)

        return () => {
            window.removeEventListener('scroll', handleShow)
        }

    }, [])


    const handleToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


    return(
        <div className='bg-teal-400 fixed bottom-6 right-6 text-5xl rounded-full shadow-sm shadow-teal-400 z-50 cursor-pointer'>
            {showButton &&(
                <BsFillArrowUpCircleFill onClick={handleToTop} />
            )}
        </div>
    )
}


export default ButtonToTop