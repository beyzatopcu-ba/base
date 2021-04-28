/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react';
 
 import createStore from './Redux/CreateStore';
 import MainNavigation from './Modules/Navigation/MainNavigation';
 
 
 const { store, persistor } = createStore();
 
 const App = () => {
 
   return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <MainNavigation />
       </PersistGate>
     </Provider>
   );
 
 };
 
 export default App;
 