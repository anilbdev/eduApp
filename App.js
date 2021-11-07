import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes'
import { MyTabs,MyDrawer } from './src/index';
import TestClass from './src/test/TestClass';
const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes /> */}
      {/* <MyTabs/> */}
      <MyDrawer/>
    </SafeAreaProvider>
  )
}
export default App
