import { hydrate, h } from 'preact';
import App from './app';
import { createStore } from 'redux';
import { rootReducer, composedEnhancers } from './store';
import { Provider } from 'react-redux';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState, composedEnhancers);

const root = document.getElementById('root');

hydrate(
    <Provider store={store}>
        <App/>
    </Provider>,
    root,
    root.lastChild
);