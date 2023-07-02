import IsiProject from '../components/isiProject'


import gambar from '../assets/coomingSoon.png'
import p1 from '../assets/project/20230702_162327.png'

import { forwardRef } from 'react'

function Project(props, ref) {

    return (
        <div className='pt-28 select-none' ref={ref}>
            <h3 className="text-center font-bold text-xl dark:text-white mb-2 lg:text-4xl">Project</h3>
            <div className="lg:grid lg:grid-cols-3 lg:gap-2 lg:justify-center">
                <IsiProject link='https://alamsama.github.io/anime/' gambar={p1} judul="Website Streaming Anime" title="Website Streaming anime, Website Ini Dibuat mengunakan teknologi ReactJs dan TailwindCss untuk data website ini menggunakan API Gogoanime" />
                <IsiProject gambar={gambar} judul="Website Booking Tiket Bioskop" title="Website Booking Tiket Bioskop, Website Ini Dibuat mengunakan teknologi Laravel dan TailwindCss" />
                <IsiProject gambar={gambar} judul="Website Ecommerce" title="Website Ecommerce, Website Ini Dibuat mengunakan teknologi Laravel dan TailwindCss" />
                <IsiProject gambar={gambar} judul="Website Landing Page Voly" title="Website Landing Page Voly, Website Ini Dibuat mengunakan teknologi BackEnd NodeJs dan FrontEnd ReactJs" />
            </div>
        </div>
    )
}


export default forwardRef(Project)