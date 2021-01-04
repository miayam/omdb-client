import { h } from 'preact';
import Router from 'preact-router';
import Detail from 'pages/Detail';
import Home from 'pages/Home';

const Routes = () => (
    <Router>
        <Detail path="/movies/:id" />
        <Home path="/" />
    </Router>
);

export default Routes;