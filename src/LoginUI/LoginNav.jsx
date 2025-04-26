import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import WELCOME from './Screens/Welcome/WELCOME'
import LOGIN from './Screens/LogIn/LOGIN'
import SIGNUP from './Screens/SignUp/SIGNUP'
import SIGNIN from './Screens/SignIn/SIGNIN'

const LogInStack = createStackNavigator()

const LoginNav = () => {
  return (
    <LogInStack.Navigator screenOptions={{headerShown: false}}>
        <LogInStack.Screen name='welcome' component={WELCOME}/>
        <LogInStack.Screen name='logIn'   component={LOGIN}/>
        <LogInStack.Screen name='signUp'  component={SIGNUP} options={{animation:'slide_from_right'}}/>
        <LogInStack.Screen name='signIn'  component={SIGNIN}/>
    </LogInStack.Navigator>
  )
}

export default LoginNav