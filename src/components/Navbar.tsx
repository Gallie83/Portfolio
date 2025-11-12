import { Home, User, FolderOpen, Mail } from 'lucide-react';

interface NavbarProps {
  onNavigate: (offset: string) => void;
  changeNavbarColor: boolean;
}

function Navbar({ onNavigate, changeNavbarColor }: NavbarProps) {

  const textColor = changeNavbarColor ? 'text-white' : 'text-black';
  const separatorColor = changeNavbarColor ? 'white' : 'black';

  return (
    <div className="fixed top-0 left-1/2 px-5 transform -translate-x-1/2 z-50 backdrop-blur-lg pointer-events-auto group">
      <div 
        className="absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-500" 
        style={{
          background: `linear-gradient(to right, transparent, ${separatorColor}, transparent)`
        }}
      ></div>

      <nav className="px-3 py-3 transition-all duration-300">
        <ul className="flex flex-row items-center gap-20 transition-all duration-500 ease-in-out">
          <li className="relative flex items-center justify-center">
            <button 
              onClick={() => onNavigate('home')} 
              className={`${textColor} hover:text-orange-500 hover:cursor-pointer transition-colors duration-400 font-medium flex items-center justify-center gap-3`}
            >
              <Home size={24}/>
              <span className="whitespace-nowrap">
                Home
              </span>
            </button>
            <span className="absolute -right-10 text-xl transition-all duration-500" style={{color: separatorColor}}>|</span>
          </li>
          
          <li className="relative flex items-center justify-center">
            <button 
              onClick={() => onNavigate('about')} 
              className={`${textColor} hover:text-orange-500 hover:cursor-pointer transition-colors duration-400 font-medium flex items-center justify-center gap-3`}
            >
              <User size={24}/>
              <span className="whitespace-nowrap">
                About
              </span>
            </button>
            <span className="absolute -right-10 text-xl transition-all duration-500" style={{color: separatorColor}}>|</span>
          </li>
          
          <li className="relative flex items-center justify-center">
            <button 
              onClick={() => onNavigate('projects')} 
              className={`${textColor} hover:text-orange-500 hover:cursor-pointer transition-colors duration-400 font-medium flex items-center justify-center gap-3`}
            >
              <FolderOpen size={24}/>
              <span className="whitespace-nowrap">
                Projects
              </span>
            </button>
            <span className="absolute -right-10 text-xl transition-all duration-500" style={{color: separatorColor}}>|</span>
          </li>
          
          <li className="relative flex items-center justify-center">
            <button 
              onClick={() => onNavigate('contact')} 
              className={`${textColor} hover:text-orange-500 hover:cursor-pointer transition-colors duration-400 font-medium flex items-center justify-center gap-3`}
            >
              <Mail size={24}/>
              <span className="whitespace-nowrap">
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