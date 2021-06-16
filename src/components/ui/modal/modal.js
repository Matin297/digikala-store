import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { closeModal } from 'store/modal/actions';
import { CART } from 'config/modal-body-types';
// COMPONENTS
import Button from 'components/ui/button';
import CartModal from './cart-modal';
// ICONS
import { ReactComponent as CloseIcon } from 'assets/svgs/close.svg';
// STYLES
import './modal.css';

const CONTENT_MAP = {
    [CART]: {
        Component: <CartModal />,
        title: 'سبد خرید'
    }
}

function Modal({ modal, closeModal }) {

    if (modal.isOpen)
        return createPortal(
            <div className="modal" onClick={closeModal}>
                <div className="modal__overlay"></div>
                <div className="modal__body" onClick={e => e.stopPropagation()}>
                    <div className="modal__header">
                        <h3> {CONTENT_MAP[modal.data.type]?.title || ''} </h3>
                        <Button onClick={closeModal} variant="text" startIcon={<CloseIcon />} />
                    </div>
                    <div className="modal__content">
                        {CONTENT_MAP[modal.data.type]?.Component || null}
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        );

    return null;
}

const mapStateToProps = state => ({
    modal: state.modal
});

const mapDispatchToProps = { closeModal };

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
