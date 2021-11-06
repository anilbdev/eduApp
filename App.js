import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes'
import { Home, } from './src/index';
import TestClass from './src/test/TestClass';
const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes /> */}
      {/* <Home /> */}
      <TestClass/>
    </SafeAreaProvider>
  )
}
export default App
