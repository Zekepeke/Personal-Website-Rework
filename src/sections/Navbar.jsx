import { useRef, useEffect, useState } from 'react'
import { navLinks } from '../constants'



const NavItems = ({ items = navLinks, initialActiveIndex = 0, onItemClick }) => {
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex)
    
    const handleClick = (e, index) => {
      if (activeIndex === index) return
      setActiveIndex(index)
  }
    
    const handleKeyDown = (e, index) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleClick(e, index)
        }
    }
    
    return (
      <nav className="flex relative justify-center w-full">
            <ul className="nav-ul flex gap-8 list-none p-0 px-4 m-0 relative z-[3]"
            style={{
              color: "white",
              textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.2)",
            }}>
                {items.map(({id, name, href}) => (
              <li
                key={id}
                className={`nav-li py-[0.6em] px-[1em] rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white ${activeIndex === id ? "active" : ""
                  }`}
                onClick={(e) => handleClick(e, id)}
              >
                <a
                  href={href}
                  onKeyDown={(e) => handleKeyDown(e, id)}
                  className="nav-li_a"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
    );
};


const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => setOpen((prevIsOpen) => !prevIsOpen);
    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Zeke
                    </a>

                    <button 
                        onClick={toggleMenu} 
                        className="text-neutral-400 hover:text-white focus:outline-none lg:hidden flex"
                        aria-label="toggle menu"
                    >
                        <img 
                            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} 
                            alt="toggle" 
                            className="w-6 h-6"
                        />
                    </button>

                    {/* Desktop navigation - shows on lg and up */}
                    <nav className="lg:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            
            {/* Mobile navigation - shows on screens smaller than lg */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <nav className="p-5">
                    <NavItems onItemClick={closeMenu} />
                </nav>
            </div>
        </header>
    )
}



export default Navbar