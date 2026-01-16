import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutUsPage.css';

// Import videos
import video1 from '../assets/AboutUsVideos/1.mp4';
import video2 from '../assets/AboutUsVideos/2.mp4';
import video3 from '../assets/AboutUsVideos/3.mp4';
import video4 from '../assets/AboutUsVideos/4.mp4';
import video5 from '../assets/AboutUsVideos/5.mp4';
import video6 from '../assets/AboutUsVideos/6.mp4';
import video7 from '../assets/AboutUsVideos/7.mp4';
import video8 from '../assets/AboutUsVideos/8.mp4';

const videos = [video1, video2, video3, video4, video5, video6, video7, video8];

const AboutUsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(4);
    const carouselRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth <= 600) {
                setVisibleCount(1);
            } else if (window.innerWidth <= 900) {
                setVisibleCount(2);
            } else if (window.innerWidth <= 1100) {
                setVisibleCount(3);
            } else {
                setVisibleCount(4);
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const maxIndex = Math.max(0, videos.length - visibleCount);
    const totalPages = Math.ceil(videos.length / visibleCount);
    const currentPage = Math.floor(currentIndex / visibleCount);

    const scrollPrev = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const scrollNext = () => {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };

    const goToPage = (page: number) => {
        setCurrentIndex(Math.min(page * visibleCount, maxIndex));
    };

    const openVideoPopup = (videoSrc: string) => {
        setSelectedVideo(videoSrc);
        document.body.style.overflow = 'hidden';
    };

    const closeVideoPopup = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="about-us-page">
            <Navbar />
            
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <span className="about-hero-badge">Who We Are</span>
                    <h1 className="about-hero-title">About Us</h1>
                    <p className="about-hero-subtitle">
                        Discover our story, values, and the passion that drives us to deliver excellence in automotive components.
                    </p>
                </div>
            </section>

            {/* Our Journey - Video Section */}
            <section className="journey-section">
                <div className="container">
                    {/* <div className="journey-header">
                        <h2 className="journey-title">Our Journey</h2>
                        <h3 className="journey-subtitle">Experience Our Story</h3>
                        <p className="journey-description">
                            Watch our collection of stories showcasing the passion, dedication, and
                            craftsmanship behind every component we create at Almas Enterprise.
                        </p>
                    </div> */}

                    <div className="video-carousel-wrapper">
                        <button 
                            className="carousel-nav-btn prev" 
                            onClick={scrollPrev}
                            disabled={currentIndex === 0}
                            aria-label="Previous videos"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <div className="video-carousel" ref={carouselRef}>
                            <div 
                                className="video-carousel-track"
                                style={{ 
                                    transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                                }}
                            >
                                {videos.map((video, index) => (
                                    <div 
                                        key={index} 
                                        className="video-card"
                                        style={{ flex: `0 0 ${100 / visibleCount}%` }}
                                    >
                                        <div className="video-card-inner" onClick={() => openVideoPopup(video)}>
                                            <span className="video-number">{index + 1}</span>
                                            <video
                                                ref={el => { videoRefs.current[index] = el; }}
                                                src={video}
                                                muted
                                                autoPlay
                                                loop
                                                playsInline
                                                className="video-thumbnail"
                                            />
                                            <div className="video-overlay">
                                                <div className="play-icon">
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            className="carousel-nav-btn next" 
                            onClick={scrollNext}
                            disabled={currentIndex >= maxIndex}
                            aria-label="Next videos"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="carousel-pagination">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
                                onClick={() => goToPage(index)}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="about-story-section">
                <div className="container">
                    <div className="about-story-grid">
                        <div className="about-story-content">
                            <span className="section-badge">Our Story</span>
                            <h2 className="about-story-title">About Almas Enterprise</h2>
                            <p className="about-story-text">
                                Almas Enterprise is a trusted automotive components manufacturer delivering
                                precision-engineered parts for OEMs and the aftermarket. Our focus on quality,
                                innovation, and reliability drives everything we produce.
                            </p>
                            <p className="about-story-text">
                                With decades of experience in the automotive industry, we've established ourselves
                                as a leading provider of high-quality auto parts. Our state-of-the-art manufacturing
                                facilities and skilled workforce ensure that every component meets the highest
                                standards of excellence.
                            </p>
                        </div>
                        <div className="about-story-stats">
                            <div className="stat-card">
                                <span className="stat-number">25+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Products</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">1000+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Team Members</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section">
                <div className="container">
                    {/* Our Mission */}
                    <div className="mv-card mission-card">
                        <div className="mv-image-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" 
                                alt="Our Mission - Innovation and Excellence"
                            />
                            <div className="mv-image-overlay">
                                <div className="mv-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4"></path>
                                        <path d="M12 8h.01"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mv-content">
                            <span className="mv-badge">Our Mission</span>
                            <h3 className="mv-title">Driving Excellence Forward</h3>
                            <p className="mv-text">
                                To deliver precision-engineered automotive components that exceed industry standards, 
                                empowering our partners with reliable solutions that drive their success.
                            </p>
                            <div className="mv-highlights">
                                <div className="mv-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <span>Quality First</span>
                                </div>
                                <div className="mv-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <span>Customer Focus</span>
                                </div>
                                <div className="mv-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <span>Innovation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Vision */}
                    <div className="mv-card vision-card">
                        <div className="mv-content">
                            <span className="mv-badge vision-badge">Our Vision</span>
                            <h3 className="mv-title">Shaping Tomorrow's Mobility</h3>
                            <p className="mv-text">
                                To be the global leader in automotive component manufacturing, recognized for 
                                innovation, sustainability, and unwavering commitment to excellence.
                            </p>
                            <div className="mv-highlights">
                                <div className="mv-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <span>Global Reach</span>
                                </div>
                                <div className="mv-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <span>Sustainability</span>
                                </div>
                                <div className="mv-highlight-item">
                                    <span className="highlight-icon">✓</span>
                                    <span>Leadership</span>
                                </div>
                            </div>
                        </div>
                        <div className="mv-image-wrapper">
                            <img 
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" 
                                alt="Our Vision - Future of Automotive"
                            />
                            <div className="mv-image-overlay">
                                <div className="mv-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Video Popup Modal */}
            {selectedVideo && (
                <div className="video-popup-overlay" onClick={closeVideoPopup}>
                    <div className="video-popup" onClick={e => e.stopPropagation()}>
                        <button className="popup-close-btn" onClick={closeVideoPopup} aria-label="Close video">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <video
                            src={selectedVideo}
                            controls
                            autoPlay
                            className="popup-video"
                        />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default AboutUsPage;
