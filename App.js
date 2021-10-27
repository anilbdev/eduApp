import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/navigation/Routes'
import Test from './src/test/Test';
import TestClass from './src/test/TestClass';

const App = () => {
  return (
    <SafeAreaProvider>
      <Routes/>
      {/* <Test/> */}
      {/* <TestClass/> */}
    </SafeAreaProvider>
  )
}

export default App
