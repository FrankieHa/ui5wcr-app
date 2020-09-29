import {
  ThemeProvider
} from '@ui5/webcomponents-react'
import React from 'react'
import AppRoute from 'router'
import './App.css';
import '@ui5/webcomponents-icons/dist/Assets'
import AppBar from './components/AppBar'

function App() {
  return (
    <ThemeProvider>
      <AppBar/>
      <AppRoute/>
    </ThemeProvider>
  )
}

export default App
