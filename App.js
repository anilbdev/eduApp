import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes'
import { Home, } from './src/index';
const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes /> */}
      <Home />
    </SafeAreaProvider>
  )
}
export default App
