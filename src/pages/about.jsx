import { SiLaravel } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { DiJqueryLogo } from 'react-icons/di'
import { SiReact } from 'react-icons/si'

import { forwardRef, useEffect } from 'react'


const About = forwardRef((props, ref) => {

    return (
        <div className="px-4 pt-28 lg:px-24 2xl:px-28 dark:text-white font-poppins"  ref={ref}>
            <h3 className="text-center font-bold text-xl dark:text-white mb-2 md:text-4xl" data-aos="fade-down" >About Me</h3>
            <p className="text-center text-sm md:text-xl mt-12" data-aos="fade-up" data-aos-delay="50" >Hallo Saya Seorang Web Developer. Saya Memiliki Kecintaan yang mendalam terhadap teknologi, selain itu saya juga memiliki pengetahuan dan keterampilan dari</p>



            <div className='py-20 lg:px-8 dark:text-teal-400'>
                <div className="grid grid-cols-9">
                    <div className="col-span-4 flex justify-center" data-aos-duration="800" data-aos="fade-right">
                        <SiLaravel className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] text-red-700 animate-tb' />
                    </div>

                    <div className='col-span-1 flex justify-center relative'>
                        <div className="bg-teal-400 h-full w-1 lg:w-3"></div>
                        <div className="dark:bg-white bg-teal-400 h-3 w-3 lg:w-5 lg:h-5 absolute top-[43%] rotate-45"></div>
                        <div className="bg-teal-400 h-3 w-3 lg:w-5 lg:h-5 absolute top-0"></div>
                    </div>

                    <div className="col-span-4 w-full flex justify-center items-center md:text-2xl lg:text-3xl" data-aos-duration="800" data-aos="fade-left">
                        <h3>Laravel</h3>
                    </div>

                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-4 w-full flex justify-center items-center md:text-2xl lg:text-3xl" data-aos-duration="800" data-aos="fade-right" data-aos-delay="50">
                        <h3>TailwindCss</h3>
                    </div>
                    <div className='col-span-1 flex justify-center relative'>
                        <div className="bg-teal-400 h-full w-1 lg:w-3"></div>
                        <div className="dark:bg-white bg-teal-400 h-3 w-3 lg:w-5 lg:h-5 absolute top-[43%] rotate-45"></div>
                    </div>
                    <div className="col-span-4 flex justify-center" data-aos-duration="800" data-aos="fade-left" data-aos-delay="50">
                        <SiTailwindcss className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] text-sky-400 animate-tb' />
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-4 flex justify-center" data-aos-duration="800" data-aos="fade-right" data-aos-delay="100">
                        <SiBootstrap className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] text-violet-600 animate-tb' />
                    </div>

                    <div className='col-span-1 flex justify-center relative'>
                        <div className="bg-teal-400 h-full w-1 lg:w-3"></div>
                        <div className="dark:bg-white bg-teal-400 h-3 w-3 lg:w-5 lg:h-5 absolute top-[43%] rotate-45"></div>
                    </div>

                    <div className="col-span-4 w-full flex justify-center items-center md:text-2xl lg:text-3xl" data-aos-duration="800" data-aos="fade-left" data-aos-delay="100">
                        <h3>Bootstrap</h3>
                    </div>

                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-4 w-full flex justify-center items-center md:text-2xl lg:text-3xl" data-aos-duration="800" data-aos="fade-right" data-aos-delay="150">
                        <h3>Jquery</h3>
                    </div>
                    <div className='col-span-1 flex justify-center relative'>
                        <div className="bg-teal-400 h-full w-1 lg:w-3"></div>
                        <div className="dark:bg-white bg-teal-400 h-3 w-3 lg:w-5 lg:h-5 absolute top-[43%] rotate-45"></div>
                        <div className="bg-teal-400 h-3 w-3 lg:w-5 lg:h-5 absolute bottom-0"></div>
                    </div>
                    <div className="col-span-4 flex justify-center" data-aos-duration="800" data-aos="fade-left" data-aos-delay="150">
                        <DiJqueryLogo className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] text-sky-700 animate-tb' />
                    </div>
                </div>

                <div className="grid grid-cols-9">
                    <div className="col-span-4 flex justify-center" data-aos-duration="800" data-aos="fade-right" data-aos-delay="100">
                        <SiReact className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] text-sky-400 animate-tb' />
                    </div>

                    <div className='col-span-1 flex justify-center relative'>
                        <div className="bg-teal-400 h-full w-1 lg:w-3"></div>
                        <div className="dark:bg-white bg-teal-400 h-3 w-3 lg:w-5 lg:h-5 absolute top-[43%] rotate-45"></div>
                    </div>

                    <div className="col-span-4 w-full flex justify-center items-center md:text-2xl lg:text-3xl" data-aos-duration="800" data-aos="fade-left" data-aos-delay="100">
                        <h3>React Js</h3>
                    </div>

                </div>

            </div>


            <p className='text-center text-sm md:text-xl' data-aos="fade-up">Jika anda tertarik untuk berkolaborasi atau ingin mengetahui lebih lanjut tentang saya, jangan ragu untuk menghubungi. Terimakasih telah berkunjung ke portfolio milik saya.</p>


        </div>
    )
})

export default About