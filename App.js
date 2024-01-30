
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './src/Home';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';


const App = () => {
  const stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
       <stack.Screen name='home' component={Home}></stack.Screen>
       <stack.Screen name='screen1' component={Screen1} options={{headerShadowVisible:false,headerShown:false}}></stack.Screen>
       <stack.Screen name='screen2' component={Screen2} options={{headerShadowVisible:false,headerShown:false}}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

