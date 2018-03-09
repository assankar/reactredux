import react from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    <Provider stire{createStore(reducers)}>
      <View />
    </Provider>
  );
};

export default App;
