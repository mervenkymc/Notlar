/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainNavigation from './src/Navigation/MainNavigation';
import { Provider } from 'react-redux';
import configureStore from './src/Redux/ReduxManager';

const { store } = configureStore();


const App = () => {
  return(
    console.log("main navigation"),
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

export default App;
