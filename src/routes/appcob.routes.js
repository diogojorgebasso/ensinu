import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, FontAwesome5, I } from '@expo/vector-icons';

import ConnectButton from '../components/ConnectButton';

import HomeScreen from '../screens/HomeClass';
import TestScreen from '../screens/Projects';
import ConnectivityScreen from '../screens/Connectivity';
import TasksScreen from '../screens/TasksClass';
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

export default function AppCobRoutes() {
  return (
    <Tab.Navigator
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
          backgroundColor: '#fff',
          borderTopColor: '#6606CB',
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
        component={TestScreen}
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