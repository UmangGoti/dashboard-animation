import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Slider from './Slider';



const App = () => {

  return (
    <SafeAreaProvider>
      <Slider />
    </SafeAreaProvider>
  )
}

export default App;


