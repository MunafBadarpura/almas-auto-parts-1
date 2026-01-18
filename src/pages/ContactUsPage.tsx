import { useState, useEffect, type FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactUsPage.css';

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
}

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email';
                return '';
            case 'phone':
                if (!value.trim()) return 'Phone number is required';
                const phoneRegex = /^[+]?[\d\s-]{10,}$/;
                if (!phoneRegex.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number';
                return '';
            default:
                return '';
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        newErrors.name = validateField('name', formData.name) || undefined;
        newErrors.email = validateField('email', formData.email) || undefined;
        newErrors.phone = validateField('phone', formData.phone) || undefined;
        
        setErrors(newErrors);
        return !newErrors.name && !newErrors.email && !newErrors.phone;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTouched({ name: true, email: true, phone: true });
        
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error || undefined }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error || undefined }));
    };



    const handleSendAnother = () => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
        setTouched({});
        setIsSubmitted(false);
    };

    return (
        <div className="contact-us-page">
            <Navbar />
            
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <span className="contact-hero-badge">Get In Touch</span>
                    <h1 className="contact-hero-title">Contact Us</h1>
                    <p className="contact-hero-subtitle">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        <div className="contact-info-card">
                            <div className="info-card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3 className="info-card-title">Visit Our Office</h3>
                            <p className="info-card-text">Chaapi, Banaskantha</p>
                            <p className="info-card-text">Gujarat – 385511</p>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <h3 className="info-card-title">Call Us</h3>
                            <p className="info-card-text">+91 99999 88888</p>
                            <p className="info-card-text">+91 88888 77777</p>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <h3 className="info-card-title">Email Us</h3>
                            <p className="info-card-text">info@almasenterprise.com</p>
                            <p className="info-card-text">support@almasenterprise.com</p>
                        </div>

                        <div className="contact-info-card">
                            <div className="info-card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className="info-card-title">Working Hours</h3>
                            <p className="info-card-text">Mon - Sat: 9 AM - 8 PM</p>
                            <p className="info-card-text">Sunday: 10 AM - 6 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-main-grid">
                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2 className="form-section-title">Send Us a Message</h2>
                            <p className="form-section-subtitle">Fill out the form below and we'll get back to you shortly.</p>
                            
                            {isSubmitted ? (
                                <div className="success-message">
                                    <div className="success-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <h3 className="success-title">Thank You!</h3>
                                    <p className="success-text">
                                        We have received your enquiry. Our team will contact you shortly.
                                    </p>
                                    <button 
                                        type="button" 
                                        className="btn-send-another"
                                        onClick={handleSendAnother}
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-page-form" onSubmit={handleSubmit} noValidate>
                                    <div className={`form-group ${errors.name && touched.name ? 'error' : ''}`}>
                                        <label htmlFor="name">Full Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && touched.name && (
                                            <span className="error-message">{errors.name}</span>
                                        )}
                                    </div>

                                    <div className={`form-group ${errors.email && touched.email ? 'error' : ''}`}>
                                        <label htmlFor="email">Email Address <span className="required">*</span></label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && touched.email && (
                                            <span className="error-message">{errors.email}</span>
                                        )}
                                    </div>

                                    <div className={`form-group ${errors.phone && touched.phone ? 'error' : ''}`}>
                                        <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter your phone number"
                                        />
                                        {errors.phone && touched.phone && (
                                            <span className="error-message">{errors.phone}</span>
                                        )}
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
                            )}
                        </div>

                        {/* Map */}
                        <div className="contact-map-container">
                            <h2 className="map-section-title">Find Us Here</h2>
                            <p className="map-section-subtitle">Visit our office for a face-to-face consultation.</p>
                            <div className="map-wrapper">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5!2d72.0!3d24.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDAwJzAwLjAiTiA3MsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Almas Enterprise Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUsPage;
