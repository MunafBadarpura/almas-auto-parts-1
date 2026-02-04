import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhyChooseUs.css';

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const WhyChooseUs = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const features: FeatureItem[] = [
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
            title: 'Proven Industry Experience',
            description: 'Proven experience supplying components used in established automotive and commercial vehicle programs.'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 8V6l-3-3H5L2 6v2h2v12h16V8h2zm-4-2.5L19.5 7h-3V4.5L18 5.5zM6 5.5L7.5 7h-3L6 5.5zM18 18H6V8h12v10z" /><path d="M8 11h3v3H8zM13 11h3v3h-3z" /></svg>,
            title: 'Contract Manufacturing Partner',
            description: 'Operate as a contract manufacturing partner, not a trading company.'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
            title: 'CNC Precision Technology',
            description: 'CNC laser cutting and precision bending with repeatable quality.'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
            title: 'Scalable Production',
            description: 'Ability to support both development batches and production volumes.'
        },
        {
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
            title: 'Reliable Processes',
            description: 'Clear communication, controlled processes, and dependable timelines.'
        },
    ];

    return (
        <section className="why-choose-us" id="services" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className={`why-header scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    <span className="why-badge">Why Choose Us</span>
                    <h2 className="why-title">
                        Why Choose Our <span className="accent">Auto Parts Factory?</span>
                    </h2>
                    <p className="why-subtitle">
                        We combine precision engineering with reliable processes to deliver
                        automotive components that meet the highest industry standards.
                    </p>
                </div>

                <div className={`why-features scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">{feature.icon}</div>
                                <span className="feature-number">{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
