import './Testimonials.css';

interface Testimonial {
    id: number;
    text: string;
    author: string;
    company: string;
}

const Testimonials = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            text: "Reliable quality and timely delivery. Almas Enterprise is our trusted manufacturing partner.",
            author: "John Smith",
            company: "Automotive Distributor"
        },
        {
            id: 2,
            text: "Exceptional precision in every component. Their attention to detail sets them apart.",
            author: "Sarah Johnson",
            company: "OEM Manufacturer"
        },
        {
            id: 3,
            text: "Outstanding customer service and product quality. Highly recommend for bulk orders.",
            author: "Michael Chen",
            company: "Wholesale Supplier"
        },
        {
            id: 4,
            text: "Consistent quality across all product lines. A truly dependable partner.",
            author: "Emma Davis",
            company: "Aftermarket Retailer"
        },
        {
            id: 5,
            text: "Their engineering expertise and commitment to innovation is unmatched in the industry.",
            author: "Robert Wilson",
            company: "Auto Parts Chain"
        },
        {
            id: 6,
            text: "Best value for quality auto components. Long-term partnership we cherish.",
            author: "Lisa Brown",
            company: "Regional Distributor"
        }
    ];

    return (
        <section className="testimonials">
            <div className="testimonials-header">
                <div className="container">
                    <span className="testimonials-badge">Testimonials</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">
                        Trusted by industry leaders and valued partners worldwide
                    </p>
                </div>
            </div>

            <div className="testimonials-marquee">
                <div className="marquee-track">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-stars">
                                {'★'.repeat(5)}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className="author-info">
                                    <span className="author-name">{testimonial.author}</span>
                                    <span className="author-company">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
