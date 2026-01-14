import { useState, FormEvent } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
                                <span className="detail-icon">📍</span>
                                <div className="detail-content">
                                    <span className="detail-label">Address</span>
                                    <span className="detail-value">Chaapi, Banaskantha, Gujarat – 385511</span>
                                </div>
                            </div>

                            <div className="detail-item">
                                <span className="detail-icon">📧</span>
                                <div className="detail-content">
                                    <span className="detail-label">Email</span>
                                    <span className="detail-value">AlmasAutoParts@contact.com</span>
                                </div>
                            </div>

                            <div className="detail-item">
                                <span className="detail-icon">📞</span>
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
                                <label htmlFor="name">Full Name</label>
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
                                <label htmlFor="email">Email Address</label>
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
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
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
                                    required
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
