import React from 'react';
import Portal from '../portal';

import './modal.scss';

const Remodal = (props) => {
    const { children, size, title, hasCloseBtn = true, close, render } = props;

    return (
        <Portal>
            <div className={`modal-content ${size} ${hasCloseBtn ? 'p-t-l' : ''}`}>
                {hasCloseBtn &&
                    <button
                        type="button"
                        className="btn-close"
                        onClick={close}
                    >
                        <i className="far fa-times-circle"></i>
                    </button>
                }
                <h3>{title}</h3>

                {render
                    ? render(children)
                    : React.Children.map(children, (child) => {
                        return React.cloneElement(child, { close });
                    })
                }
            </div>
        </Portal>
    );
};

export default Remodal;