// @flow
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
// import { ConnectedRouter } from 'react-router-redux';
// import Routes from '../routes';

type RootType = {
  store: {}
};

export default function Root({ store }: RootType) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
