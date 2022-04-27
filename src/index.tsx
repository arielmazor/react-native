import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TutorNavigator from "./navigators/tutor.navigator";
import MainScreen from './screens/main-screen'

const MainStack = createStackNavigator()

const Navigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Tutor">
      <MainStack.Screen name="Tutor" component={TutorNavigator} />
      {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
    </MainStack.Navigator>
  )
}

export default Navigator;
