import { useState } from "react"
import { Menu, X } from "lucide-react"

interface MobileNavProps {
  onNavigate: (offset: string) => void;
}

function MobileNav({onNavigate} : MobileNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [animate, setAnimate] = useState(false)
  
  const handleNavClick = (section: string) => {
    onNavigate(section)
    setMenuOpen(false)
    setAnimate(false)
  }

  const handleMenuOpen = () => {
    if (!menuOpen) {
      setMenuOpen(true)
      setTimeout(() => setAnimate(true), 10) 
    } else {
      setAnimate(false)
      setTimeout(() => setMenuOpen(false), 500) 
    }
  }
  
  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={handleMenuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {menuOpen ? (
          <X className="w-6 h-6 text-[#983122]" />
        ) : (
          <Menu className="w-6 h-6 text-[#983122]" />
        )}
      </button>
      
      {/* Menu Overlay */}
      {menuOpen && (
        <div 
          className={`fixed inset-0 z-40 transition-colors duration-300 ${animate ? 'bg-black/50' : 'bg-black/0'}`}
          onClick={handleMenuOpen}
        >
          <div 
            className="fixed bottom-24 right-6 p-4 space-y-2"
          >
            <button 
              onClick={() => handleNavClick('home')} 
              className={`block w-full text-left px-4 py-2 bg-white rounded-lg text-[#983122] font-medium
                          transition-all duration-300 ease-out
                          ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className={`block w-full text-left px-4 py-2 bg-white rounded-lg text-[#983122] font-medium
                          transition-all duration-300 ease-out
                          ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('projects')} 
              className={`block w-full text-left px-4 py-2 bg-white rounded-lg text-[#983122] font-medium
                          transition-all duration-300 ease-out
                          ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`block w-full text-left px-4 py-2 bg-white rounded-lg text-[#983122] font-medium
                          transition-all duration-300 ease-out
                          ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
              style={{ transitionDelay: '0ms' }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNav;