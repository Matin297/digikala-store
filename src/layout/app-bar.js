import React from 'react';
import { NavLink } from 'react-router-dom';
// COMPONENTS
import Button from 'components/ui/button';
// ICONS
import { ReactComponent as LogoSvg } from 'assets/svgs/logo.svg';
import { ReactComponent as CartSvg } from 'assets/svgs/cart.svg';
// STYLES
import './app-bar.css';

function AppBar() {
    return (
        <header className="app-bar">
            <nav>
                <NavLink to="/">
                    <LogoSvg />
                </NavLink>
                <NavLink exact className="app-bar__link" activeClassName="app-bar__link--active" to="/">خانه</NavLink>
                <Button startIcon={<CartSvg />}>
                    سبد خرید
                </Button>
            </nav>
        </header>
    );
}

export default AppBar;
