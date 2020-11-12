import React from 'react';
import Portal from '../portal';

import './modal.scss';

const Remodal = (props) => {
    const { children, size, title, hasCloseBtn = true, onClose, render } = props;

    return (
        <Portal onClose={onClose}>
            <div className={`modal-content ${size} ${hasCloseBtn ? 'p-t-l' : ''}`}>
                {hasCloseBtn &&
                    <button
                        type="button"
                        className="btn-close"
                        onClick={onClose}
                    >
                        <i className="far fa-times-circle"></i>
                    </button>
                }
                <h3>{title}</h3>

                {render
                    ? render(children)
                    : React.Children.map(children, (child) => {
                        return React.cloneElement(child, { onClose });
                    })
                }
            </div>
        </Portal>
    );
};

export default Remodal;