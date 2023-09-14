import { useTypewriter, Cursor } from "react-simple-typewriter"


import Logo1 from '../assets/aku.png'

import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TbBrandGithub, TbPolygon } from 'react-icons/tb'
import { MdOutlineSaveAlt } from 'react-icons/md'

function Hero() {

    const [text] = useTypewriter({
        words: ['FullStack Developer', 'FrontEnd Developer', 'BackEnd Developer'],
        loop: false,
        delaySpeed: 1000,
        typeSpeed: 100
    })

    return (
        <>
            <div className="dark:bg-black w-full h-[100vh]">


                <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:w-full">

                    <div className="w-full h-[310px] md:w-full md:h-full md:flex md:justify-center md:mt-6">
                        <img src={Logo1} alt="" className="md:w-[600px] md:h-[600px] lg:w-[650px] lg:h-[650px] 2xl:w-[750px] 2xl:h-[750px]" />
                    </div>

                    <div className="w-full text-center lg:text-left lg:pl-24 2xl:pl-40 2xl:pb-0 lg:pb-12 font-extrabold dark:text-white font-poppins">
                        <h3 className="md:text-xl 2xl:text-2xl text-teal-400">Hi There</h3>
                        <h3 className="text-4xl md:text-7xl 2xl:text-8xl 2xl:mt-4">I'm Restu Alam</h3>
                        <p className="text-2xl md:text-4xl 2xl:text-5xl text-left pl-8 lg:pl-0 mt-1 lg:mt-4 2xl:mt-8 text-teal-400"><span className="dark:text-white">I'm a</span> {text}<Cursor cursorColor='teal' cursorBlinking='true' /></p>
                        <p className="mt-4 md:text-xl 2xl:text-2xl lg:mt-5 font-normal 2xl:mt-8">Here You Will Find My Works Reflecting Dedication And Expertise In Developing Technology Solutions</p>


                        <div className="flex justify-center lg:justify-start items-center gap-9 lg:gap-8 text-teal-40 text-3xl mt-6 md:text-4xl md:mt-12 text-teal-400">
                            <HiOutlineMail className="cursor-pointer hover:bg-teal-700 transition-all rounded-full border-2 border-teal-400 p-1" />
                            <AiOutlineInstagram className="cursor-pointer hover:bg-teal-700 transition-all rounded-full border-2 border-teal-400 p-1" />
                            <TbBrandGithub className="cursor-pointer hover:bg-teal-700 transition-all rounded-full border-2 border-teal-400 p-1" />
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <div className="bg-teal-400 px-8 py-2 md:py-3 text-black flex items-center gap-2 text-xl rounded-xl mt-4 md:mt-6 cursor-pointer relative after:bg-gradient-to-r after:from-teal-700 after:to-teal-400 after:w-0 after:transition-all hover:after:w-full after:h-full after:rounded-xl after:absolute after:left-0">
                                <p className="z-10">Resume</p>
                                <MdOutlineSaveAlt className="z-10" />
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Hero



{/* <div className="absolute lg:right-32 lg:bottom-[25vh] lg:w-[450px] bg-teal-400 h-[350px]" style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 0)' }}>
                    <img src={Logo1} alt="" className="lg:w-[359px] lg:h-[481px] lg:absolute lg:-top-28 lg:right-[13%]" />
                </div>

                <div className="absolute lg:right-32 lg:bottom-[20vh] lg:w-[450px] h-[350px] bg-teal-400" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}>
                    <img src={Logo1} alt="" className="lg:w-[359px] lg:h-[481px] lg:absolute lg:bottom-0 lg:right-[13%]" />
                </div> */}


                // <div className="lg:absolute lg:bottom-64 lg:left-16 lg:flex lg:justify-between lg:items-center lg:gap-24 lg:px-3">

                //     <div className="text-white text-3xl flex items-center gap-1 rounded-xl shadow-md shadow-black bg-teal-600 cursor-pointer py-2 px-6 relative border-2 border-teal-400 after:contnet-[''] after:bg-gradient-to-r after:from-teal-700 after:to-teal-400 after:w-0 hover:after:w-full after:transition-all after:h-full after:rounded-lg lg:after:rounded-xl after:absolute after:left-0">
                //         <p className="z-10">Resume</p>
                //         <MdOutlineSaveAlt className="z-10" />
                //     </div>

                //     <div className="text-white flex justify-center gap-4 text-4xl">
                //         <HiOutlineMail className="cursor-pointer hover:bg-teal-700 transition-all border-2 border-teal-400 rounded-full p-1" />
                //         <AiOutlineInstagram className="cursor-pointer hover:bg-teal-700 transition-all border-2 border-teal-400 rounded-full p-1" />
                //         <TbBrandGithub className="cursor-pointer hover:bg-teal-700 transition-all border-2 border-teal-400 rounded-full p-1" />
                //     </div>

                // </div>