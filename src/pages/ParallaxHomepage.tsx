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
  const [screenType, setScreenType] = useState('desktop')

  // Track screen dimensions and set breakpoints
  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      if (width < 768) {
        setScreenType('mobile')
      } else if (width >= 768 && width < 1024) {
        setScreenType('tablet')
      } else if (width >= 1024 && width < 1440) {
        setScreenType('laptop') // Local ThinkPad baseline
      } else if (width >= 1440 && width < 1920) {
        setScreenType('desktop')
      } else if (width >= 1920 && height >= 1080) {
        setScreenType('large') // Nest Hub Max, 4K, etc.
      } else {
        setScreenType('desktop')
      }
    }

    window.addEventListener('resize', updateScreenType)
    updateScreenType()

    return () => window.removeEventListener('resize', updateScreenType)
  }, [])

  // Manual positioning adjustments per screen type to maintain visual consistency
  const getBreakpointStyles = () => {
    switch (screenType) {
      case 'mobile':
        return {
          mountainTop: '-5%',
          sunScale: 85,
          nameTop: '8%',
          landscapeHeight: '120vh',
          skyHeight: '60%',
          cloudTop1: '-1%',
          cloudTop2: '0%',
          // Hybrid approach - different strategy per element
          sunStrategy: 'contain', 
          cloudStrategy: 'cover-center', 
          mountainStrategy: 'cover-center', 
          seaStrategy: 'cover-center', 
          beachStrategy: 'cover' 
        }
      
      case 'tablet':
        return {
          mountainTop: '2%',
          sunScale: 95,
          nameTop: '9%',
          landscapeHeight: '115vh',
          skyHeight: '63%',
          cloudTop1: '0%',
          cloudTop2: '1%',
          sunStrategy: 'cover',
          cloudStrategy: 'cover',
          mountainStrategy: 'cover',
          seaStrategy: 'cover',
          beachStrategy: 'cover'
        }
      
      case 'laptop':
        return {
          mountainTop: '5%',
          sunScale: 105,
          nameTop: '10%',
          landscapeHeight: '110vh',
          skyHeight: '65%',
          cloudTop1: '1%',
          cloudTop2: '2%',
          sunStrategy: 'cover',
          cloudStrategy: 'cover',
          mountainStrategy: 'cover',
          seaStrategy: 'cover',
          beachStrategy: 'cover'
        }
      
      case 'desktop':
        return {
          mountainTop: '8%',
          sunScale: 110,
          nameTop: '12%',
          landscapeHeight: '115vh',
          skyHeight: '68%',
          cloudTop1: '2%',
          cloudTop2: '3%',
          sunStrategy: 'cover',
          cloudStrategy: 'cover',
          mountainStrategy: 'cover',
          seaStrategy: 'cover',
          beachStrategy: 'cover'
        }
      
      case 'large': // Nest Hub Max, 4K+
        return {
          mountainTop: '12%',
          sunScale: 120,
          nameTop: '15%',
          landscapeHeight: '125vh',
          skyHeight: '70%',
          cloudTop1: '4%',
          cloudTop2: '5%',
          sunStrategy: 'cover',
          cloudStrategy: 'cover',
          mountainStrategy: 'cover',
          seaStrategy: 'cover',
          beachStrategy: 'cover'
        }
      
      default:
        return {
          mountainTop: '5%',
          sunScale: 105,
          nameTop: '10%',
          landscapeHeight: '110vh',
          skyHeight: '65%',
          cloudTop1: '1%',
          cloudTop2: '2%',
          sunStrategy: 'cover',
          cloudStrategy: 'cover',
          mountainStrategy: 'cover',
          seaStrategy: 'cover',
          beachStrategy: 'cover'
        }
    }
  }

  const styles = getBreakpointStyles()

  // Title opacity effect
  useEffect(() => {
    const element = parallaxRef.current
    if (!element) return

    const container = element.container.current
    if (!container) return

    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * (screenType === 'mobile' ? 0.6 : 0.7)
      const scrollProgress = Math.min(container.scrollTop / scrollThreshold, 1)
      const opacity = 1 - scrollProgress
      setNameOpacity(opacity)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [screenType])

  // Smooth scroll navigation
  const scrollToSection = (section: string) => {
    const sectionMap = {
      'home': 0,
      'about': 1, 
      'projects': 1.5,
      'contact': 2.4
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

  // Responsive font size based on screen type
  const getNameFontSize = () => {
    if (screenType === 'mobile') return 'text-4xl sm:text-5xl'
    return 'text-7xl' // Keep original desktop size for all larger screens
  }
    
  return (
    <Parallax ref={parallaxRef} pages={3.5} style={{ top: '0', left: '0' }} className='animation bg-[#983122]'>
      {/* Sky background */}
      <ParallaxLayer offset={0} speed={0.1}>
        <div 
          className="fixed left-0 top-0 w-full bg-[url('/assets/parallax-assets/BG.svg')] bg-cover"
          style={{ height: styles.skyHeight }}
        />
      </ParallaxLayer>

      {/* Sun */}
      <ParallaxLayer offset={0} speed={0}>
        <div 
          className="absolute left-0 top-0 w-full bg-[url('/assets/parallax-assets/sun.svg')] bg-cover"
          style={{ 
            height: styles.landscapeHeight,
            transform: `scale(${styles.sunScale / 100})`
          }}
        />
      </ParallaxLayer>

      {/* Clouds */}
      <ParallaxLayer offset={0} speed={0.1}>
        <div 
          className="absolute left-0 w-full bg-[url('/assets/parallax-assets/cloud1.svg')] bg-cover"
          style={{ 
            top: styles.cloudTop1,
            height: styles.landscapeHeight 
          }}
        />
        <div 
          className="absolute left-0 w-full bg-[url('/assets/parallax-assets/cloud2.svg')] bg-cover"
          style={{ 
            top: styles.cloudTop2,
            height: styles.landscapeHeight 
          }}
        />
      </ParallaxLayer>

      {/* Back Mountains */}
      <ParallaxLayer offset={0} speed={0.2}>
        <div 
          className="absolute left-0 z-10 w-full bg-[url('/assets/parallax-assets/mountain5.svg')] bg-cover"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.25}>
        <div 
          className="absolute left-0 z-10 w-full bg-[url('/assets/parallax-assets/mountain4.svg')] bg-cover"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight
          }}
        />
      </ParallaxLayer>

      {/* Navigation */}
      <ParallaxLayer className='pointer-events-none' offset={0} sticky={{start: 0, end: 4}}>
        <Navbar onNavigate={scrollToSection} />
      </ParallaxLayer>

      {/* Name heading */}
      <ParallaxLayer offset={0} speed={-1.2}>
        <div className="absolute left-0 top-0 h-full w-full z-20">
          <h1 
            className={`absolute ${getNameFontSize()} text-center w-full text-white drop-shadow-lg px-4`}
            style={{
              fontFamily: 'Ephesis', 
              color: `rgba(255, 255, 255, ${nameOpacity})`,
              top: styles.nameTop,
              lineHeight: screenType === 'mobile' ? '1.1' : '1.2'
            }}
          >
            Kevin Gallagher
          </h1>
        </div>
      </ParallaxLayer>

      {/* Mid Mountains */}
      <ParallaxLayer offset={0} speed={0.3}>
        <div 
          className="absolute left-0 z-40 w-full bg-[url('/assets/parallax-assets/mountain3.svg')] bg-cover"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight
          }}
        />
        <div 
          className="absolute left-0 z-40 w-full bg-[url('/assets/parallax-assets/mountain2.svg')] bg-cover"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight
          }}
        />
      </ParallaxLayer>

      {/* Front Mountain*/}
      <ParallaxLayer offset={0} speed={0.4}>
        <div 
          className="absolute left-0 z-40 w-full"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight,
            backgroundImage: "url('/assets/parallax-assets/mountain1.svg')",
            backgroundSize: 'cover',
            backgroundPosition: styles.mountainStrategy === 'cover-center' ? 'center' : 'left top',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </ParallaxLayer>

      {/* Sea and boats */}
      <ParallaxLayer offset={0} speed={0.4}>
        <div 
          className="absolute left-0 w-full"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight,
            backgroundImage: "url('/assets/parallax-assets/sea.svg')",
            backgroundSize: 'cover',
            backgroundPosition: styles.seaStrategy === 'cover-center' ? 'center' : 'left top',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </ParallaxLayer>

      {/* Beach layer */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div 
          className="absolute left-0 top-0 w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover filter brightness-125 saturate-100"
          style={{ 
            height: `calc(${styles.landscapeHeight} + 15vh)`
          }}
        />
        <div 
          className="absolute left-0 top-0 w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover filter brightness-125 saturate-100 mb-4"
          style={{ 
            height: `calc(${styles.landscapeHeight} + 35vh)`
          }}
        />
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