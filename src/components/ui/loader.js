import React from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
// STYLES
import './loader.css';

function Loader({ loader }) {
    if (loader.isOpen)
        return createPortal(
            <div className="lds-dual-ring-wrapper">
                <div className="lds-dual-ring"></div>
            </div>,
            document.getElementById('loader')
        );
    return null;
}

const mapStateToProps = state => ({
    loader: state.loader
});

export default connect(mapStateToProps)(Loader);
