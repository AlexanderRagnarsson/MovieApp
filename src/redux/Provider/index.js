import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppContainer from '../../routes';
import RootReducer from '../RootReducer';

const ReduxProvider = () => {
  const store = createStore(RootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default ReduxProvider;
