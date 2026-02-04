import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ManufacturingCapabilities.css';

const ManufacturingCapabilities = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const capabilities = [
        'CNC laser cutting of mild steel, stainless steel, and aluminum',
        'Press brake bending for automotive and structural components',
        'Welded and fabricated assemblies',
        'Prototype, development, and repeat production batches',
        'Export-ready packing for international shipment'
    ];

    const applications = [
        'Truck and trailer body panels',
        'Commercial vehicle structural components',
        'Utility vehicle and fleet body parts',
        'Aftermarket and replacement metal components'
    ];

    return (
        <section className="manufacturing-capabilities" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className={`manufacturing-content scroll-animate-up ${isVisible ? 'visible' : ''}`}>
                    <div className="manufacturing-grid">
                        {/* Manufacturing Capabilities */}
                        <div className="capability-section">
                            <div className="section-header">
                                <div className="section-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                        <path d="M2 17l10 5 10-5"/>
                                        <path d="M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3 className="section-title">Manufacturing Capabilities</h3>
                            </div>
                            <ul className="capability-list">
                                {capabilities.map((capability, index) => (
                                    <li key={index} className="capability-item">
                                        <div className="capability-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <span className="capability-text">{capability}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Applications We Support */}
                        <div className="application-section">
                            <div className="section-header">
                                <div className="section-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="3" width="7" height="7" rx="1"/>
                                        <rect x="14" y="3" width="7" height="7" rx="1"/>
                                        <rect x="3" y="14" width="7" height="7" rx="1"/>
                                        <rect x="14" y="14" width="7" height="7" rx="1"/>
                                    </svg>
                                </div>
                                <h3 className="section-title">Applications We Support</h3>
                            </div>
                            <ul className="application-list">
                                {applications.map((application, index) => (
                                    <li key={index} className="application-item">
                                        <div className="application-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <span className="application-text">{application}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingCapabilities;