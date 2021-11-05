import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Routes from './src/navigation/Routes'
import { ItemButton,SquareButton } from './src/index';



const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes/> */}
      {/* <ItemButton/> */}
      <SquareButton/>
    </SafeAreaProvider>
  )
}
//1st comment
export default App
