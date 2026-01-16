import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  const menuItems = [
    { label: 'HOME', href: isHomePage ? '#home' : '/', isRoute: !isHomePage },
    { label: 'PRODUCTS', href: isHomePage ? '#products' : '/#products', isRoute: !isHomePage },
    { label: 'SERVICES', href: isHomePage ? '#services' : '/#services', isRoute: !isHomePage },
    { label: 'ABOUT US', href: isHomePage ? '#about-us' : '/#about-us', isRoute: !isHomePage },
    { label: 'CONTACT US', href: '/contact-us', isRoute: true },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Almas</span>
          <span className="logo-subtext">Enterprise</span>
        </Link>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              {item.isRoute ? (
                <Link 
                  to={item.href} 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  href={item.href} 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
