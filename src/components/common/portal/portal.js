import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, onClose }) => {
    let modalRoot = document.getElementById('modal');

    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.setAttribute('id', 'modal');
        document.body.appendChild(modalRoot);
    }

    const modalElement = document.createElement('div');
    const modalOverlay = document.createElement('div');
    modalElement.setAttribute('class', 'modal');
    modalOverlay.setAttribute('class', 'modal-overlay');
    modalOverlay.onclick = onClose;
    modalElement.appendChild(modalOverlay);

    useEffect(() => {
        modalRoot.appendChild(modalElement);

        return () => modalRoot.removeChild(modalElement);
    });

    return createPortal(children, modalElement);
};

export default Portal;