import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import productsData from '../data/products.json';
import './Products.css';

// Import images
import img1 from '../assets/productImages/1.webp';
import img2 from '../assets/productImages/2.webp';
import img3 from '../assets/productImages/3.webp';

const imageMap: { [key: string]: string } = {
    '/src/assets/productImages/1.webp': img1,
    '/src/assets/productImages/2.webp': img2,
    '/src/assets/productImages/3.webp': img3,
};

interface Product {
    id: number;
    title: string;
    category: string;
    weight: string;
    tag: string;
    image: string;
    description: string;
    features: string[];
    specifications: { [key: string]: string };
    order: number;
}

const Products = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    // Get first 3 products
    const products = (productsData.products as unknown as Product[]).slice(0, 3);

    const getTagClass = (tag: string) => {
        switch (tag.toLowerCase()) {
            case 'best selling': return 'tag-best-selling';
            case 'trending': return 'tag-trending';
            case 'new arrival': return 'tag-new';
            default: return '';
        }
    };

    return (
        <section className="products" id="products" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className={`products-header scroll-animate ${isVisible ? 'visible' : ''}`}>
                    <span className="products-badge">Our Products</span>
                    <h2 className="section-title">Premium Auto Parts</h2>
                    <p className="section-subtitle">
                        We manufacture a wide range of automotive components designed for
                        performance, safety, and durability.
                    </p>
                </div>

                <div className="home-products-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`home-product-card scroll-animate-scale ${isVisible ? 'visible' : ''} delay-${index + 1}`}
                        >
                            <div className="home-product-image-wrapper">
                                <span className={`home-product-tag ${getTagClass(product.tag)}`}>{product.tag}</span>
                                <img src={imageMap[product.image]} alt={product.title} className="home-product-image" />
                            </div>
                            <div className="home-product-info">
                                <span className="home-product-category">{product.category}</span>
                                <h3 className="home-product-title">{product.title}</h3>
                                <span className="home-product-weight">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                    </svg>
                                    {product.weight}
                                </span>
                                <Link to={`/products/${product.id}`} className="home-product-btn">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`products-cta scroll-animate ${isVisible ? 'visible' : ''} delay-4`}>
                    <Link to="/products" className="btn btn-primary">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;
