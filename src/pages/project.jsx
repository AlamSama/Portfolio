import IsiProject from '../components/isiProject'


import gambar from '../assets/coomingSoon.png'
import p1 from '../assets/project/20230702_162327.png'
import p2 from '../assets/project/20230914_174548.jpg'

import { forwardRef } from 'react'

function Project(props, ref) {

    return (
        <div className='pt-28 select-none md:px-10' ref={ref}>
            <h3 className="text-center font-bold text-xl dark:text-white mb-2 md:text-4xl">Project</h3>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-2 lg:justify-center mt-12">
                <IsiProject link='https://alamsama.github.io/anime/' gambar={p1} judul="Website Streaming Anime" title="Website Streaming anime, Website Ini Dibuat mengunakan teknologi ReactJs dan TailwindCss untuk data website ini menggunakan API Gogoanime" />
                <IsiProject link='https://alamsama.github.io/demera/' gambar={p2} judul="Website Portfolio" title="Website Portfolio Sebuah Tempat yang memberikan semua informasi mengenai bagaiamana cara kerja tempat itu dan informasi apa yang dia jual" />
                <IsiProject gambar={gambar} judul="Website Ecommerce" title="Website Ecommerce, Website Ini Dibuat mengunakan teknologi Laravel dan TailwindCss" />
                <IsiProject gambar={gambar} judul="Website Landing Page Voly" title="Website Landing Page Voly, Website Ini Dibuat mengunakan teknologi BackEnd NodeJs dan FrontEnd ReactJs" />
            </div>
        </div>
    )
}


export default forwardRef(Project)