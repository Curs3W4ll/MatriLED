import React from 'react';
import ThemeProvider from './contexts/ThemeProvider';
import LanguageProvider from './contexts/LanguageProvider';
import Root from './components/Root';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Root />
      </LanguageProvider>
    </ThemeProvider>
  );
}
