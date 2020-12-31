import { hydrate } from 'preact';
import App from './app';

const root = document.getElementById('root');

hydrate(App(), root, root.lastChild);