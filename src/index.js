import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './app/App';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';
import {Router, browserHistory } from 'react-router';
import configureStore from './configureStore';
import routes from './routes';
import {getAllEducation} from './src/edu/actions';

const store = configureStore();
store.dispatch(getAllEducation());


ReactDOM.render(
  <Provider store={store}>
    <App />
    <Router history={ browserHistory } routes={routes} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
