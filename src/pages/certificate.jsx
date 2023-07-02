import c2 from '../assets/c1.jpg'
import c1 from '../assets/c2.jpg'
import cs from '../assets/coomingSoon.png'

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
        <div className='pt-28 select-none' ref={ref}>
            <h3 className="text-center font-bold text-xl dark:text-white mb-2 lg:text-4xl" >Certificate</h3>
            <div className='py-1 lg:grid lg:grid-cols-3 lg:gap-3'>
                <Gambar handleFullScreen={() => handleFullScreen(c1)} selectImg={selectImg} handleCloseFullScreen={handleCloseFullScreen} delayScrollGambar="" delayScrollText="" src={c1} deskripsi="certificate Ini didapat dari pelatihan Kerja Lapangan Sebagi FrontEnd Developer Selama 6 Bulan Menggunakan Teknologi React Native" />
                <Gambar handleFullScreen={() => handleFullScreen(c2)} selectImg={selectImg} handleCloseFullScreen={handleCloseFullScreen} delayScrollGambar="150" delayScrollText="150" src={c2} deskripsi="certificate ini didapat dari pelatihan Framework Laravel Yang Dilatih oleh Guru Tamu Pt. MinarsihTech dengan tugas Project Akhir Website Ecommerce" />
                <Gambar handleFullScreen={() => handleFullScreen(cs)} selectImg={selectImg} handleCloseFullScreen={handleCloseFullScreen} delayScrollGambar="300" delayScrollText="300" src={cs} deskripsi="certificate ini Sedang Dicari" />
            </div>
        </div>
    )
}


export default forwardRef(Certificate)