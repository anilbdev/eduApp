import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes'
import { SubjectScreen,MyTabs,ChapterScreen } from './src/index';
import TestClass from './src/test/TestClass';
const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes /> */}
      <ChapterScreen/>
     {/* <SubjectScreen/> */}
    </SafeAreaProvider>
  )
}
export default App
