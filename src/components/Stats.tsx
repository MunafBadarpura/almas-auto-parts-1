import { useEffect, useRef, useState } from 'react';
import './Stats.css';

interface StatItem {
    number: string;
    suffix: string;
    label: string;
    icon: string;
}

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const stats: StatItem[] = [
        { number: '25', suffix: '+', label: 'Years of Manufacturing Experience', icon: '🏭' },
        { number: '500', suffix: '+', label: 'Products Manufactured', icon: '⚙️' },
        { number: '100', suffix: '+', label: 'Trusted Clients', icon: '🤝' },
        { number: '100', suffix: '%', label: 'Quality & Safety Standards', icon: '✓' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats" ref={sectionRef}>
            <div className="container">
                <div className="stats-header">
                    <h2 className="section-title">Our Story in Numbers</h2>
                    <p className="section-subtitle">
                        Trusted by leading automotive brands for over two decades
                    </p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-card ${isVisible ? 'animate' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="stat-icon">{stat.icon}</span>
                            <div className="stat-number">
                                <span className="stat-value">{stat.number}</span>
                                <span className="stat-suffix">{stat.suffix}</span>
                            </div>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
