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

    // Get first 4 products sorted by order
    const products = (productsData.products as unknown as Product[])
        .sort((a, b) => a.order - b.order)
        .slice(0, 4);

    const getTagClass = (tag: string) => {
        switch (tag.toLowerCase()) {
            case 'best selling': return 'tag-best-selling';
            case 'trending': return 'tag-trending';
            case 'new arrival': return 'tag-new';
            default: return '';
        }
    };

    const generateWhatsAppLink = (product: Product) => {
        const phone = '918879939789';
        const message = `Hey, I want to get details of this product\n\n*Title*: ${product.title}\n*Category*: ${product.category}\n*Weight*: ${product.weight}\n*Product Tag*: ${product.tag}`;
        return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
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
                            <Link to={`/products/${product.id}`} className="home-product-card-link">
                                <div className="home-product-image-wrapper">
                                    <span className={`home-product-tag ${getTagClass(product.tag)}`}>{product.tag}</span>
                                    <img src={imageMap[product.image]} alt={product.title} className="home-product-image" />
                                </div>
                                <div className="home-product-info-content">
                                    <div className="home-product-meta-row">
                                        <span className="home-product-category">{product.category}</span>
                                        <span className="home-product-weight">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                                <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                            </svg>
                                            {product.weight}
                                        </span>
                                    </div>
                                    <h3 className="home-product-title">{product.title}</h3>
                                </div>
                            </Link>
                            <div className="home-product-actions">
                                <Link to={`/products/${product.id}`} className="btn-view-icon" title="View Details">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </Link>
                                <a 
                                    href={generateWhatsAppLink(product)} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-order"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    Order Now
                                </a>
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
