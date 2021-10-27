import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/navigation/Routes'
import Test from './src/test/Test';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes/> */}
      <Test/>
    </SafeAreaProvider>
  )
}

export default App
