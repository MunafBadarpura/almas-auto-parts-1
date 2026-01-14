import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Products.css';

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
}

const Products = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const products: Product[] = [
        {
            id: 1,
            name: 'Engine Components',
            description: 'High-performance engine parts engineered for durability and efficiency.',
            image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80'
        },
        {
            id: 2,
            name: 'Suspension Parts',
            description: 'Premium suspension components for superior handling and ride comfort.',
            image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80'
        },
        {
            id: 3,
            name: 'Brake System Components',
            description: 'Safety-certified brake parts meeting the highest quality standards.',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80'
        },
        {
            id: 4,
            name: 'Transmission Parts',
            description: 'Precision-manufactured transmission components for smooth operation.',
            image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=500&q=80'
        }
    ];

    return (
        <section className="products" id="products" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className={`products-header scroll-animate ${isVisible ? 'visible' : ''}`}>
                    <span className="products-badge">Our Products</span>
                    <h2 className="section-title">Our Products</h2>
                    <p className="section-subtitle">
                        We manufacture a wide range of automotive components designed for
                        performance, safety, and durability.
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`product-card scroll-animate-scale ${isVisible ? 'visible' : ''} delay-${index + 1}`}
                        >
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    <button className="product-btn">View Details</button>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`products-cta scroll-animate ${isVisible ? 'visible' : ''} delay-5`}>
                    <a href="#contact-us" className="btn btn-primary">
                        View All Products
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Products;
