import { Home, User, FolderOpen, Mail } from 'lucide-react';

function Navbar() {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 py-20 z-50 backdrop-blur-sm pointer-events-auto group">
      {/* Right border */}
      <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-white to-transparent"></div>

      {/* Navbar */}
      <nav className="px-6 py-6 transition-all duration-300 group-hover:pr-20 group-hover:mr-3.5">
        <ul className="flex flex-col items-start space-y-9">
          <li className="relative">
            <a href="#home" 
              className="text-white hover:text-orange-500 transition-colors duration-400 font-medium flex items-center gap-3">
              <Home size={24}/>
              <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 px-2 py-1 rounded transition-all duration-500 ease-out transform translate-x-0 group-hover:translate-x-8 whitespace-nowrap">
                Home
              </span>
            </a>
          </li>
          <li className="relative">
            <a href="#about" 
              className="text-white hover:text-orange-500 transition-colors duration-400 font-medium flex items-center gap-3">
              <User size={24}/>
              <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 px-2 py-1 rounded transition-all duration-500 ease-out transform translate-x-0 group-hover:translate-x-8 whitespace-nowrap">
                About
              </span>
            </a>
          </li>
          <li className="relative">
            <a href="#projects" 
              className="text-white hover:text-orange-500 transition-colors duration-400 font-medium flex items-center gap-3">
              <FolderOpen size={24}/>
              <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 px-2 py-1 rounded transition-all duration-500 ease-out transform translate-x-0 group-hover:translate-x-8 whitespace-nowrap">
                Projects
              </span>
            </a>
          </li>
          <li className="relative">
            <a href="#contact" 
              className="text-white hover:text-orange-500 transition-colors duration-400 font-medium flex items-center gap-3">
              <Mail size={24}/>
              <span className="absolute left-0 top-0 hover:backdrop-blur-3xl opacity-0 group-hover:opacity-100 px-2 py-1 rounded transition-all duration-500 ease-out transform translate-x-0 group-hover:translate-x-8 whitespace-nowrap">
                Contact
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;