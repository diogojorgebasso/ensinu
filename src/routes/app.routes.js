import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import ConnectButton from '../components/ConnectButton';

import HomeScreen from '../screens/Home';
import ProjectsScreen from '../screens/Projects';
import ConnectivityScreen from '../screens/Connectivity';
import TasksScreen from '../screens/Tasks';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: FontAwesome5,
    name: 'home',
  },
  Projects: {
    lib: FontAwesome5,
    name: 'tasks',
  },
  Tasks: {
    lib: MaterialIcons,
    name: 'work',
  },
  Account: {
    lib: FontAwesome5,
    name: 'user-alt',
  },
};

export default function AppRoutes() {
  return (
    <Tab.Navigator
    style={{
      borderRadius: 100
    }} 
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Connectivity') {
            return (
              <ConnectButton
                onPress={() => navigation.navigate('Connectivity')}
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          borderTopLeftRadius:25, 
          borderTopRightRadius:25,
          zIndex: 8 ,
          position: 'absolute'
        },
        activeTintColor: '#6606CB',
        inactiveTintColor: '#cccc',
        keyboardHidesTabBar: true,
      }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{
          title: 'Projetos',
        }}
      />
      <Tab.Screen
        name="Connectivity"
        component={ConnectivityScreen}
        options={{
          title: '',
        }}
      />

      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          title: 'Tarefas',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Conta',
        }}
      />
    </Tab.Navigator>
  );
}