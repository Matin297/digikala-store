import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// COMPONENTS
import HomePage from 'pages/home';
import ProductDetailsPage from 'pages/product-details';
import CartPage from 'pages/cart';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/:productId" component={ProductDetailsPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
