import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import productsData from '../data/products.json';
import './ProductDetailPage.css';

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

const ProductDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const product = (productsData.products as unknown as Product[]).find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="product-detail-page">
                <Navbar />
                <div className="product-not-found">
                    <div className="container">
                        <h2>Product Not Found</h2>
                        <p>The product you're looking for doesn't exist.</p>
                        <Link to="/products" className="btn btn-primary">Back to Products</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const generateWhatsAppLink = () => {
        const phone = '918879939789';
        const message = `Hey, I want to get details of this product\n\n*Title*: ${product.title}\n*Category*: ${product.category}\n*Weight*: ${product.weight}\n*Product Tag*: ${product.tag}`;
        return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    };

    const getTagClass = (tag: string) => {
        switch (tag.toLowerCase()) {
            case 'best selling': return 'tag-best-selling';
            case 'trending': return 'tag-trending';
            case 'new arrival': return 'tag-new';
            default: return '';
        }
    };

    // Get related products (same category, excluding current)
    const relatedProducts = (productsData.products as unknown as Product[])
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="product-detail-page">
            <Navbar />

            {/* Breadcrumb */}
            <div className="breadcrumb-section">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/products">Products</Link>
                        <span>/</span>
                        <span className="current">{product.title}</span>
                    </nav>
                </div>
            </div>

            {/* Product Detail Section */}
            <section className="product-detail-section">
                <div className="container">
                    <div className="product-detail-grid">
                        {/* Product Image */}
                        <div className="product-detail-image">
                            <span className={`detail-tag ${getTagClass(product.tag)}`}>{product.tag}</span>
                            <img src={imageMap[product.image]} alt={product.title} />
                        </div>

                        {/* Product Info */}
                        <div className="product-detail-info">
                            <span className="detail-category">{product.category}</span>
                            <h1 className="detail-title">{product.title}</h1>
                            
                            <div className="detail-meta">
                                <div className="meta-item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                    </svg>
                                    <span>Weight: {product.weight}</span>
                                </div>
                            </div>

                            <p className="detail-description">{product.description}</p>

                            {/* Features */}
                            <div className="detail-features">
                                <h3>Key Features</h3>
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="detail-actions">
                                <a 
                                    href={generateWhatsAppLink()} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-order-detail"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    Order on WhatsApp
                                </a>
                                <Link to="/products" className="btn btn-secondary">
                                    Back to Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="specifications-section">
                <div className="container">
                    <h2 className="specs-title">Technical Specifications</h2>
                    <div className="specs-grid">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="spec-item">
                                <span className="spec-label">{key}</span>
                                <span className="spec-value">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="related-products-section">
                    <div className="container">
                        <h2 className="related-title">Related Products</h2>
                        <div className="related-grid">
                            {relatedProducts.map(relProduct => (
                                <Link to={`/products/${relProduct.id}`} key={relProduct.id} className="related-card">
                                    <div className="related-image">
                                        <img src={imageMap[relProduct.image]} alt={relProduct.title} />
                                    </div>
                                    <div className="related-info">
                                        <span className="related-category">{relProduct.category}</span>
                                        <h4 className="related-name">{relProduct.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
