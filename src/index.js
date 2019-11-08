import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './App';

ReactDOM.render(
    <div>
        <App />
    </div>
       ,     
 document.getElementById('root'));
serviceWorker.unregister();
