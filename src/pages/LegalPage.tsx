import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LegalPage.css';

const LegalPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Navbar />
            
            {/* Hero Section */}
            <section className="legal-hero">
                <div className="container">
                    <div className="legal-hero-content">
                        <div className="legal-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                            </svg>
                        </div>
                        <h1 className="legal-hero-title">Legal Information</h1>
                        <p className="legal-hero-subtitle">
                            Your privacy and rights are important to us. Please review our Privacy Policy and Terms of Service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Legal Content */}
            <section className="legal-content-section">
                <div className="container">
                    <div className="legal-navigation">
                        <a href="#privacy-policy" className="legal-nav-link">Privacy Policy</a>
                        <a href="#terms-of-service" className="legal-nav-link">Terms of Service</a>
                    </div>

                    {/* Privacy Policy Section */}
                    <div id="privacy-policy" className="legal-section">
                        <div className="section-header">
                            <h2 className="section-title">Privacy Policy</h2>
                            <p className="section-intro">
                                At Almas Enterprise, your privacy is important to us. This Privacy Policy outlines how we collect, use, and 
                                protect your personal information when you use our website and services. By accessing our website, 
                                you agree to the terms of this policy.
                            </p>
                        </div>

                        <div className="legal-content">
                            <div className="content-block">
                                <h3>1. Information We Collect</h3>
                                <p>We may collect the following types of personal information:</p>
                                <ul>
                                    <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and other contact details.</li>
                                    <li><strong>Order Information:</strong> Order history, age, medical information, and care preferences.</li>
                                    <li><strong>Payment Information:</strong> Credit card details and billing address for processing payments.</li>
                                    <li><strong>Cookies and Usage Data:</strong> Non-personal information such as browser type, IP address, and website usage patterns.</li>
                                </ul>
                            </div>

                            <div className="content-block">
                                <h3>2. How We Use Your Information</h3>
                                <p>We use your personal information for the following purposes:</p>
                                <ul>
                                    <li>To manage your account and provide your enrollment</li>
                                    <li>To communicate important information, such as changes to our services or policies</li>
                                    <li>To improve our website functionality and user experience</li>
                                    <li>To comply with legal obligations and provide security for our services</li>
                                </ul>
                            </div>

                            <div className="content-block">
                                <h3>3. Data Security</h3>
                                <p>
                                    We are committed to protecting your data. We use secure methods to store and process your 
                                    information, including encryption and access controls. However, no online transmission is entirely 
                                    secure, and we cannot guarantee complete security.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>4. Sharing Your Information</h3>
                                <p>We do not share, sell, or rent your personal information to third parties, except in the following circumstances:</p>
                                <ul>
                                    <li>With service providers who assist in operating our website and services</li>
                                    <li>In response to legal obligations or to protect our rights and property</li>
                                    <li>With your consent, for purposes not described in this policy</li>
                                </ul>
                            </div>

                            <div className="content-block">
                                <h3>5. Cookies</h3>
                                <p>
                                    Our website uses cookies to enhance your browsing experience. Cookies help us understand your 
                                    preferences based on previous or current site activity, enabling us to provide improved services. You 
                                    can control your cookie preferences through your browser settings.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>6. Your Rights</h3>
                                <p>You have the right to:</p>
                                <ul>
                                    <li>Access and update your personal information</li>
                                    <li>Request the deletion of your data</li>
                                    <li>Opt-out of any marketing communications</li>
                                </ul>
                            </div>

                            <div className="content-block">
                                <h3>7. Changes to This Privacy Policy</h3>
                                <p>
                                    We may update this Privacy Policy from time to time and will post any changes with a revised 
                                    "Effective Date." Your continued use of our website after any changes signifies your acceptance of 
                                    the updated policy.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>8. Contact Us</h3>
                                <p>
                                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                                </p>
                                <div className="contact-info">
                                    <p><strong>Email:</strong> info@almasenterprise.com</p>
                                    <p><strong>Phone:</strong> +91 99999 88888</p>
                                    <p><strong>Address:</strong> Chaapi, Banaskantha, Gujarat – 385511</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terms of Service Section */}
                    <div id="terms-of-service" className="legal-section">
                        <div className="section-header">
                            <h2 className="section-title">Terms of Service</h2>
                            <p className="section-intro">
                                Welcome to Almas Enterprise. These Terms of Service govern your use of our website and services. 
                                By accessing or using our services, you agree to be bound by these terms.
                            </p>
                        </div>

                        <div className="legal-content">
                            <div className="content-block">
                                <h3>1. Acceptance of Terms</h3>
                                <p>
                                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                                    If you do not agree to abide by the above, please do not use this service.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>2. Use License</h3>
                                <p>
                                    Permission is granted to temporarily download one copy of the materials on Almas Enterprise's website for personal, 
                                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                </p>
                                <ul>
                                    <li>Modify or copy the materials</li>
                                    <li>Use the materials for any commercial purpose or for any public display</li>
                                    <li>Attempt to reverse engineer any software contained on the website</li>
                                    <li>Remove any copyright or other proprietary notations from the materials</li>
                                </ul>
                            </div>

                            <div className="content-block">
                                <h3>3. Product Information</h3>
                                <p>
                                    We strive to provide accurate product information, but we do not warrant that product descriptions or other content 
                                    is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, 
                                    or omissions and to change or update information at any time without prior notice.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>4. Orders and Payment</h3>
                                <p>
                                    All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. 
                                    Payment must be received before products are shipped. We accept various payment methods as indicated on our website.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>5. Shipping and Delivery</h3>
                                <p>
                                    We will make every effort to deliver products within the estimated timeframe. However, delivery dates are estimates only 
                                    and we are not liable for any delays. Risk of loss and title for products pass to you upon delivery to the carrier.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>6. Returns and Refunds</h3>
                                <p>
                                    Returns are accepted within 30 days of purchase for unused products in original packaging. Custom or special-order 
                                    items may not be returnable. Refunds will be processed within 5-7 business days after we receive the returned items.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>7. Limitation of Liability</h3>
                                <p>
                                    In no event shall Almas Enterprise or its suppliers be liable for any damages (including, without limitation, damages for 
                                    loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, 
                                    even if we have been notified orally or in writing of the possibility of such damage.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>8. Governing Law</h3>
                                <p>
                                    These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably 
                                    submit to the exclusive jurisdiction of the courts in that State or location.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>9. Changes to Terms</h3>
                                <p>
                                    We reserve the right to revise these terms of service at any time without notice. By using this website, 
                                    you are agreeing to be bound by the then current version of these terms of service.
                                </p>
                            </div>

                            <div className="content-block">
                                <h3>10. Contact Information</h3>
                                <p>
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="contact-info">
                                    <p><strong>Email:</strong> info@almasenterprise.com</p>
                                    <p><strong>Phone:</strong> +91 99999 88888</p>
                                    <p><strong>Address:</strong> Chaapi, Banaskantha, Gujarat – 385511</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LegalPage;