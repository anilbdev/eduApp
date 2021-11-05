import React from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';



import Routes from './src/navigation/Routes'
import { Home,SelectClass } from './src/index';



const App = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
        {/* <Routes/> */}
        {/* <Home /> */}
        <SelectClass/>
      </ScrollView>
    </SafeAreaProvider>
  )
}
//1st comment
export default App
