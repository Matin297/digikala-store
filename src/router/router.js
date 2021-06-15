import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// COMPONENTS
import Layout from 'layout/layout';
import HomePage from 'pages/home/home';
import ProductDetailsPage from 'pages/product-details/product-details';
import CartPage from 'pages/cart/cart';

const ROUTE_COMPONENTS = [
    { Component: HomePage, exact: true, path: '/', title: 'خانه' },
    { Component: CartPage, path: '/cart', title: 'سبد خرید' },
    { Component: ProductDetailsPage, path: '/:productId', title: 'جزئیات محصول' }
];

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {
                    ROUTE_COMPONENTS.map(({ Component, ...route }) => (
                        <Route
                            key={route.path}
                            {...route}
                            render={routeProps => (
                                <Layout title={route.title}>
                                    <Component {...routeProps} />
                                </Layout>
                            )}
                        />
                    ))
                }
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
