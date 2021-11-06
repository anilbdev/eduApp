import React from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes'
import { Home } from './src/index';
import TestClass from './src/test/TestClass'
const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes/> */}
      <Home />
    </SafeAreaProvider>
  )
}
//1st comment
export default App
