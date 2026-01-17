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

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Let React Router handle navigation, then scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = (e: React.MouseEvent) => {
    if (location.pathname === '/products') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    if (location.pathname === '/about-us') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === '/contact-us') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  const menuItems = [
    { label: 'HOME', href: '/', isRoute: true, onClick: handleHomeClick },
    { label: 'PRODUCTS', href: '/products', isRoute: true, onClick: handleProductsClick },
    { label: 'SERVICES', href: isHomePage ? '#services' : '/#services', isRoute: !isHomePage, onClick: () => setIsMobileMenuOpen(false) },
    { label: 'ABOUT US', href: '/about-us', isRoute: true, onClick: handleAboutClick },
    { label: 'CONTACT US', href: '/contact-us', isRoute: true, onClick: handleContactClick },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleHomeClick}>
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
                  onClick={item.onClick}
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  href={item.href} 
                  className="navbar-link"
                  onClick={item.onClick}
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
