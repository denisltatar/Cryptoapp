import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
// Passed this through our index.js file, so that every component can have this variable known as store
import store from './app/store';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        {/* Every component in App now has access to the variable known as "store" */}
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root'));

