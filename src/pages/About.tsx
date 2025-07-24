
function About() {
  return (
        <div className="flex justify-between p-8 md:p-12 bg-green-500">
          {/* Left section */}
          <div className="flex-1 flex flex-col justify-center items-center p-3">
            <div className="flex justify-center mb-4">
              <div className="w-[40vh] h-[40vh] rounded-full bg-[url('/assets/other-assets/linkdin.jpg')] bg-cover bg-center"></div>
            </div>
            <p className="text-center text-lg font-medium text-gray-900 mb-6">
              Welcome to my website! <br /> I'm Kevin, a Full Stack developer based in Vancouver, B.C.
            </p>

            <div className="flex space-x-4 mb-6 justify-center">

                {/* GitHub Button */}  
                <a
                    className="w-16 h-16 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                    href='https://github.com/Gallie83/'
                    target='_blank'>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                </a>

                {/* LinkedIn Button */}
                <a 
                    className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                    href='https://www.linkedin.com/in/kevin-gallagher-81a294236/'
                    target='_blank'>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                </a>
            </div>
          </div>

          {/* Right section */}
          <div className="flex-1 p-3 bg-orange-200 space-y-6 text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">About Me</h3>
            
            <p>
              I'm passionate about making a difference through software and connecting with like-minded professionals. I believe collaboration is the best method for growth and always embrace the chance to learn from others.
            </p>
            
            <p>
              I've built projects from e-commerce sites to blockchain applications and recently I've been diving into AI and exploring how it can enhance user experiences and workflows.
            </p>
            
            <p>
              When I'm not writing code, you'll usually find me out enjoying Vancouver's beautiful scenery or training Muay Thai! 
            </p>
            
            <h3 className="text-lg font-semibold text-white mb-3">Experience</h3>
            <div className="bg-white rounded-lg p-3 mb-3">
              <p className="text-xs text-gray-600">January 2024 - January 2025</p>
              <p className="font-bold text-sm">Canadian Start-up</p>
              <p className="text-sm text-gray-700">Full Stack Developer</p>
              <p className="text-xs text-gray-600 mt-1">Collaborated with a development team to build full-stack applications using the MERN stack and Jest testing.</p>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-3">Education</h3>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-sm">AI Certification</p>
                <p className="text-xs text-gray-600">BrainStation - Graduated April 2025</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-bold text-sm">Diploma in Full-Stack Development</p>
                <p className="text-xs text-gray-600">University College of Dublin - Graduated May 2023</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default About