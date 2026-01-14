import './WhyChooseUs.css';

interface FeatureItem {
    icon: string;
    title: string;
}

const WhyChooseUs = () => {
    const features: FeatureItem[] = [
        { icon: '⚡', title: 'High-Precision Manufacturing' },
        { icon: '🏆', title: 'OEM & Aftermarket Expertise' },
        { icon: '✓', title: 'Strict Quality Control & Testing' },
        { icon: '🔧', title: 'Modern Machinery & Skilled Workforce' },
        { icon: '🚀', title: 'Timely Delivery & Competitive Pricing' },
    ];

    return (
        <section className="why-choose-us" id="services">
            <div className="container">
                <div className="why-content">
                    <div className="why-text">
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

                    <div className="why-features">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="feature-icon">{feature.icon}</span>
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
