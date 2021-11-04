import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/navigation/Routes'
import AppTour from './src/screens/AppTour'


const App = () => {
  return (
    <SafeAreaProvider>
      <Routes/>
     {/* <AppTour/> */}
    </SafeAreaProvider>
  )
}
//1st comment
export default App
