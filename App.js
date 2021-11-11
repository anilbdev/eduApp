import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes'
import { SubjectScreen,MyTabs,Videos,ChapterTab } from './src/index';
import TestClass from './src/test/TestClass';
const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes /> */}
      {/* <Videos/> */}
     <ChapterTab/>
    </SafeAreaProvider>
  )
}
export default App
