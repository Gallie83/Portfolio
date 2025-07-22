import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from './About'
import Projects from './Projects'
import Contact from "./Contact"
import { useEffect, useState } from 'react';

function ParallaxHomepage() {

  
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const shouldBeVisible = currentScroll < window.innerHeight

      console.log('Scroll:', currentScroll, 'ViewHeight:', window.innerHeight,'Visible:', shouldBeVisible)

      setIsVisible(shouldBeVisible)
    }

    window.addEventListener('scroll', handleScroll, { passive: true})
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if(!isVisible) {
    return null
  }

  
  return (
    <>
      <Parallax pages={4} style={{ top: '0', left: '0' }} className='animation bg-[#983122]'>
        {/* Sky background */}
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="fixed left-0 top-0 h-[65%] w-full bg-[url('/assets/parallax-assets/BG.svg')] bg-cover"></div>
        </ParallaxLayer>

        {/* Sun and clouds */}
        <ParallaxLayer offset={0} speed={0}>
          <div className="absolute scale-105 left-0 top-0 h-[110vh] w-full bg-[url('/assets/parallax-assets/sun.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="absolute left-0 top-[1%] h-[110vh] w-full bg-[url('/assets/parallax-assets/cloud1.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="absolute left-0 top-[2%] h-[110vh] w-full bg-[url('/assets/parallax-assets/cloud2.svg')] bg-cover"></div>
        </ParallaxLayer>

        {/* Mountain */}
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="absolute left-0 top-[5%] h-[110vh] z-10 w-full bg-[url('/assets/parallax-assets/mountain5.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="absolute left-0 top-[5%] h-[110vh] z-30 w-full bg-[url('/assets/parallax-assets/mountain4.svg')] bg-cover"></div>
        </ParallaxLayer>

        {/* Name heading */}
        <ParallaxLayer offset={0} speed={-0.8}>
          <div className="absolute left-0 top-0 h-full w-full">
            <h1 className="absolute text-7xl text-center top-[10%] w-full text-white drop-shadow-lg" style={{fontFamily: 'Ephesis'}}>
              Kevin Gallagher
            </h1>
          </div>
        </ParallaxLayer>

        {/* More mountains */}
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="absolute left-0 top-[5%] h-[110vh] z-40 w-full bg-[url('/assets/parallax-assets/mountain3.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="absolute left-0 top-[5%] h-[110vh] z-50 w-full bg-[url('/assets/parallax-assets/mountain2.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="absolute left-0 top-[5%] h-[105vh] z-60 w-full bg-[url('/assets/parallax-assets/mountain1.svg')] bg-cover"></div>
        </ParallaxLayer>

        {/* Sea and boats */}
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="absolute left-0 top-[5%] h-full w-full bg-[url('/assets/parallax-assets/sea.svg')] bg-cover"></div>
        </ParallaxLayer>

        {/* Beach layers (doubled) */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="absolute left-0 top-0 h-[125vh] w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover filter brightness-125 saturate-100"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="absolute left-0 top-0 h-[145vh] w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover filter brightness-125 saturate-100"></div>
        </ParallaxLayer>

        {/* About section */}
        <ParallaxLayer offset={1} speed={1} className='bg-[#7a271b]'>
          <About />
        </ParallaxLayer>

        {/* Projects section */}
        <ParallaxLayer offset={2} speed={1}>
          <Projects />
        </ParallaxLayer>

        {/* Contact Section */}
        <ParallaxLayer offset={3} speed={1}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </> 
  )
}

export default ParallaxHomepage