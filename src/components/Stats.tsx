import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Stats.css';

interface StatItem {
    number: number;
    suffix: string;
    label: string;
}

const useCountUp = (end: number, isVisible: boolean, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, isVisible, duration]);

    return count;
};

const StatNumber = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
    const count = useCountUp(value, isVisible, 2000);
    
    return (
        <div className="stat-number">
            <span className="stat-value">{count}</span>
            <span className="stat-suffix">{suffix}</span>
        </div>
    );
};

const Stats = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const stats: StatItem[] = [
        { number: 25, suffix: '+', label: 'Years Experience' },
        { number: 85, suffix: '+', label: 'Unique components manufactured annualy' },
        { number: 100, suffix: '+', label: 'Trusted Clients' },
        // { number: 100, suffix: '%', label: 'Quality Standards' },
    ];

    return (
        <section className="stats" ref={ref as React.RefObject<HTMLElement>}>
            <div className="stats-container">
                <div className={`stats-content scroll-animate ${isVisible ? 'visible' : ''}`}>
                    <h2 className="stats-title">Numbers That Tell Our Story</h2>
                    <p className="stats-description">
                        Behind every number is our commitment to quality, precision, and client satisfaction.
                    </p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className={`stat-item scroll-animate ${isVisible ? 'visible' : ''} delay-${index + 1}`}
                        >
                            <StatNumber value={stat.number} suffix={stat.suffix} isVisible={isVisible} />
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
