import c2 from '../assets/c1.jpg'
import c1 from '../assets/c2.jpg'
import cs from '../assets/coomingSoon.png'
import vsga from '../assets/vsga.jpg'

import Gambar from '../components/isiCertificate'

import { forwardRef, useState } from 'react'

function Certificate({ }, ref) {

    const [selectImg, setSelectImg] = useState(null)
    const handleFullScreen = (imgId) => {
        setSelectImg(imgId)
    }
    const handleCloseFullScreen = () => {
        setSelectImg(null)
    }


    return (
        <div className='pt-28 select-none lg:px-24' ref={ref}>
            <h3 className="text-center font-bold text-xl dark:text-white mb-2 md:text-4xl" >Certificate</h3>
            <div className='py-1 lg:py-12 lg:grid lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4 md:px-10 lg:px-0'>
                <Gambar handleFullScreen={() => handleFullScreen(vsga)} selectImg={selectImg} handleCloseFullScreen={handleCloseFullScreen} delayScrollGambar="" delayScrollText="" src={vsga} deskripsi="certificate Ini didapat dari pelatihan JUNIOR WEB DEVELOPER yang diselenggarakan oleh BPSDM KOMINFO dan Mitra INSTITUT TEKNOLOGI SEPULUH NOPEMBER" />
                <Gambar handleFullScreen={() => handleFullScreen(c1)} selectImg={selectImg} handleCloseFullScreen={handleCloseFullScreen} delayScrollGambar="150" delayScrollText="150" src={c1} deskripsi="certificate Ini didapat dari PELATIHAN KERJA LAPANGAN Sebagi FrontEnd Developer Selama 6 Bulan Menggunakan Teknologi React Native di PT. BITNIAGA CIPTA GEMILANG" />
                <Gambar handleFullScreen={() => handleFullScreen(c2)} selectImg={selectImg} handleCloseFullScreen={handleCloseFullScreen} delayScrollGambar="300" delayScrollText="300" src={c2} deskripsi="certificate ini didapat dari pelatihan FRAMEWORK LARAVEL Yang Dilatih oleh Guru Tamu dari Pt. MINARSIHTECH dengan tugas Project Akhir Website Ecommerce" />
                <Gambar handleFullScreen={() => handleFullScreen(cs)} selectImg={selectImg} handleCloseFullScreen={handleCloseFullScreen} delayScrollGambar="" delayScrollText="" src={cs} deskripsi="certificate ini Sedang proses" />
            </div>
        </div>
    )
}


export default forwardRef(Certificate)