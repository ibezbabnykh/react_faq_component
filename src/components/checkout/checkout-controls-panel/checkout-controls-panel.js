import React from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../../actions';

import './checkout-controls-panel.scss';

const CheckoutControlsPanel = ({ clearCart }) => {
    return (
       <div className="checkout-controls-panel">
           <button type="button" className="link" onClick={() => clearCart()}>Remove all</button>
       </div> 
    );
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutControlsPanel);