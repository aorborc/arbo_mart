// TokenContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import database from '@react-native-firebase/database';

// Create the Context
const TokenContext = createContext();

// TokenProvider Component
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Reference to the token in the Realtime Database
    const reference = database().ref('/Zoho_Token/OJ3hkJ54A6r9qqL4K0m');

    // Listener for real-time updates
    const unsubscribe = reference.on('value', snapshot => {
      if (snapshot.exists()) {
        setToken(snapshot.val().access_token); // Update token state
        // console.log('Token updated:', snapshot.val());
      } else {
        console.log('Token not found.');
        setToken(null);
      }
    });

    // Cleanup listener on component unmount
    return () => reference.off('value', unsubscribe);
  }, []);

  return (
    <TokenContext.Provider value={token}>
      {children}
    </TokenContext.Provider>
  );
};

// Custom Hook to Access Token
export const useToken = () => {
  return useContext(TokenContext);
};
