import React, { useState } from 'react';

import './back-to-top-button.scss';

const BactToTopButton = () => {
    const [showBtn, setshowBtn] = useState(false)

    const checkScrollTop = () => {
        if (!showBtn && window.pageYOffset > 400) {
            setshowBtn(true)
        } else if (showBtn && window.pageYOffset <= 400) {
            setshowBtn(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <button
            className="back-to-top-btn"
            onClick={scrollTop}
            style={{display: showBtn ? 'block' : 'none'}}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default BactToTopButton;