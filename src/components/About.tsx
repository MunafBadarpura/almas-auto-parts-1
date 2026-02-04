import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const focusPoints = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
            text: 'Precision and repeatability'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
                </svg>
            ),
            text: 'Clear communication and transparency'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
            ),
            text: 'Long-term partnerships over short-term transactions'
        }
    ];

    const capabilitiesPoints = [
        'Process control and production discipline',
        'Quality compliance and inspection standards',
        'Production discipline required by large organizations'
    ];

    const partnershipPoints = [
        'Outsourcing requirements',
        'Export-oriented manufacturing',
        'Long-term supply arrangements'
    ];

    return (
        <section className="about" id="about-us" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                {/* Hero Section - Intro with Image */}
                <div className="about-intro-grid">
                    <div className={`about-text scroll-animate-left ${isVisible ? 'visible' : ''}`}>
                        <span className="about-badge">About Us</span>
                        <h2 className="about-title">About Almas Enterprise</h2>

                        <p className="about-description about-highlight">
                            Almas Enterprise is a precision metal fabrication company specializing in
                            <strong> CNC laser cutting</strong>, <strong>sheet metal bending</strong>, and
                            <strong> fabricated assemblies</strong> for automotive and commercial vehicle applications.
                        </p>
                        <p className="about-description">
                            We operate as a contract manufacturing partner, supporting OEMs, Tier suppliers, and
                            exporters with consistent quality, scalable production, and reliable delivery.
                        </p>
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

                {/* Capabilities & Partnership Cards */}
                <div className={`about-cards scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    {/* Manufacturing Capabilities Card */}
                    <div className="about-card">
                        <div className="about-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 8V6l-3-3H5L2 6v2h2v12h16V8h2zm-4-2.5L19.5 7h-3V4.5L18 5.5zm-6 0L13.5 7h-3L12 5.5zm-6 0L7.5 7h-3L6 5.5zM18 18H6V8h12v10zm-2-7h-3v3h-2v-3H8V9h3v3h2V9h3v2z" />
                            </svg>
                        </div>
                        <h3 className="about-card-title">Manufacturing Capabilities</h3>
                        <p className="about-card-text">
                            Our manufacturing capabilities enable us to handle both custom components and repeat production parts, meeting strict dimensional and material requirements.
                        </p>
                        <p className="about-card-text">
                            With hands-on experience supplying components used in the automotive sector, including work associated with established manufacturers such as <strong>GLOBAL TVS Ltd</strong> and <strong>Deccan Auto Limited</strong>, we understand the importance of :
                        </p>
                        <ul className="about-card-list">
                            {capabilitiesPoints.map((point, index) => (
                                <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Production Scale Card */}
                    <div className="about-card">
                        <div className="about-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <h3 className="about-card-title">Production Scale & Partnership</h3>
                        <p className="about-card-text">
                            Our facility is equipped to support low to high volume production, allowing us to
                            scale seamlessly as customer requirements grow.
                        </p>
                        <p className="about-card-text">
                            We serve as a dependable manufacturing partner for:
                        </p>
                        <ul className="about-card-list">
                            {partnershipPoints.map((point, index) => (
                                <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Focus Points Section */}
                <div className={`about-focus-section scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    <h3 className="about-focus-title">At Almas Enterprise, we focus on:</h3>
                    <div className="about-focus-grid">
                        {focusPoints.map((point, index) => (
                            <div className="focus-point" key={index}>
                                <div className="focus-icon">{point.icon}</div>
                                <span className="focus-text">{point.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Statement */}
                <div className={`about-closing scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    <p className="about-closing-text">
                        We are open to working with exporters, distributors, and international clients looking for
                        a capable and committed manufacturing partner from India.
                    </p>
                    <Link to="/about-us" className="btn btn-primary about-cta">
                        <span>Learn More About Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
