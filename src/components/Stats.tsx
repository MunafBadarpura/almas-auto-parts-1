import './Stats.css';

interface StatItem {
    number: string;
    suffix: string;
    label: string;
}

const Stats = () => {
    const stats: StatItem[] = [
        { number: '25', suffix: '+', label: 'Years Experience' },
        { number: '500', suffix: '+', label: 'Products Manufactured' },
        { number: '100', suffix: '+', label: 'Trusted Clients' },
        { number: '100', suffix: '%', label: 'Quality Standards' },
    ];

    return (
        <section className="stats">
            <div className="stats-container">
                <div className="stats-content">
                    <h2 className="stats-title">Numbers That Tell Our Story</h2>
                    <p className="stats-description">
                        Behind every number is our commitment to quality, precision, and customer satisfaction.
                    </p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
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
