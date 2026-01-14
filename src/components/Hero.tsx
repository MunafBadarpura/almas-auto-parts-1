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
                        In the market<br />
                        since <span className="accent">1999.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Engineering Precision Auto Parts for a Smarter Drive. We manufacture high-quality, durable, and performance-driven automotive components trusted by OEMs and aftermarket leaders worldwide.
                    </p>
                    <a href="#contact-us" className="hero-cta">
                        Get in Touch <span className="cta-arrow">→</span>
                    </a>
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

            <div className="hero-buttons">
                <a href="#products" className="btn btn-primary">
                    Explore Products
                </a>
                <a href="#contact-us" className="btn btn-secondary">
                    Get in Touch
                </a>
            </div>
        </section>
    );
};

export default Hero;
