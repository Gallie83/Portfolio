import { Home, User, FolderOpen, Mail } from 'lucide-react';

interface NavbarProps {
  onNavigate: (offset: string) => void;
}

function Navbar({ onNavigate }: NavbarProps) {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-sm pointer-events-auto group">
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* Navbar */}
      <nav className="px-3 py-3 transition-all duration-300">
        <ul className="flex flex-row items-center gap-9 group-hover:gap-20 transition-all duration-500 ease-in-out">
          <li className="relative flex items-center justify-center">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-white hover:text-orange-500 hover:cursor-pointer transition-colors duration-400 font-medium flex items-center justify-center gap-3"
            >
              <Home size={24}/>
              <span className="w-0 overflow-hidden opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                Home
              </span>
            </button>
            <span className="absolute -right-5 group-hover:-right-10 text-white text-xl opacity-0 group-hover:opacity-100 transition-all duration-500">|</span>
          </li>
          
          <li className="relative flex items-center justify-center">
            <button 
              onClick={() => onNavigate('about')} 
              className="text-white hover:text-orange-500 hover:cursor-pointer transition-colors duration-400 font-medium flex items-center justify-center gap-3"
            >
              <User size={24}/>
              <span className="w-0 overflow-hidden opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                About
              </span>
            </button>
            <span className="absolute -right-5 group-hover:-right-10 text-white text-xl opacity-0 group-hover:opacity-100 transition-all duration-500">|</span>
          </li>
          
          <li className="relative flex items-center justify-center">
            <button 
              onClick={() => onNavigate('projects')} 
              className="text-white hover:text-orange-500 hover:cursor-pointer transition-colors duration-400 font-medium flex items-center justify-center gap-3"
            >
              <FolderOpen size={24}/>
              <span className="w-0 overflow-hidden opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                Projects
              </span>
            </button>
            <span className="absolute -right-5 group-hover:-right-10 text-white text-xl opacity-0 group-hover:opacity-100 transition-all duration-500">|</span>
          </li>
          
          <li className="relative flex items-center justify-center">
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-white hover:text-orange-500 hover:cursor-pointer transition-colors duration-400 font-medium flex items-center justify-center gap-3"
            >
              <Mail size={24}/>
              <span className="w-0 overflow-hidden opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-500 ease-out whitespace-nowrap">
                Contact
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;