import { h } from 'preact';
import Router from 'preact-router';
import Detail from '../pages/Detail';
import Home from '../pages/Home';


const Routes = () => (
    <Router>
        <Home path="/" />
        <Detail path="/movies/:id" />
    </Router>
);

export default Routes;