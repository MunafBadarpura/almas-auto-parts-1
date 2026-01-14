import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhyChooseUs.css';

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
}

const WhyChooseUs = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const features: FeatureItem[] = [
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
            title: 'High-Precision Manufacturing'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
            title: 'OEM & Aftermarket Expertise'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
            title: 'Strict Quality Control'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
            title: 'Modern Machinery'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="2" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
            title: 'Timely Delivery'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
            title: 'Competitive Pricing'
        },
    ];

    return (
        <section className="why-choose-us" id="services" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className="why-content">
                    <div className={`why-text scroll-animate-left ${isVisible ? 'visible' : ''}`}>
                        <span className="why-badge">Why Us</span>
                        <h2 className="why-title">
                            Why Choose Our<br />
                            <span className="accent">Auto Parts Factory?</span>
                        </h2>
                        <p className="why-description">
                            We combine decades of expertise with cutting-edge technology to deliver
                            automotive components that exceed industry standards.
                        </p>
                    </div>

                    <div className={`why-features scroll-animate-right ${isVisible ? 'visible' : ''}`}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-item"
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <span className="feature-title">{feature.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
