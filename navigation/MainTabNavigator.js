import React from 'react';
import { Platform,  } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


{/*
const styles = StyleSheet.create({
  tabBarOptions: {
    showLabel: false, // hide labels
    activeTintColor: '#F8F8F8', // active icon color
    inactiveTintColor: '#586589',  // inactive icon color
    style: {
        backgroundColor: '#171F33' // TabBar background
    }
}
});
*/}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Assistance',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused}name={Platform.OS === 'ios' ? `ios-warning`: 'md-warning'}
    />
  ),
  tabBarOptions: {

    activeTintColor: '#F8F8F8', // active icon color
    inactiveTintColor: '#F8F8F8',  // inactive icon color
    style: {
        backgroundColor: '#2c2c2e' // TabBar background
    }
}
};

HomeStack.path = '';
{/*
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Emergency',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
  tabBarOptions: {

    activeTintColor: '#F8F8F8', // active icon color
    inactiveTintColor: '#F8F8F8',  // inactive icon color
    style: {
        backgroundColor: '#2c2c2e' // TabBar background
    }
}
};
LinksStack.path = '';
*/}
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Certification',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-folder' : 'md-folder'} />
  ),
  tabBarOptions: {
 
    activeTintColor: '#F8F8F8', // active icon color
    inactiveTintColor: '#F8F8F8',  // inactive icon color
    style: {
        backgroundColor: '#2c2c2e' // TabBar background
    }
}
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
