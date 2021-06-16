import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { closeSnackbar } from 'store/snackbar/actions';
// ICONS
import { ReactComponent as ErrorIcon } from 'assets/svgs/exclamation-mark.svg';
// STYLES
import './snackbar.css';

const STATUS_ICON_MAP = {
    'error': <ErrorIcon />
};

function Snackbar({ snackbar, closeSnackbar }) {

    useEffect(() => {
        if (snackbar.isOpen && snackbar.payload.status !== 'pending') {
            const timerId = setTimeout(() => closeSnackbar(), 3000);
            return () => clearTimeout(timerId);
        }
    }, [snackbar.isOpen, snackbar.payload.status, closeSnackbar])

    if (snackbar.isOpen)
        return createPortal(
            <div
                className={clsx("snackbar", `snackbar--${snackbar.payload.status}`)}
                onClick={closeSnackbar}
            >
                {STATUS_ICON_MAP[snackbar.payload.status] || null}
                <p>{snackbar.payload.message}</p>
            </div>,
            document.getElementById('snackbar')
        );

    return null;
}

const mapStateToProps = state => ({
    snackbar: state.snackbar
});

const mapDispatchToProps = { closeSnackbar };

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
