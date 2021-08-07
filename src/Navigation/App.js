import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import axios from 'axios'
import api from './../Models/API/api'

import { AuthContext } from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StackScreen from './StackScreens'
import Login from './../Screens/Auth/Login'
import NewAccount from './../Screens/Auth/NewAccount'


// @flow

const Stack = createStackNavigator();


export default function Rotas() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    loggedInUser: null,
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const createUnsuccessAlert = () =>
  Alert.alert(
      "Ops!",
      "Não foi possível entrar na sua conta. Verifique suas informações e tente novamente.",
      [
          { text: "Ok" }
      ]
  )

  function loginReducer(prevState, action) {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };

    }
  };



  const setId = async (idStudent) => {
    try {
      await AsyncStorage.setItem(
        '@UtfApi:idStudent',
        JSON.stringify(idStudent),
      );
      console.log(idStudent)
    } catch (e) {
      console.log(e);
    }
  };

  const setC = async () => {
    try {
      await AsyncStorage.setItem(
        'alreadyRegisterClinical',
        ' ',
      );
    } catch (e) {
      console.log(e);
    }
  };

  const setP= async () => {
    try {
      await AsyncStorage.setItem(
        'alreadyRegisterPsycho',
        ' ',
      );
    } catch (e) {
      console.log(e);
    }
  };

  const setS = async () => {
    try {
      await AsyncStorage.setItem(
        'alreadyRegisterSchool',
        ' ',
      );
    } catch (e) {
      console.log(e);
    }
  };

  const setD = async () => {
    try {
      await AsyncStorage.setItem(
        'alreadyRegisterDental',
        ' ',
      );
    } catch (e) {
      console.log(e);
    }
  };


  const setRegister = async (register) => {
    try {
      await AsyncStorage.setItem(
        '@UtfApi:register',
        register,
      );
    } catch (e) {
      console.log(e);
    }
  };

  const setName = async (name) => {
    try {
      await AsyncStorage.setItem(
        '@UtfApi:name',
        name,
      );
    } catch (e) {
      console.log(e);
    }
  };

  const setEmail = async (email) => {
    try {
      await AsyncStorage.setItem(
        '@UtfApi:email',
        email,
      );
    } catch (e) {
      console.log(e);
    }
  };

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        axios.post(`${api}student/auth`, {
          "register": userName,
          "password": password
        })
          .then(function (response) {
              console.log(response.data)
              dispatch({ type: 'LOGIN', id: userName, token: response.data.token });
              setId(response.data.idStudent)
              setName(response.data.name)
              setRegister(response.data.register)
              setEmail(response.data.email)
              setC()
              setP()
              setS()
              setD()
          })
          .catch(function (error) {
            console.log(error);
            createUnsuccessAlert()

          })
      },
      signOut: async () => {

        dispatch({ type: 'LOGOUT' });

      },
    }),
    [],
  );


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken == null ? (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={Login}
            />
            <Stack.Screen
              name="NewAccount"
              options={{ headerShown: false }}
              component={NewAccount}
            />
      
          </Stack.Navigator>

        ) : (
          <StackScreen />

        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

