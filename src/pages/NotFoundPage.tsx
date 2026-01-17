import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <div className="not-found-container">
                <div className="not-found-content">
                    <div className="error-visual">
                        <div className="error-number">4</div>
                        <div className="error-icon">
                            <div className="gear-icon">
                                <div className="gear-center"></div>
                                <div className="gear-teeth"></div>
                            </div>
                        </div>
                        <div className="error-number">4</div>
                    </div>
                    
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                    </div>

                    <div className="error-text">
                        <h1>Page Not Found</h1>
                        <p>This page no longer exists or has been removed.</p>
                        <p>Turn that frown upside down by going to home.</p>
                        
                        <Link to="/" className="btn btn-primary home-btn">
                            Go back to home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;