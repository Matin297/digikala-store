import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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

function AppBar({ openModal, hasCart, cart }) {

    const history = useHistory();

    const onViewCartHandler = () => {
        if (hasCart)
            openModal({ type: CART });
        else
            history.push('/cart');
    }

    return (
        <header className="app-bar">
            <nav>
                <NavLink to="/">
                    <LogoSvg />
                </NavLink>
                <NavLink
                    exact
                    className="app-bar__link"
                    activeClassName="app-bar__link--active"
                    to="/"
                >
                    خانه
                </NavLink>
                <div className="app-bar__cart">
                    <Button onClick={onViewCartHandler} startIcon={<CartSvg />}>
                        سبد خرید
                    </Button>
                    {cart > 0 && <span> {cart} </span>}
                </div>
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.total_items
});

const mapDispatchToProps = { openModal };

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
