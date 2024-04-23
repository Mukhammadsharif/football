import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import Stadiums from './screens/Stadiums';
import Clubs from './screens/Clubs';
import HomeIcon from '../src/assets/icons/home-icon.png';
import StadiumIcon from '../src/assets/icons/stadiums-icon.png';
import ClubIcon from '../src/assets/icons/club-icon.png';
import StadiumDetail from './screens/StadiumDetail';
import ClubDetail from './screens/ClubDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={SplashScreen}
          name="SplashSceen"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={TabScreen}
          name="TabScreen"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={StadiumDetail}
          name="StadiumDetail"
        />

        <Stack.Screen
          options={{headerShown: false}}
          component={ClubDetail}
          name="ClubDetail"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          margin: 20,
          borderRadius: 18,
          flexDirection: 'row',
          height: 90,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: -10,
          fontFamily: 'Poppins-Regular',
        },
        tabBarActiveTintColor: '#FF5050',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: () => <Image source={HomeIcon} style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name="Stadiums"
        component={Stadiums}
        options={{
          tabBarLabel: 'Стадионы',
          tabBarIcon: () => <Image source={StadiumIcon} style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name="Clubs"
        component={Clubs}
        options={{
          tabBarLabel: 'Клубы',
          tabBarIcon: () => <Image source={ClubIcon} style={styles.icon} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});
