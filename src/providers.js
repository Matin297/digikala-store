import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';
// COMPONENTS
import Loader from 'components/ui/loader';

function Providers({ children }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
                <Loader />
            </PersistGate>
        </Provider>
    );
}

export default Providers;
