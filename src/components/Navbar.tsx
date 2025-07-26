import { Home, User, FolderOpen, Mail } from 'lucide-react';

function Navbar() {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 py-20 z-50 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      <nav className="px-4 py-6">
        <ul className="flex flex-col items-center space-y-6">
          <li>
            <a 
              href="#home" 
              className="text-white hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              <Home size={24}/>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-white hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              <User size={24}/>
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-white hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              <FolderOpen size={24}/>
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-white hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              <Mail size={24}/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
      );
    };

export default Navbar