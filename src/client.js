import { hydrate } from 'React';
import App from './app';
import { rootReducer, composedEnhancers } from './store';

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