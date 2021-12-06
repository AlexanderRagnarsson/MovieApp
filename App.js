import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';

const App = () => (
  <Provider
    store={createStore(reducers, applyMiddleware(thunk))}
  />
);

export default App;
