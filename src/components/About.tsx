import './About.css';

const About = () => {
    return (
        <section className="about" id="about-us">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <span className="about-badge">About Us</span>
                        <h2 className="about-title">About Almas Auto Parts</h2>
                        <p className="about-description">
                            Almas Auto Parts is a trusted automotive components manufacturer delivering
                            precision-engineered parts for OEMs and the aftermarket. Our focus on quality,
                            innovation, and reliability drives everything we produce.
                        </p>
                        <p className="about-description">
                            With decades of experience in the automotive industry, we've established ourselves
                            as a leading provider of high-quality auto parts. Our state-of-the-art manufacturing
                            facilities and skilled workforce ensure that every component meets the highest
                            standards of excellence.
                        </p>
                        <a href="#" className="btn btn-outline">
                            Learn More
                        </a>
                    </div>

                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80"
                                alt="Almas Auto Parts Manufacturing"
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
