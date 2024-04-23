import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/Navigation';
import {GlobalProvider} from './src/context/GlobalContext';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF5050',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <GlobalProvider>
      <PaperProvider theme={theme}>
        <StatusBar />
        <Navigation />
      </PaperProvider>
    </GlobalProvider>
  );
}
