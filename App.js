import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/navigation/Routes'
import Test from './src/test/Test';
import TestClass from './src/test/TestClass';
import ImageSlider from './src/components/ImageSlider';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes/> */}
     <ImageSlider/>
    </SafeAreaProvider>
  )
}
//1st comment
export default App
