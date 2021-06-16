import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from 'store/modal/actions';
import { CART } from 'config/modal-body-types';
// COMPONENTS
import Button from 'components/ui/button';
// ICONS
import { ReactComponent as LogoSvg } from 'assets/svgs/logo.svg';
import { ReactComponent as CartSvg } from 'assets/svgs/cart.svg';
// STYLES
import './app-bar.css';

function AppBar({ openModal, hasCart }) {
    return (
        <header className="app-bar">
            <nav>
                <NavLink to="/">
                    <LogoSvg />
                </NavLink>
                <NavLink
                    exact
                    className="app-bar__link"
                    activeClassName="app-bar__link--active" to="/"
                >
                    خانه
                </NavLink>
                {
                    hasCart &&
                    <Button onClick={() => openModal({ type: CART })} startIcon={<CartSvg />}>
                        سبد خرید
                    </Button>
                }
            </nav>
        </header>
    );
}

const mapDispatchToProps = { openModal };

export default connect(null, mapDispatchToProps)(AppBar);
