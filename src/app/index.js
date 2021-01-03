import { h } from 'preact';
import Routes from './routes';

const App = (url) => (
    <div id="app">
        <Routes url={url}/>
    </div>
);


export default App;