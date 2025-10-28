import { Link } from "react-router-dom"
import { useState } from "react"
import closeIcon from "../assets/close-icon.svg"
import menuIcon from "../assets/menu-icon.svg"

export function Nav() {
  const [isOpen, setIsOpen] = useState(null)

return(
    <>
    {/* Desktop */}
    <nav className="hidden lg:block lg:fixed left-8 top-8">
      <ul>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/">Ana Sayfa</Link></li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/info">Hakkında</Link></li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/care">Bakım</Link></li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/pests">Zararlılar</Link></li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/diseases">Hastalıklar</Link></li>
        <li className="opacity-50 hover:opacity-100 transition duration-300 ease-in-out"><Link to="/history">Geçmiş</Link></li>
      </ul>
    </nav>

    {/* Mobile */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 rounded-md hover:bg-gray-300 transition"
        >
          <img 
            src={isOpen ? closeIcon : menuIcon} 
            alt="Menu icon" 
            className="w-6 h-6"
          />
        </button>

        {isOpen && (
          <div className="absolute right-4 mt-2 bg-beige shadow-xl rounded-lg p-4 border border-gray-200">
            <ul className="flex flex-col gap-2 text-gray-700">
              <li><Link onClick={() => setIsOpen(false)} to="/">Ana Sayfa</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/info">Hakkında</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/care">Bakım</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/pests">Zararlılar</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/diseases">Hastalıklar</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/history">Geçmiş</Link></li>
            </ul>
          </div>
        )}
      </div>
    </>
)
}