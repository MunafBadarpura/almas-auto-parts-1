import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Brands.css';

interface Brand {
    name: string;
    logo: string;
}

const Brands = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const brands: Brand[] = [
        { name: 'Tata Motors', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png' },
        { name: 'Mahindra', logo: 'https://images.seeklogo.com/logo-png/41/1/mahindra-suvs-logo-png_seeklogo-410248.png' },
        { name: 'Maruti Suzuki', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Suzuki_logo_2025_%28vertical%29.svg/960px-Suzuki_logo_2025_%28vertical%29.svg.png?20250403214606' },
        { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png' },
        { name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/200px-Honda.svg.png' },
        { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/200px-Toyota.svg.png' },
    ];

    return (
        <section className="brands" id="brands" ref={ref as React.RefObject<HTMLElement>}>
            <div className={`brands-wrapper scroll-animate-scale ${isVisible ? 'visible' : ''}`}>
                <div className="container">
                    <div className="brands-header">
                        <h2 className="brands-title">Brands We Serve</h2>
                        <p className="brands-subtitle">
                            Our precision-engineered parts are compatible with leading automotive manufacturers worldwide
                        </p>
                    </div>

                    <div className="brands-grid">
                        {brands.map((brand, index) => (
                            <div 
                                key={index} 
                                className={`brand-card scroll-animate ${isVisible ? 'visible' : ''} delay-${index + 1}`}
                            >
                                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                                <span className="brand-name">{brand.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="brands-cta">
                        <p className="cta-text">Can't find what you're looking for?</p>
                        <a href="#contact-us" className="btn btn-cta">
                            Request Custom Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
