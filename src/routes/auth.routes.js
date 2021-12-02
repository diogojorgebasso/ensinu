import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';

const AuthStack = createStackNavigator();

function AuthRoutes() {
    return(
        <AuthStack.Navigator>
             <AuthStack.Screen 
            name="Splash" 
            component={Splash}
            options={{headerShown: false}}
            />
            <AuthStack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{headerShown: false}}
            />
            <AuthStack.Screen 
            name="Cadastro" 
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#fff',
                    borderBottomWidth: 3,
                    borderBottomColor: '#5C2A71'
                },
                headerTintColor: '#5C2A71',
                headerBackTitle: true
            }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;

