/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { getData } from './actions/actions';
import configureStore from './store/configureStore';
require('./favicon.ico');
require('./img/profile.jpg');
require('es6-promise').polyfill();
import './polyfills';
import './styles/styles.scss';
import MainPage from './containers/MainPage';

const store = configureStore();
store.dispatch(getData());

render(
  <Provider store={store}>
    <MainPage />
  </Provider>, document.getElementById('app')
);
