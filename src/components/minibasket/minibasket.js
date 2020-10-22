import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './minibasket.scss';

import EmptyOverlay from './empty-overlay';
import { minibasketLoaded } from '../../actions';

const MiniBasket = (props) => {

    const { isMiniBasketOpen, minibasketLoaded } = props;

    useEffect(() => {
        minibasketLoaded(isMiniBasketOpen);
    }, [minibasketLoaded, isMiniBasketOpen]);

    
    return (
        <div className={`minibasket ${isMiniBasketOpen ? 'is-open' : ''}`}>
            <div className="minibasket-overlay"></div>
            <div className="minibasket-container">
                <EmptyOverlay />
                <ul className="minibasket-items">
                    <li>test</li>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = ({ isMiniBasketOpen }) => {
    return { isMiniBasketOpen }
};

const mapDispatchToProps = {
    minibasketLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniBasket);