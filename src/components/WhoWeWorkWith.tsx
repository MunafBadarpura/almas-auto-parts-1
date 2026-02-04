import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhoWeWorkWith.css';

const WhoWeWorkWith = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const clientTypes = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            ),
            title: 'OEM Suppliers',
            description: 'Supporting original equipment manufacturers with precision components'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
            ),
            title: 'Exporters',
            description: 'Reliable manufacturing partner for international markets'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                </svg>
            ),
            title: 'Distributors',
            description: 'Quality components for distribution networks'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            ),
            title: 'Offshore Partners',
            description: 'Businesses seeking reliable offshore manufacturing solutions'
        }
    ];

    return (
        <section className="who-we-work-with" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className={`who-header scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    <h2 className="who-title">Who We Work With</h2>
                    <p className="who-subtitle">
                        We support OEM suppliers, exporters, distributors, and businesses seeking a reliable 
                        offshore manufacturing partner for fabricated metal components.
                    </p>
                </div>

                <div className={`who-grid scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    {clientTypes.map((client, index) => (
                        <div 
                            key={index} 
                            className="client-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="client-icon">
                                {client.icon}
                            </div>
                            <h3 className="client-title">{client.title}</h3>
                            <p className="client-description">{client.description}</p>
                        </div>
                    ))}
                </div>

                <div className={`who-experience scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    <div className="experience-content">
                        <div className="experience-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <div className="experience-text">
                            <h3 className="experience-title">Proven Track Record</h3>
                            <p className="experience-description">
                                Our experience includes work supplied into established automotive and 
                                commercial vehicle programs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeWorkWith;