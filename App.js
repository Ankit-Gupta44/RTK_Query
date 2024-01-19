import {View, Text} from 'react-native';
import React from 'react';

import DemoApp from './DemoApp';
import {Provider} from 'react-redux';
import {store} from './store';
const App = () => {
  return (
    <Provider store={store}>
      <DemoApp />
    </Provider>
  );
};

export default App;