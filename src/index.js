/* eslint-disable import/default */

require('es6-promise').polyfill();
import './utils/polyfills';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { getData } from './actions/actions';
import configureStore from './store/configureStore';
require('./favicon.ico');
import './styles/styles.scss';
require('./img/profile.jpg');
import MainPage from './containers/MainPage';

const store = configureStore();
store.dispatch(getData());

render(
  <Provider store={store}>
    <MainPage />
  </Provider>, document.getElementById('app')
);
