import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { AuthContext } from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StackScreen from './StackScreens'
import Login from './../Commom/Login'
import NewAccount from './../Commom/NewAccount'



const Stack = createStackNavigator();


export default function Rotas() {

  const initialLoginState = {
    isLoading: false,
    userName: null,
    userToken: null,
    loggedInUser: null,
  };

  const teste = false;

  const userTeste = {
    id: 1,
    isDoctor: false,
    userName: "Fulano",
    userToken: '123456789',
    name: 'fulano',
  };


  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
         // isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
         // isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
        //  isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
        //  isLoading: false,
        };
    }

  };

  const setUser = async () => {
    try {
      await AsyncStorage.setItem(
        '@UtfApi:typeUser',
        JSON.stringify(userTeste.isDoctor),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const setId = async () => {
    try {
      await AsyncStorage.setItem('@UtfApi:Id', userTeste.id);
    } catch (e) {
      console.log(e);
    }
  };

  const setUserName = async () => {
    try {
      await AsyncStorage.setItem('@UtfApi:userName', userTeste.name);
    } catch (e) {
      console.log(e);
    }
  };

  const setUserUsername = async () => {
    try {
      await AsyncStorage.setItem('@UtfApi:username', userTeste.username);
    } catch (e) {
      console.log(e);
    }
  };

  const setToken = async () => {
    try {
      await AsyncStorage.setItem('@UtfApi:token', userTeste.token);
    } catch (e) {
      console.log(e);
    }
  };


  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {

        //setUser();
       // setId();
       // setToken();
       // setUserName(u);
       // setUserUsername();
       // const token = 'aa'
        console.log('chegou aqui')

        var Token = 'aaaa'
     dispatch({ type: 'LOGIN', id: userName, token: Token });

      },
      signOut: async () => {

        dispatch({ type: 'LOGOUT' });

      },
      signUp: (token, userName) => {
      //  if (token !== null) {
      //    dispatch({ type: 'LOGIN', id: userName, token: token });
     //   } else {
      //    dispatch({ type: 'LOGOUT' });
      //  }
      },
    }),
    [],
  );

  const createAlert = (error) =>
    Alert.alert(
      'Ops!',
      'Não foi póssível entrar em sua conta. Verifique suas informações e tente novamente.',
      [{ text: 'OK' }],
    );

  {/** 
  async function disconnectUser() {
    
    try {
      await AsyncStorage.removeItem('@UtfApi:token');
      await AsyncStorage.removeItem('@UtfApi:typeUser');
    } catch (e) {
      console.log(e);
    }
  
   dispatch({type: 'LOGOUT'});
  }
*/}

  async function getToken() {
  //  var userName = 'default';
  //  var token = await AsyncStorage.getItem('@UtfApi:token');
    var userName = 'default';
    var token = '123456';
    authContext.signUp(token, userName);
  }

  useEffect(() => {
   getToken();
   
  }, []);

  //if (loginState.isLoading) {
  //  return (
   //   <View style={styles.background}>
    //    <ImageBackground
     //     source={imgBackgound}
     //     style={styles.backgroundImage}></ImageBackground>
          
    //  </View>
  //  );
  //}


  return (
   <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    marginTop: -2,
  },
  background: {
    flex: 1,
  },
});
