import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import {createStore} from 'redux';
import reducers from './redux/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} > 
    <App />
    </Provider>
    
  </React.StrictMode>
); 