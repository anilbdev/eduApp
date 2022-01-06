import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes'
import { VideoDetail,Home} from './src/index';
import TestClass from './src/test/TestClass';
const App = () => {
  return (
    <SafeAreaProvider>
      <Routes />
      {/* <Videos/> */}
      {/* <VideoDetail/> */}
    {/* <Home/> */}
    </SafeAreaProvider>
  )
}
export default App
