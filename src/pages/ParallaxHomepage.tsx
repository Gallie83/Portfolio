import { Parallax, ParallaxLayer, } from '@react-spring/parallax'

function ParallaxHomepage() {
  
  // const [{ scroll }, api] = useSpring(() => ({ scroll: 0 }));

  // useEffect(() => {
  //   const handleScroll = () => {
  //     api.start({ scroll: window.scrollY });
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  return (
    // <Parallax className="m-0 p-0 bg-[#ffaf1b] h-screen relative">
    <>
      <Parallax pages={3} style={{ top: '0', left: '0' }} className='animation bg-[#983122]'>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="fixed left-0 top-0 h-[58%] w-full bg-[url('/assets/parallax-assets/BG.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="absolute scale-120 left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/sun.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/cloud1.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/cloud2.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/mountain5.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/mountain4.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/mountain3.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/mountain2.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/mountain1.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div className="absolute left-0 top-0 h-full w-full bg-[url('/assets/parallax-assets/sea.svg')] bg-cover"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="absolute left-0 top-0 h-[115vh] w-full bg-[url('/assets/parallax-assets/beach.svg')] bg-cover filter brightness-125 saturate-100"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={1} className='bg-[#7a271b]'>
          <div className="bg-cover">HELLO</div>
        </ParallaxLayer> */}
      </Parallax>
    </> 
  )
}

export default ParallaxHomepage