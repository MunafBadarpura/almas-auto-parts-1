import { useState, type FormEvent } from 'react';
import './Contact.css';
import ProductSelect from './ProductSelect';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: ''
    });

    const products = [
        'Engine Components',
        'Transmission Parts',
        'Suspension Systems',
        'Brake Components',
        'Fuel System Parts',
        'Electrical Components',
        'Body & Chassis Parts',
        'Other'
    ];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', product: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleProductChange = (value: string) => {
        setFormData({
            ...formData,
            product: value
        });
    };

    return (
        <section className="contact" id="contact-us">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <span className="contact-badge">Get in Touch</span>
                        <h2 className="contact-title">Contact Us</h2>
                        <p className="contact-description">
                            Have questions about our products or services? We'd love to hear from you.
                            Reach out and our team will respond as soon as possible.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="detail-content">
                                    <span className="detail-label">Address</span>
                                    <span className="detail-value">Chaapi, Banaskantha, Gujarat – 385511</span>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className="detail-content">
                                    <span className="detail-label">Email</span>
                                    <span className="detail-value">AlmasAutoParts@contact.com</span>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="detail-content">
                                    <span className="detail-label">Phone</span>
                                    <span className="detail-value">+91 98765 43210</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address <span className="required">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="product">Select Product</label>
                                <ProductSelect
                                    value={formData.product}
                                    onChange={handleProductChange}
                                    options={products}
                                    placeholder="Select a product category"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    rows={5}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
