import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'

const Drawer = createDrawerNavigator()

const Navigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
    </Drawer.Navigator>
  )
}

export default Navigator;
