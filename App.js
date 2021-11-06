import React from 'react'
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes'
import { Home,ClassCard,CardDisplay,CarousalDisplay } from './src/index';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <Routes/> */}
      {/* <Home /> */}
      <ClassCard/>
      {/* <CarousalDisplay/> */}
    </SafeAreaProvider>
  )
}
//1st comment
export default App
