import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-overlay"></div>

            <div className="hero-container">
                <div className="hero-images-left">
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80"
                            alt="Auto parts manufacturing facility"
                            className="hero-image"
                        />
                    </div>
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80"
                            alt="Precision auto parts"
                            className="hero-image"
                        />
                    </div>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Engineering Precision<br />
                        since <span className="accent">1999.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Almas Enterprise is a contract manufacturing unit specializing in CNC laser cutting and sheet-metal fabrication for automotive and commercial vehicle applications. Operating from a 12,000 sq. ft. facility, we focus on precision, consistency, and scalable production.
                    </p>
                    <Link to="/about-us" className="hero-cta">
                        More About Us <span className="cta-arrow">→</span>
                    </Link>
                </div>

                <div className="hero-images-right">
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80"
                            alt="Modern automotive facility"
                            className="hero-image"
                        />
                    </div>
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80"
                            alt="Quality auto parts"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                    Explore Products
                </Link>
                <Link to="/contact-us" className="btn btn-secondary">
                    Get in Touch
                </Link>
            </div> */}
        </section>
    );
};

export default Hero;
