import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  ExampleContainer,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard
} from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'
 const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    // <Tab.Navigator
    //   screenOptions={{
    //     drawerStyle: {
    //       backgroundColor: 'white',
    //     },
    //     headerShown: false,
    //     swipeEdgeWidth: 0,
    //     tabBarActiveTintColor: 'black',
    //   }}
    // >
    //   <Tab.Screen
    //     name="Accueil"
    //     component={ExampleContainer}
    //     options={{
    //       tabBarIconStyle: { display: 'none' },
    //       tabBarStyle: { display: 'none' },
    //       tabBarLabelPosition: 'beside-icon',
    //     }}
    //   />
    // </Tab.Navigator>
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
