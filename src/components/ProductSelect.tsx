import { useState, useRef, useEffect } from 'react';
import './ProductSelect.css';

interface ProductSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
}

const ProductSelect = ({ value, onChange, options, placeholder = 'Select a product category' }: ProductSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={`custom-select ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
            <div className="select-trigger" onClick={() => setIsOpen(!isOpen)}>
                <span className={value ? 'selected-value' : 'placeholder'}>
                    {value || placeholder}
                </span>
                <svg
                    className="select-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            {isOpen && (
                <div className="select-dropdown">
                    <div className="select-options">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`select-option ${value === option ? 'selected' : ''}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSelect;
