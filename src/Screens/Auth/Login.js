import React, {
  Component,
  useState,
  useEffect
} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground
} from 'react-native';
import {
  Card,
  Title,
  IconButton,
  TextInput,
  FAB,
  Button,
  Provider as PaperProvider
} from 'react-native-paper';
import {AuthContext} from './../../Navigation/Context'
import styles from './styles'
import { Formik } from 'formik';
import * as yup from 'yup';
//import logo from './../../../assets/imgs/logo-figma.png'
//import fundo from './../../../assets/imgs/fundo.png'

export default function Login({ navigation }) {

  const [data, setData] = React.useState({
    secureTextEntry: true,
    passwordSecureIcon: 'eye-off',
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
      passwordSecureIcon: 'eye',
    });
  };

  const {signIn} = React.useContext(AuthContext);

  const loginHandle = (username, password) => {
    // console.log(username, password)
    signIn(username, password);
    console.log('está passando aqui');
  };


  const reviewSchema = yup.object({
    username: yup
      .string()
      .required('Campo obrigatório*')
      .max(255, 'Quantidade de caracteres excessiva'),

    password: yup
      .string()
      .required('Campo obrigatório*')
      .max(255, 'Quantidade de caracteres excessiva'),
  });


  return (
    <PaperProvider theme={styles.theme}>
      <View style={styles.background}>
        <ImageBackground  style={{width:'100%', height:'100%', alignItems:'center'}} >
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={reviewSchema}
          onSubmit={(values) => {
            setData({
              ...data,
              username: values.username,
              password: values.password,
            });
          }}>
          {(props) => (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.componentsViewLogin}>
              <View style={{ flex: 1, alignItems: 'center', }}>
               
               </View>
                <View style={{ flex: 1, justifyContent: 'flex-start'}}>
                  <TextInput
                    underlineColor='#c85b53'
                    name="Login"
                    mode="flat"
                    style={{
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,

                    }}
                    label="Login"
                    value={props.values.username}
                    onChangeText={props.handleChange('username')}
                    onBlur={props.handleBlur('username')}
                    left={<TextInput.Icon name="account" color="#c85b53" />}
                    keyboardType="email-address"></TextInput>
                  <Text style={styles.textError}>
                    {props.touched.username && props.errors.username}
                  </Text>
                  <TextInput
                   underlineColor='#c85b53'
                    name="password"
                    mode="flat"
                    style={{
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,

                    }}
                    label="Senha"
                    value={props.values.password}
                    onChangeText={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}
                    secureTextEntry={data.secureTextEntry ? true : false}
                    left={<TextInput.Icon name="key" color="#c85b53" />}
                    right={
                      <TextInput.Icon
                        name={data.passwordSecureIcon}
                        color="#c85b53"
                        onPress={updateSecureTextEntry}
                      />
                    }></TextInput>
                  <Text style={styles.textError}>
                    {props.touched.password && props.errors.password}
                  </Text>
                  <FAB
                    style={styles.buttonLogin}
                    onPress={() =>{
                      loginHandle(
                      props.values.username,
                      props.values.password,
                    )}
                    }
                    label="Entrar"
                  />
                </View>
                
              </View>
            </TouchableWithoutFeedback>
          )}
        </Formik>
        <View style={styles.footerContainer}>
          <Button mode='text' style={{flex:1}}  onPress={() => navigation.navigate('NewAccount')}>Não possui uma conta? Cadastre-se já!</Button>
          <Button mode='text' style={{flex:1, marginBottom:50}} onPress={() => console.log("nova conta")}>Esqueci minha senha</Button>
        </View>
        </ImageBackground>
      </View>
    </PaperProvider>
  );
}

