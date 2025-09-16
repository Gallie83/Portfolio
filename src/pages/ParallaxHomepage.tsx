import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import About from './About'
import Projects from './Projects'
import Contact from "./Contact"

import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin)
 
function ParallaxHomepage() {
  const parallaxRef = useRef<IParallax>(null)
  const [nameOpacity, setNameOpacity] = useState(1)
  const [screenType, setScreenType] = useState('laptop')
  const [totalPages, setTotalPages] = useState(3.4)

  // Screen type detection with proper sizing
  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      let newScreenType = 'laptop'
      let newTotalPages = 3.4
      
      if (width >= 1024 && width < 1440) {
        newScreenType = 'laptop' // ThinkPad dimensions
        newTotalPages = 3.4
      } else if (width >= 1440 && width < 1920) {
        newScreenType = 'desktop'
        newTotalPages = 3.45
      } else if (width >= 1920 && height >= 1080) {
        newScreenType = 'large' // 4K+ screens (NestHub Max equivalent)
        newTotalPages = 3.5
      } else {
        newScreenType = 'laptop' 
        newTotalPages = 3.4
      }
      
      setScreenType(newScreenType)
      setTotalPages(newTotalPages)
    }

    window.addEventListener('resize', updateScreenType)
    updateScreenType()

    return () => window.removeEventListener('resize', updateScreenType)
  }, [])

  const getDesktopStyles = () => {
    switch (screenType) {
      case 'laptop':
        return {
          skyHeight: '65%',
          sunScale: 'scale-105',
          mountainTop: '5%',
          nameTop: '10%',
          landscapeHeight: '110vh',
          cloudTop1: '1%',
          cloudTop2: '2%',
          contentOffset: 1,
          aboutOffset: 1,
          projectsOffset: 1.5,
          contactOffset: 2.4
        }
      
      case 'desktop': 
        return {
          skyHeight: '68%',
          sunScale: 'scale-110',
          mountainTop: '8%',
          nameTop: '12%',
          landscapeHeight: '115vh',
          cloudTop1: '2%',
          cloudTop2: '3%',
          contentOffset: 1,
          aboutOffset: 1,
          projectsOffset: 1.6,
          contactOffset: 2.45
        }
      
      case 'large': // NestHub Max and similar large screens
        return {
          skyHeight: '70%',
          sunScale: 'scale-120',
          mountainTop: '12%',
          nameTop: '15%',
          landscapeHeight: '125vh',
          cloudTop1: '4%',
          cloudTop2: '5%',
          contentOffset: 1,
          aboutOffset: 1,
          projectsOffset: 1.7,
          contactOffset: 2.5
        }
      
      default:
        return {
          skyHeight: '65%',
          sunScale: 'scale-105',
          mountainTop: '5%',
          nameTop: '10%',
          landscapeHeight: '110vh',
          cloudTop1: '1%',
          cloudTop2: '2%',
          contentOffset: 1,
          aboutOffset: 1,
          projectsOffset: 1.6,
          contactOffset: 2.4
        }
    }
  }

  const styles = getDesktopStyles()

  // Make Title heading change color to match background after scrolling behind mountains
  useEffect(() => {
    const element = parallaxRef.current
    if (!element) return

    const container = element.container.current
    if (!container) return

    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.7
      const scrollProgress = Math.min(container.scrollTop / scrollThreshold, 1)
      
      // Fade to background color
      const opacity = 1 - scrollProgress
      setNameOpacity(opacity)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // Updated scroll animation with screen-specific offsets
  const scrollToSection = (section: string) => {
    const sectionMap = {
      'home': 0,
      'about': styles.aboutOffset, 
      'projects': styles.projectsOffset,
      'contact': styles.contactOffset
    }
    
    const targetOffset = sectionMap[section as keyof typeof sectionMap]
    
    if (targetOffset !== undefined && parallaxRef.current) {
      const container = parallaxRef.current.container.current
      gsap.to(container, {
        scrollTop: targetOffset * window.innerHeight,
        duration: 3,
        ease: "power2.inOut"
      })
    }
  }
    
  return (
    <Parallax ref={parallaxRef} pages={totalPages} style={{ top: '0', left: '0' }} className='animation bg-[#983122]'>
      {/* Sky background */}
      <ParallaxLayer offset={0} speed={0.1}>
        <div 
          className="fixed left-0 top-0 w-full bg-[url('/assets/parallax-assets/BG.svg')] bg-cover bg-center"
          style={{ height: styles.skyHeight }}
        />
      </ParallaxLayer>

      {/* Sun and clouds */}
      <ParallaxLayer offset={0} speed={0}>
        <div 
          className={`absolute ${styles.sunScale} left-0 top-0 w-full bg-[url('/assets/parallax-assets/sun.svg')] bg-cover bg-center`}
          style={{ height: styles.landscapeHeight }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div 
          className="absolute left-0 w-full bg-[url('/assets/parallax-assets/cloud1.svg')] bg-cover bg-center"
          style={{ 
            top: styles.cloudTop1,
            height: styles.landscapeHeight 
          }}
        />
        <div 
          className="absolute left-0 w-full bg-[url('/assets/parallax-assets/cloud2.svg')] bg-cover bg-center"
          style={{ 
            top: styles.cloudTop2,
            height: styles.landscapeHeight 
          }}
        />
      </ParallaxLayer>

      {/* Back mountains */}
      <ParallaxLayer offset={0} speed={0.2}>
        <div 
          className="absolute left-0 z-10 w-full bg-[url('/assets/parallax-assets/mountain5.svg')] bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight 
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.25}>
        <div 
          className="absolute left-0 z-10 w-full bg-[url('/assets/parallax-assets/mountain4.svg')] bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight 
          }}
        />
      </ParallaxLayer>

      {/* Sidenav */}
      <ParallaxLayer className='pointer-events-none' offset={0} sticky={{start: 0, end: totalPages}}>
        <Navbar onNavigate={scrollToSection} />
      </ParallaxLayer>

      {/* Name heading */}
      <ParallaxLayer offset={0} speed={-1.2}>
        <div className="absolute left-0 top-0 h-full w-full z-20">
          <h1 
            className="absolute text-7xl text-center w-full text-white drop-shadow-lg" 
            style={{
              fontFamily: 'Ephesis', 
              color: `rgba(255, 255, 255, ${nameOpacity})`,
              top: styles.nameTop
            }}
          >
            Kevin Gallagher
          </h1>
        </div>
      </ParallaxLayer>

      {/* Front mountains */}
      <ParallaxLayer offset={0} speed={0.3}>
        <div 
          className="absolute left-0 z-40 w-full bg-[url('/assets/parallax-assets/mountain3.svg')] bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight 
          }}
        />
        <div 
          className="absolute left-0 z-40 w-full bg-[url('/assets/parallax-assets/mountain2.svg')] bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight 
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div 
          className="absolute left-0 z-40 w-full bg-[url('/assets/parallax-assets/mountain1.svg')] bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight 
          }}
        />
      </ParallaxLayer>

      {/* Sea and boats */}
      <ParallaxLayer offset={0} speed={0.4}>
        <div 
          className="absolute left-0 w-full bg-[url('/assets/parallax-assets/sea.svg')] bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight 
          }}
        />
      </ParallaxLayer>

      {/* Beach layers (doubled) */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div 
          className="absolute left-0 top-0 w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover bg-center filter brightness-125 saturate-100"
          style={{ height: `calc(${styles.landscapeHeight} + 15vh)` }}
        />
        <div 
          className="absolute left-0 top-0 w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover bg-center filter brightness-125 saturate-100 mb-4"
          style={{ height: `calc(${styles.landscapeHeight} + 35vh)` }}
        />
      </ParallaxLayer>

      {/* Content Sections */}
      <ParallaxLayer offset={styles.contentOffset} speed={1}>
        <div className="relative z-50 bg-gradient-to-b bg-[#983122]">
          {/* About section */}
          <section id="about" className="min-h-screen py-8">
            <About />
          </section>

          {/* Projects section */}
          <section id="projects" className="min-h-screen py-8">
            <Projects />
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen pb-8">
            <Contact />
          </section>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default ParallaxHomepage