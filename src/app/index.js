import {h} from 'preact';
import React from 'react';
import Routes from './routes';

const App = (url) => (
    <div id="app">
        <Routes url={url}/>
    </div>
);


export default App;