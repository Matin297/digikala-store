import React from 'react';
// COMPONENTS
import AppBar from './app-bar';
// STYLES
import './layout.css';

function Layout({ title, children }) {
    return (
        <main className="layout">
            <AppBar />
            <div className="layout__toolbar"></div>
            <section>
                <h1> {title} </h1>
                {children}
            </section>
        </main>
    );
}

export default Layout;
