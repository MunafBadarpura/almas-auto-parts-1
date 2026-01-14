import { useState } from 'react';
import './FAQ.css';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: 'Do you manufacture OEM and aftermarket parts?',
            answer: 'Yes, we manufacture both OEM (Original Equipment Manufacturer) and aftermarket parts. Our facilities are equipped to meet the stringent requirements of OEM specifications while also producing high-quality aftermarket components for various vehicle makes and models.'
        },
        {
            id: 2,
            question: 'What quality standards do you follow?',
            answer: 'We adhere to international quality standards including ISO 9001:2015, IATF 16949, and other industry-specific certifications. Every component undergoes rigorous quality control testing to ensure durability, safety, and performance.'
        },
        {
            id: 3,
            question: 'Do you support bulk orders?',
            answer: 'Absolutely! We specialize in bulk and wholesale orders for distributors, retailers, and OEMs. Our production capacity allows us to handle large volume orders with consistent quality and competitive pricing.'
        },
        {
            id: 4,
            question: 'How can I request a quote?',
            answer: 'You can request a quote by filling out our contact form, emailing us at AlmasAutoParts@contact.com, or calling our sales team directly. Please provide details about the products you need, quantities, and any specific requirements for accurate pricing.'
        },
        {
            id: 5,
            question: 'What is your typical lead time for orders?',
            answer: 'Lead times vary based on order size and product complexity. Standard products typically ship within 2-4 weeks, while custom orders may require 4-8 weeks. We always communicate realistic timelines and keep you updated throughout the process.'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="faq-header">
                    <span className="faq-badge">FAQ</span>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">
                        Find answers to common questions about our products and services
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
