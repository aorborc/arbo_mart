import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { TokenProvider } from './utils/context/TokenContext';
export default function App() {
  return( 
    <TokenProvider>
     <AppNavigator />
    </TokenProvider>
);
}