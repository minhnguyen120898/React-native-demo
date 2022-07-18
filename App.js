/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { styles } from './src/style';
import Login from './src/auth/login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/store';
import ToDoScreen from './src/screens/TodoScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Image style={styles.tinyIcons} resizeMode={'cover'} source={require('./assets/images/home.png')}></Image>
            )
          }
        }}
        component={HomeScreen} />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Image style={styles.tinyIcons} resizeMode={'cover'} source={require('./assets/images/setting.png')}></Image>
            )
          }
        }}
        component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
      />
      <Stack.Screen 
        name="Todo"
        component={ToDoScreen}
      />
    </Stack.Navigator>
  );
};


const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
