import React from 'react';
import ThemeProvider from './contexts/ThemeProvider';
import Root from './components/Root';

export default function App() {
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
}