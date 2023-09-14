import { useState, useEffect, useRef } from 'react'
import Header from './pages/header'
import About from './pages/about'
import Certificate from './pages/certificate'
import Project from './pages/project'
import Footer from './pages/footer'

import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {

  useEffect(()=>{
    AOS.init()
  }, [])


  const refHome = useRef(null)
  const refAbout = useRef(null)
  const refCertificate = useRef(null)
  const refProject = useRef(null)

  const [openBar, setOpenBar] = useState(false)


  const hanldeLink = (ref) => {
      ref.current?.scrollIntoView({behavior : 'smooth'})
      setOpenBar(false)
  }

  return (
    <div className='dark:bg-black bg-gray-200 overflow-hidden' ref={refHome}>
      <Header handleLink={hanldeLink} home={refHome} about={refAbout} certificate={refCertificate} project={refProject} openBar={openBar} setOpenBar={setOpenBar} />
      <About ref={refAbout} />
      <Certificate ref={refCertificate} />
      <Project ref={refProject} />
      <Footer />
    </div>
  )
}

export default App
