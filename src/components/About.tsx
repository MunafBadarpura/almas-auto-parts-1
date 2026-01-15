import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className="about" id="about-us" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className="about-content">
                    <div className={`about-text scroll-animate-left ${isVisible ? 'visible' : ''}`}>
                        <span className="about-badge">About Us</span>
                        <h2 className="about-title">About Almas Enterprise</h2>
                        <p className="about-description">
                            Almas Enterprise is a trusted automotive components manufacturer delivering
                            precision-engineered parts for OEMs and the aftermarket. Our focus on quality,
                            innovation, and reliability drives everything we produce.
                        </p>
                        <p className="about-description">
                            With decades of experience in the automotive industry, we've established ourselves
                            as a leading provider of high-quality auto parts. Our state-of-the-art manufacturing
                            facilities and skilled workforce ensure that every component meets the highest
                            standards of excellence.
                        </p>
                        <a href="#contact-us" className="btn btn-outline">
                            Know More
                        </a>
                    </div>

                    <div className={`about-image scroll-animate-right ${isVisible ? 'visible' : ''}`}>
                        <div className="about-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80"
                                alt="Almas Enterprise Manufacturing"
                            />
                        </div>
                        <div className="about-stats-card">
                            <div className="mini-stat">
                                <span className="mini-stat-value">25+</span>
                                <span className="mini-stat-label">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
