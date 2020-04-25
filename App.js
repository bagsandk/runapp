import React from 'react';
import { Text, TouchableOpacity, View, StatusBar } from 'react-native';
import Router from './src/router';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <Router />
    </Provider>
  );
}

export default App;
