import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

function About() {

  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="md:min-h-screen px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-secondary)] to-[#FF6B35] rounded-full mb-3"></div>
        <div className="grid xl:grid-cols-3 gap-6 lg:h-[85vh] xl:h-[75vh] 2xl:h-[70vh]">

          
          {/* Left section - Profile */}
          <div className="xl:col-span-1 flex flex-col items-center justify-center text-center space-y-3 xl:space-y-4 2xl:space-y-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 xl:p-6 2xl:p-8 shadow-xl xl:h-full">
            {/* Self Image */}
            <div className="relative">
              <div 
                className="w-56 h-56 xl:w-60 xl:h-60 rounded-full bg-cover bg-center shadow-xl ring-4 ring-orange-200"
                style={{ backgroundImage: `url(${basePath}assets/about-assets/linkdin.jpg)` }}
              ></div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-main)] mb-2">Kevin Gallagher</h2>
              <p className="text-xl text-[var(--color-secondary)] font-medium mb-1">Full Stack Developer</p>
            </div>

            <div className="flex gap-4 pt-2">
              {/* GitHub Button */}  
              <a
                className="w-14 h-14 bg-gray-800 hover:bg-gray-900 text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-xl hover:shadow-xl hover:-translate-y-1"
                href='https://github.com/Gallie83/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label="GitHub Profile">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn Button */}
              <a 
                className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-xl hover:shadow-xl hover:-translate-y-1"
                href='https://www.linkedin.com/in/kevin-gallagher-81a294236/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label="LinkedIn Profile">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right section - Single Card */}
          <div className="xl:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl space-y-6 xl:h-full">
            {/* About text */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p className="font-medium">
              I'm a Full Stack Developer who loves building software that makes a real impact. Whether it's creating e-commerce platforms, exploring blockchain integrations, or diving into AI to enhance user experiences, I'm always excited to take on challenges and learn new technologies.
              </p>
              
              <p className="font-medium">
                I thrive in collaborative environments and genuinely enjoy connecting with other developers — some of my best projects have come from people I've met at hackathons and through the dev community.
              </p>
              
              <p className="font-medium">
                When I'm not coding, you'll find me training Muay Thai or exploring the outdoors. I believe staying active keeps the mind sharp and the ideas flowing!
              </p>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-200"></div>
            
            {/* Experience */}
            <div>
              <h3 className="text-base font-bold text-[var(--color-main)] mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-[var(--color-secondary)] rounded-full"></span>
                Experience
              </h3>
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <div>
                    <h4 className="font-semibold text-[var(--color-main)] text-sm">Full Stack Developer</h4>
                    <p className="text-gray-600 text-xs">Canadian Start-up</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">Jan 2024 - Jan 2025</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Collaborated with a development team to build full-stack applications using the MERN stack with Jest for unit testing.
                </p>
              </div>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-200"></div>
            
            {/* Education */}
            <div>
              <h3 className="text-base font-bold text-[var(--color-main)] mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-[var(--color-secondary)] rounded-full"></span>
                Education
              </h3>

              <div className="space-y-2">

                <Dialog>
                  <DialogTrigger asChild>
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 transition-transform hover:cursor-pointer hover:scale-105">
                      <h4 className="font-semibold text-[var(--color-main)] text-sm">Diploma in Full-Stack Development</h4>
                      <p className="text-xs text-gray-600 mt-0.5">University College of Dublin • Graduated May 2023</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-7xl">
                    <img 
                      className="w-full" 
                      src={`${basePath}assets/about-assets/UCD-Certificate.png`} 
                      alt="UCD Certificate for Full Stack Software Development" />
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 transition-transform hover:cursor-pointer hover:scale-105">
                      <h4 className="font-semibold text-[var(--color-main)] text-sm">AI Certification</h4>
                      <p className="text-xs text-gray-600 mt-0.5">BrainStation • Graduated April 2025</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <img 
                      className="w-full" 
                      src={`${basePath}assets/about-assets/Brainstation-Certificate.jpg`} 
                      alt="BrainStation Certificate for Artificial Intelligence" />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About