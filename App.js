import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Routes from './src/navigation/Routes'
import { ItemButton } from './src/index';



const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes/> */}
      <ItemButton/>
    </SafeAreaProvider>
  )
}
//1st comment
export default App
