import { useState } from "react"
import { Menu, X } from "lucide-react"

interface MobileNavProps {
  onNavigate: (offset: string) => void;
}

function MobileNav({onNavigate} : MobileNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleNavClick = (section: string) => {
    console.log("Clicked")
    onNavigate(section)
    setMenuOpen(false)
  }
  
  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
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
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={() => setMenuOpen(false)}
        >
          <div 
            className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-4 space-y-2"
          >
            <button 
              onClick={() => handleNavClick('home')} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-[#983122] font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-[#983122] font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('projects')} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-[#983122] font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-[#983122] font-medium"
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