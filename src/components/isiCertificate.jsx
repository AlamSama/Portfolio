import { BsFullscreen } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

function IsiCertificate(props) {
    return (
        <div className="flex items-center gap-2 my-4 lg:block">
            <div className='w-full h-[130px] md:h-[200px] lg:h-[250px]' data-aos="fade-right" data-aos-delay={props.delayScrollGambar}>
                <img src={props.src} alt="" className={`object-cover w-full h-full transition-all duration-500 shadow-sm shadow-teal-400`} />
                <div className='text-white bg-black bg-opacity-50 p-1 absolute right-2 bottom-2 z-50 hover:bg-teal-400 cursor-pointer' onClick={props.handleFullScreen}><BsFullscreen /></div>
            </div>
            <div className="w-full h-[130px] overflow-y-scroll py-1 lg:overflow-auto" data-aos="fade-down" data-aos-delay={props.delayScrollText}>
                <p className='dark:text-white text-sm md:text-xl lg:text-lg'>{props.deskripsi}</p>
            </div>

            {
                props.selectImg && (
                    <div className='fixed z-50 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-75 flex justify-center items-center'>
                        <div className='max-w-screen-lg'>
                            <img src={props.selectImg} alt="" />
                            <div className='text-black bg-white bg-opacity-50 p-1 absolute right-2 top-2 z-50 hover:bg-teal-400 cursor-pointer' onClick={props.handleCloseFullScreen}><GrClose /></div>
                        </div>
                    </div>
                )
            }


        </div>
    )
}


export default IsiCertificate