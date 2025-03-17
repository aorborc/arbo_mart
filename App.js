import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { TokenProvider } from './utils/context/TokenContext';
import { LoaderProvider } from './utils/context/LoaderContext';
import Loader from './components/loader';
import 'react-native-gesture-handler';

export default function App() {
  return( 
    <LoaderProvider>
      <TokenProvider>
        <AppNavigator />
        <Loader />
      </TokenProvider>
    </LoaderProvider>
);
}