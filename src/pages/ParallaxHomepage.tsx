import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef, useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav'
import About from './About'
import Projects from './Projects'
import Contact from "./Contact"

import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

const basePath = import.meta.env.BASE_URL

// Animated Name heading to fade in letter-by-letter
function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in-up opacity-0"
          style={{
            animationDelay: `${delay + index * 50}ms`,
            animationFillMode: 'forwards'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
 
function ParallaxHomepage() {
  const [isMobile, setIsMobile] = useState(false)
  const parallaxRef = useRef<IParallax>(null)
  const [nameOpacity, setNameOpacity] = useState(1)
  const [screenType, setScreenType] = useState('laptop')
  const [sectionHeights, setSectionHeights] = useState({
    about: 1,
    projects: 1,
    contact: 1,
  })
  const [measurementsTaken, setMeasurementsTaken] = useState(false)

  const homeHeight = 1.05

  // Screen type detection
  const getScreenType = () => {
      const width = window.innerWidth

      if (width <= 640) {
        return {isMobile: true, screenType: 'mobile' as const};
      } else if (width <= 1024) {
        return {isMobile: false, screenType: 'laptop' as const};
      } else if (width <= 1920) {
        return {isMobile: false, screenType: 'desktop' as const};
      } else {
        return {isMobile: false, screenType: 'large' as const};
      }
    }

  // Calculate totalPages directly based on current state
  const calculateTotalPages = () => {
    const totalContentHeight = sectionHeights.about + 
      sectionHeights.projects + 
      sectionHeights.contact;
    
    const vh = window.innerHeight;

    const { screenType: currentScreenType } = getScreenType()

    let multiplier = 0.75;
    let buffer = 0.5;
    
    if (currentScreenType === 'mobile') {
      if (vh <= 570) {
        multiplier = 1.45;
        buffer = 1;
      } else if (vh <= 640) {
        multiplier = 1.3;
        buffer = 0.75;
      } else if (vh <= 740) {
        multiplier = 1.2;
        buffer = 0.5;
      } else if (vh <= 850) {
        multiplier = 1.15;
        buffer = 0.5;
      } else {
        multiplier = 1.0;
        buffer = 0.5;
      }
    } else if (currentScreenType === 'laptop') {
      multiplier = 0.75;
      buffer = 0.5;
    } else {
      multiplier = 0.75;
    }

    return homeHeight + (totalContentHeight * multiplier) + buffer;
  };

  const totalPages = calculateTotalPages();

  // Set screenType and isMobile state variables
  useEffect(() => {
    const updateScreenType = () => {      
      const { isMobile: mobile, screenType: type } = getScreenType();
      setIsMobile(mobile);
      setScreenType(type)
    }

    window.addEventListener('resize', updateScreenType)
    updateScreenType()

    return () => window.removeEventListener('resize', updateScreenType)
  }, [])

  // Measure size of each content section
  useEffect(() => {
    const measureSections = () => {
      const aboutEl = document.getElementById('about')
      const projectsEl = document.getElementById('projects')
      const contactEl = document.getElementById('contact')

    if(aboutEl && projectsEl && contactEl) {
      // CHECK if Projects has actual content first
      const projectCards = projectsEl.querySelectorAll('*') 
      console.log('🔍 Projects children count:', projectCards.length)

      if (projectCards.length < 5) {
        console.log('⚠️ Projects not ready, retrying in 200ms...')
        setTimeout(measureSections, 200)
        return
      }

      const sections = [aboutEl, projectsEl, contactEl]
      
      // Remove hidden-scroll class
      sections.forEach(el => {
        el.classList.remove('hidden-scroll')
      })

      // Force full visibility
      // sections.forEach(el => {
      //   el.style.opacity = '1'
      //   el.style.visibility = 'visible'
      // })

      // Wait for layout
      requestAnimationFrame(() => {
        const vh = window.innerHeight

        const aboutHeight = aboutEl.scrollHeight / vh
        const projectsHeight = projectsEl.scrollHeight / vh
        const contactHeight = contactEl.scrollHeight / vh

        console.log('📐 Section heights (vh):', {
          about: aboutHeight.toFixed(2),
          projects: projectsHeight.toFixed(2),
          contact: contactHeight.toFixed(2)
        })

        setSectionHeights({
          about: aboutHeight,
          projects: projectsHeight,
          contact: contactHeight,
        })

        sections.forEach((el) => {
          el.classList.add('hidden-scroll')
        })

        // Reset visibility
        // sections.forEach(el => {
        //   el.style.opacity = ''
        //   el.style.visibility = ''
        // })

        setMeasurementsTaken(true)
          
        })
      }
    }

    // Wait for content to load before measuring
    const timer = setTimeout(measureSections, 100)

    // Re-measure on window resize
    window.addEventListener('resize', measureSections)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', measureSections)
    }
  }, [screenType])

  const calculateScreenSizes = () => {
    const projectsStart = homeHeight + sectionHeights.about
    const contactStart = projectsStart + sectionHeights.projects

    const offsets = {
      contentOffset: homeHeight,
      aboutOffset: homeHeight,
      projectsOffset: projectsStart,
      contactOffset: contactStart
    }

    switch (screenType) {
    case 'mobile': 
      return {
        skyHeight: '68%',
        sunScale: 'scale-108',
        mountainTop: '6%',
        nameTop: '11%',
        landscapeHeight: '112vh',
        cloudTop1: '1.5%',
        cloudTop2: '2.5%',
        ...offsets
      }

      case 'laptop':
        return {
          skyHeight: '65%',
          sunScale: 'scale-105',
          mountainTop: '5%',
          nameTop: '10%',
          landscapeHeight: '110vh',
          cloudTop1: '1%',
          cloudTop2: '2%',
          ...offsets
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
          ...offsets
        }
      
      case 'large': 
        return {
          skyHeight: '80%',
          sunScale: 'scale-120',
          mountainTop: '12%',
          nameTop: '15%',
          landscapeHeight: '125vh',
          cloudTop1: '4%',
          cloudTop2: '7%',
          ...offsets
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
          ...offsets
        }
    }
  }

  const styles = calculateScreenSizes()

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
  }, [screenType])

  // Updated scroll animation with screen-specific offsets
  const scrollToSection = (section: string) => {
    if (!parallaxRef.current) return;
    const container = parallaxRef.current.container.current;
    if (!container) return;

    // With speed={1}, the layer scrolls WITH you
    // So to reach content at position P in layer at offset O:
    // You need to scroll to: O + (P / 2)
    // Because the layer is also moving down as you scroll
    
    const sectionPositionsInLayer = {
      'home': 0,
      'about': 0, // Top of content layer
      'projects': sectionHeights.about, 
      'contact': sectionHeights.about + sectionHeights.projects 
    };
    
    const positionInLayer = sectionPositionsInLayer[section as keyof typeof sectionPositionsInLayer];
    
    if (positionInLayer === undefined) return;
    
    if (section === 'home') {
      gsap.to(container, {
        scrollTop: 0,
        duration: 3,
        ease: "power2.inOut"
      });
      return;
    }
    
    // Formula: scrollPosition = layerOffset + (contentPosition / 2)
    const targetVh = homeHeight + (positionInLayer / 2);
    const targetScroll = targetVh * window.innerHeight;
    
    console.log(`Scrolling to ${section}:`, {
      layerOffset: homeHeight,
      positionInLayer: positionInLayer.toFixed(2),
      targetVh: targetVh.toFixed(2),
      targetPx: targetScroll.toFixed(0),
      formula: `${homeHeight} + (${positionInLayer.toFixed(2)} / 2)`
    });
    
    gsap.to(container, {
      scrollTop: targetScroll,
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => {
        console.log(`✅ Scroll complete. Final position: ${container.scrollTop.toFixed(0)}px = ${(container.scrollTop / window.innerHeight).toFixed(2)}vh`);
      }
    });
  };

  // Fade-in for sections on scroll
  useEffect(() => {
    // Ensure section heights are taken before observer runs
    if(!measurementsTaken) return
    // Small delay to ensure Parallax layers are rendered
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            entry.target.classList.add('show-scroll');
          } else {
            entry.target.classList.remove('show-scroll');
          }
        })
      })

      const hiddenElements = document.querySelectorAll('.hidden-scroll');
      hiddenElements.forEach((el) => observer.observe(el));

      return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [measurementsTaken, screenType])
    
  return (
    <Parallax 
      key={screenType}  // Forces re-initialization when screen type changes
      ref={parallaxRef} 
      pages={totalPages} 
      style={{ top: '0', left: '0' }} 
      className='animation bg-[#983122]'
    >      
    
      {/* Sky background */}
      <ParallaxLayer offset={0} speed={0.1}>
        <div 
          className="fixed left-0 top-0 w-full bg-cover bg-center"
          style={{ 
            height: styles.skyHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/BG.svg)`
          }}
        />
      </ParallaxLayer>

      {/* Sun and clouds */}
      <ParallaxLayer offset={0} speed={0}>
        <div 
          className={`absolute ${styles.sunScale} left-0 top-0 w-full bg-cover bg-center`}
          style={{ 
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/sun.svg)`
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div 
          className="absolute left-0 w-full bg-cover bg-center"
          style={{ 
            top: styles.cloudTop1,
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/cloud1.svg)`
          }}
        />
        <div 
          className="absolute left-0 w-full bg-cover bg-center"
          style={{ 
            top: styles.cloudTop2,
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/cloud2.svg)`
          }}
        />
      </ParallaxLayer>

      {/* Back mountains */}
      <ParallaxLayer offset={0} speed={0.2}>
        <div 
          className="absolute left-0 z-10 w-full bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/mountain5.svg)`
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.25}>
        <div 
          className="absolute left-0 z-10 w-full bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/mountain4.svg)`
          }}
        />
      </ParallaxLayer>

      {/* Navigation */}
      <ParallaxLayer className='pointer-events-none' offset={0} sticky={{start: 0, end: totalPages}}>
        {isMobile ? 
          <div className='pointer-events-auto'>
            <MobileNav onNavigate={scrollToSection}/> 
          </div>
          : 
          <Navbar onNavigate={scrollToSection} />
        }
      </ParallaxLayer>

      {/* Name heading */}
      <ParallaxLayer offset={0} speed={-1.2}>
        <div className="absolute left-0 top-0 h-full w-full z-20">
          <div 
            className="absolute w-full text-center flex flex-col items-center"
            style={{ top: styles.nameTop }}
          >
            <h1 
              className="text-5xl md:text-7xl text-white drop-shadow-lg" 
              style={{
                fontFamily: 'Ephesis', 
                color: `rgba(255, 255, 255, ${nameOpacity})`,
              }}
            >
              <AnimatedText text="Kevin Gallagher" delay={0} />
            </h1>
            <p 
              className="text-lg md:text-2xl text-white drop-shadow-md mt-2"
              style={{
                color: `rgba(255, 255, 255, ${nameOpacity})`,
              }}
            >
              <AnimatedText text="Full-Stack Developer" delay={800} />
            </p>
          </div>
        </div>
      </ParallaxLayer>

      {/* Front mountains */}
      <ParallaxLayer offset={0} speed={0.3}>
        <div 
          className="absolute left-0 z-40 w-full bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/mountain3.svg)`
          }}
        />
        <div 
          className="absolute left-0 z-40 w-full bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/mountain2.svg)`
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div 
          className="absolute left-0 z-40 w-full bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/mountain1.svg)`
          }}
        />
      </ParallaxLayer>

      {/* Sea and boats */}
      <ParallaxLayer offset={0} speed={0.4}>
        <div 
          className="absolute left-0 w-full bg-cover bg-center"
          style={{ 
            top: styles.mountainTop,
            height: styles.landscapeHeight,
            backgroundImage: `url(${basePath}assets/parallax-assets/sea.svg)`
          }}
        />
      </ParallaxLayer>

      {/* Beach layers (doubled) */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div 
          className="absolute left-0 top-0 w-full bg-cover bg-center filter brightness-125 saturate-100"
          style={{ 
            height: `calc(${styles.landscapeHeight} + 15vh)`,
            backgroundImage: `url(${basePath}assets/parallax-assets/beach.svg)`
          }}
        />
        <div 
          className="absolute left-0 top-0 w-full bg-cover bg-center filter brightness-125 saturate-100 mb-4"
          style={{ 
            height: `calc(${styles.landscapeHeight} + 35vh)`,
            backgroundImage: `url(${basePath}assets/parallax-assets/beach.svg)`
          }}
        />
      </ParallaxLayer>

      {/* Content Sections */}
      <ParallaxLayer offset={styles.contentOffset} speed={1}>
        <div className="relative z-50">
          {/* About section */}
          <section id="about" className="hidden-scroll md:min-h-screen py-8">
            <About />
          </section>

          {/* Projects section */}
          <section id="projects" className="hidden-scroll md:min-h-screen py-8">
            <Projects />
          </section>

          {/* Contact Section */}
          <section id="contact" className="hidden-scroll md:min-h-screen pb-8">
            <Contact />
          </section>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}


export default ParallaxHomepage