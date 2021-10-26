import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/navigation/Routes'

const App = () => {
  return (
    <SafeAreaProvider>
      <Routes/>
    </SafeAreaProvider>
  )
}

export default App
