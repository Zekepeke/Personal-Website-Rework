import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { navLinks, socials } from '../constants';

const StaggeredMenu = ({ 
  position = "right",
  items = navLinks,
  socialItems = socials,
  displaySocials = true,
  displayItemNumbering = true,
  menuButtonColor = "#fff",
  openMenuButtonColor = "#fff",
  changeMenuColorOnOpen = true,
  colors = ['#B19EEF', '#5227FF'],
  logoUrl = null,
  accentColor = "#ff6b6b",
  onMenuOpen = () => {},
  onMenuClose = () => {},
  onItemClick = () => {}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const socialItemsRef = useRef([]);
  const backgroundRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    setIsOpen(true);
    onMenuOpen();
    
    // Animate background
    gsap.fromTo(backgroundRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    // Animate menu items
    gsap.fromTo(menuItemsRef.current,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.8
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );

    // Animate social items if enabled
    if (displaySocials && socialItemsRef.current.length > 0) {
      gsap.fromTo(socialItemsRef.current,
        { 
          opacity: 0, 
          x: position === "right" ? 30 : -30,
          scale: 0.8
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.3,
          ease: "back.out(1.7)"
        }
      );
    }

    // Animate button rotation
    gsap.to(buttonRef.current, {
      rotation: 45,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    onMenuClose();

    // Animate menu items out
    gsap.to(menuItemsRef.current, {
      opacity: 0,
      y: -30,
      scale: 0.8,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in"
    });

    // Animate social items out
    if (displaySocials && socialItemsRef.current.length > 0) {
      gsap.to(socialItemsRef.current, {
        opacity: 0,
        x: position === "right" ? 30 : -30,
        scale: 0.8,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in"
      });
    }

    // Animate background out
    gsap.to(backgroundRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1
    });

    // Reset button rotation
    gsap.to(buttonRef.current, {
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleItemClick = (item, index) => {
    onItemClick();
    
    // Navigate to the section
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    closeMenu();
  };

  const handleSocialClick = (social) => {
    if (social.download) {
      // Handle download
      const link = document.createElement('a');
      link.href = social.link;
      link.download = social.name;
      link.click();
    } else {
      window.open(social.link, '_blank');
    }
  };

  return (
    <div className="fixed top-0 right-0 z-50">
      {/* Menu Button */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="fixed top-6 right-6 w-12 h-12 bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-black/95"
        style={{ 
          color: changeMenuColorOnOpen && isOpen ? openMenuButtonColor : menuButtonColor,
          border: `2px solid ${changeMenuColorOnOpen && isOpen ? openMenuButtonColor : menuButtonColor}`
        }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 h-6 relative">
          <span 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
          />
          <span 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? '-rotate-45' : 'translate-y-1'
            }`}
          />
          <span 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : '-translate-y-1'
            }`}
          />
        </div>
      </button>

      {/* Background Overlay */}
      <div
        ref={backgroundRef}
        className="fixed inset-0 bg-black/95 backdrop-blur-sm"
        style={{ opacity: 0 }}
        onClick={closeMenu}
      />

      {/* Menu Content */}
      <div
        ref={menuRef}
        className={`fixed inset-0 flex flex-col justify-center items-center ${
          position === "right" ? "text-right" : "text-left"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* Logo */}
        {logoUrl && (
          <div className="mb-8">
            <img src={logoUrl} alt="Logo" className="h-12 w-auto" />
          </div>
        )}

        {/* Menu Items */}
        <nav className="mb-12">
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li key={item.id || index} className="relative">
                <button
                  ref={el => menuItemsRef.current[index] = el}
                  onClick={() => handleItemClick(item, index)}
                  className="group flex items-center text-4xl md:text-6xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
                  style={{ opacity: 0 }}
                >
                  {displayItemNumbering && (
                    <span className="text-2xl md:text-4xl text-gray-500 mr-4 group-hover:text-gray-400 transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  )}
                  <span className="relative">
                    {item.name}
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r transition-all duration-300 group-hover:w-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`
                      }}
                    />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Items */}
        {displaySocials && (
          <div className="flex space-x-6">
            {socialItems.map((social, index) => (
              <button
                key={index}
                ref={el => socialItemsRef.current[index] = el}
                onClick={() => handleSocialClick(social)}
                className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
                style={{ opacity: 0 }}
                aria-label={social.social_name}
              >
                <img 
                  src={social.img} 
                  alt={social.social_name}
                  className="w-6 h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaggeredMenu;


