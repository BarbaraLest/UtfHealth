import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';


import Home from './../Screens/Home/Home'
import DrawerContent from './../Screens/Drawer/DrawerContent'

import Appointment from './../Screens/Student/Appointment'
import Clinical from './../Screens/Student/medical history/Clinical'
import Dental from './../Screens/Student/medical history/Dental'
import Psychological from './../Screens/Student/medical history/Psychological'
import School from './../Screens/Student/medical history/School'
import ClinicalOperations from './../Screens/Student/medical history/ClinicalOperations'
import DentalOperations from './../Screens/Student/medical history/DentalOperations'
import PsychologicalOperations from './../Screens/Student/medical history/PsychologicalOperations'
import SchoolOperations from './../Screens/Student/medical history/SchoolOperations'
import Onboarding from './../Screens/Onboarding/onboarding'
import Profile from './../Screens/Profile/profile'
import EditProfile from './../Screens/Profile/EditProfile'
import Consultations from './../Screens/Student/Consultations'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const Menu = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const MenuTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "#ffbdaf",
          height: 90,
          borderRadius: 15,
          ...style.shadow,

        }
      }}
    >
      <Tab.Screen name="Clinical" component={Clinical} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <Icon name="heart" size={25} color="#c85b53" />
            <Text style={{ color: focused ? "#c85b53" : "#404040", fontSize: 15, fontFamily: 'sans-serif' }}>Saúde</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Dental" component={Dental} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <Icon name="tooth" size={25} color="#c85b53" />
            <Text style={{ color: focused ? "#c85b53" : "#404040", fontSize: 15, fontFamily: 'sans-serif' }}>Dental</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Psychological" component={Psychological} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <Icon name="head" size={25} color="#c85b53" />
            <Text style={{ color: focused ? "#c85b53" : "#404040", fontSize: 15, fontFamily: 'sans-serif' }}>Psicológico</Text>
          </View>
        )
      }} />
      <Tab.Screen name="School" component={School} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <Icon name="school" size={25} color="#c85b53" />
            <Text style={{ color: focused ? "#c85b53" : "#404040", fontSize: 15, fontFamily: 'sans-serif' }}>Escolar</Text>
          </View>
        )
      }} />
    </Tab.Navigator>

  );
}


export default function StackScreen({ navigation }) {

  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {

    AsyncStorage.getItem('alreadyLaunchedd').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunchedd', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }

    });

  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == false) {
    return (
      <Stack.Navigator>

        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={Onboarding}
          initialRouteName={true}
        />

        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Menu}
        />
        <Stack.Screen
          name="Appointment"
          options={{ headerShown: false }}
          component={Appointment}
        />
        <Stack.Screen
          name="Clinical"
          options={{ headerShown: false }}
          component={MenuTab}
        />
        <Stack.Screen
          name="ClinicalOperations"
          options={{ headerShown: false }}
          component={ClinicalOperations}
        />
        <Stack.Screen
          name="DentalOperations"
          options={{ headerShown: false }}
          component={DentalOperations}
        />
        <Stack.Screen
          name="PsychologicalOperations"
          options={{ headerShown: false }}
          component={PsychologicalOperations}
        />
        <Stack.Screen
          name="SchoolOperations"
          options={{ headerShown: false }}
          component={SchoolOperations}
        />
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={Profile}
        />
         <Stack.Screen
          name="EditProfile"
          options={{ headerShown: false }}
          component={EditProfile}
        />
         <Stack.Screen
          name="Consultations"
          options={{ headerShown: false }}
          component={Consultations}
        />
      </Stack.Navigator>

    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Menu}
        />
        <Stack.Screen
          name="Appointment"
          options={{ headerShown: false }}
          component={Appointment}
        />
        <Stack.Screen
          name="Clinical"
          options={{ headerShown: false }}
          component={MenuTab}
        />
        <Stack.Screen
          name="ClinicalOperations"
          options={{ headerShown: false }}
          component={ClinicalOperations}
        />
        <Stack.Screen
          name="DentalOperations"
          options={{ headerShown: false }}
          component={DentalOperations}
        />
        <Stack.Screen
          name="PsychologicalOperations"
          options={{ headerShown: false }}
          component={PsychologicalOperations}
        />
        <Stack.Screen
          name="SchoolOperations"
          options={{ headerShown: false }}
          component={SchoolOperations}
        />
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={Profile}
        />
        <Stack.Screen
          name="Consultations"
          options={{ headerShown: false }}
          component={Consultations}
        />
      </Stack.Navigator>
    );
  }
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },

})