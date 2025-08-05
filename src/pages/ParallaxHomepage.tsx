import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import About from './About'
import Projects from './Projects'
import Contact from "./Contact"
 
function ParallaxHomepage() {

  const parallaxRef = useRef<IParallax>(null)
  const [nameOpacity, setNameOpacity] = useState(1)
  const isScrollingRef = useRef(false) // Track if we're programmatically scrolling

  // Make Title heading change color to match background after scrolling behind mountains
  useEffect(() => {
    const element = parallaxRef.current
    if (!element) return

    const container = element.container.current
    if (!container) return

    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.6
      const scrollProgress = Math.min(container.scrollTop / scrollThreshold, 1)
      
      // Fade from to background color
      const opacity = 1 - scrollProgress
      setNameOpacity(opacity)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // TODO: Fix scroll animations 'bounce' that occurs halfway through the scroll
  const scrollToSection = ( section: string ) => {
    const sectionMap = {
      'home': 0,
      'about': 1, 
      'projects': 1.5,
      'contact': 2.4
    }

    const targetOffset = sectionMap[section as keyof typeof sectionMap]

    if(targetOffset !== undefined && parallaxRef.current) {
      isScrollingRef.current = true

      parallaxRef.current.scrollTo(targetOffset)

      setTimeout(() => {
        isScrollingRef.current = false
      }, 6000)
    }
  };
    
  return (
    // TODO: Add dynamic page sizing depending on users screen size
      <Parallax ref={parallaxRef} pages={3.5} style={{ top: '0', left: '0' }} className='animation bg-[#983122]'>
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
          <div className="absolute left-0 top-[5%] h-[110vh] z-10 w-full bg-[url('/assets/parallax-assets/mountain4.svg')] bg-cover"></div>
        </ParallaxLayer>

        {/* Sidenav */}
        <ParallaxLayer className='pointer-events-none' offset={0} sticky={{start: 0, end: 4}}>
          <Navbar onNavigate={scrollToSection} />
        </ParallaxLayer>

        {/* Name heading */}
        <ParallaxLayer offset={0} speed={-1.2}>
            <div className="absolute left-0 top-0 h-full w-full z-20">
              <h1 
                className="absolute text-7xl text-center top-[10%] w-full text-white drop-shadow-lg" 
                style={{fontFamily: 'Ephesis', color: `rgba(255, 255, 255, ${nameOpacity})`}}>
                Kevin Gallagher
              </h1>
            </div>
        </ParallaxLayer>

        {/* More mountains */}
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="absolute left-0 top-[5%] h-[110vh] z-40 w-full bg-[url('/assets/parallax-assets/mountain3.svg')] bg-cover"></div>
          <div className="absolute left-0 top-[5%] h-[110vh] z-40 w-full bg-[url('/assets/parallax-assets/mountain2.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="absolute left-0 top-[5%] h-[105vh] z-40 w-full bg-[url('/assets/parallax-assets/mountain1.svg')] bg-cover"></div>
        </ParallaxLayer>

        {/* Sea and boats */}
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="absolute left-0 top-[5%] h-full w-full bg-[url('/assets/parallax-assets/sea.svg')] bg-cover"></div>
        </ParallaxLayer>

        {/* Beach layers (doubled) */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="absolute left-0 top-0 h-[125vh] w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover filter brightness-125 saturate-100"></div>

          <div className="absolute left-0 top-0 h-[145vh] w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover filter brightness-125 saturate-100 mb-4"></div>
        </ParallaxLayer>

        {/* About section */}
        <ParallaxLayer offset={1} speed={1}>
          <div className="relative z-50 min-h-screen">
            <About />
          </div>
        </ParallaxLayer>

        {/* Projects section */}
        <ParallaxLayer offset={1.9} speed={1}>
          <Projects />
        </ParallaxLayer>

        {/* Contact Section */}
        <ParallaxLayer offset={2.9} speed={1}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
  )
}

export default ParallaxHomepage