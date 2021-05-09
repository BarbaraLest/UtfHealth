import React, {
    Component,
    useState,
    useEffect
} from 'react';
import {
    View,
    Text,
    Keyboard,
    ImageBackground,
   TouchableWithoutFeedback
} from 'react-native';
import {
    FAB,
    Appbar,
    TextInput,
    DefaultTheme,
    Provider as PaperProvider
} from 'react-native-paper';
import styles from './components/styles'
import { Formik } from 'formik';
import * as yup from 'yup';
//import fundo2 from './../../../assets/imgs/fundo2.png'

export default function NewAccount({ navigation, previous }) {

    const reviewSchema = yup.object({
        name: yup
            .string()
            .required('Campo obrigatório*')
            .max(255, 'Quantidade de caracteres excessiva'),

        username: yup
            .string()
            .required('Campo obrigatório*')
            .max(255, 'Quantidade de caracteres excessiva'),

        email: yup
            .string()
            .required('Campo obrigatório*')
            .max(255, 'Quantidade de caracteres excessiva'),

        register: yup
            .string()
            .required('Campo obrigatório*')
            .max(10, 'Quantidade de caracteres excessiva'),


        password: yup
            .string()
            .required('Campo obrigatório*')
            .max(255, 'Quantidade de caracteres excessiva'),
    });

    return (
        <PaperProvider theme={theme}>
        <View style={styles.background}>
       
            <Appbar.Header style={{ backgroundColor: "#ffff" }}>
                <Appbar.BackAction onPress={navigation.goBack} color={'#c85b53'} />
                <Appbar.Content title="" />
            </Appbar.Header>
            <ImageBackground  style={{width:'100%', height:'100%'}} >
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        username: '',
                        register: '',
                        password: '',
                    }}
                    validationSchema={reviewSchema}>
                    {(props) => (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.componentsView}>
                            <View style={{flex:3, justifyContent:'flex-end', backgroundColor:'transparent'}}>
                                <Text style={{fontSize: 30, color: '#c85b53', fontFamily:'sans-serif', alignSelf:'center', marginBottom:100 }}>Criar uma nova conta</Text>
                                <TextInput
                                label='Nome'
                                mode='flat'
                                placeholderTextColor='#c85b53'
                                style={styles.textInput}
                                underlineColor="#c85b53"
                                value={props.values.name}
                                onChangeText={props.handleChange('name')}
                                onBlur={props.handleBlur('name')}
                                left={<TextInput.Icon name="rename-box" color="#ffbdaf" />  }
                                />
                                <Text style={styles.textError}>
                                    {props.touched.name && props.errors.name}
                                </Text>

                                <TextInput
                                label='Email'
                                mode='flat'
                                placeholderTextColor='#c85b53'
                                style={styles.textInput}
                                underlineColor="#c85b53"
                                value={props.values.name}
                                onChangeText={props.handleChange('name')}
                                onBlur={props.handleBlur('name')}
                                left={<TextInput.Icon name="rename-box" color="#ffbdaf" />  }
                                />
                                <Text style={styles.textError}>
                                    {props.touched.name && props.errors.name}
                                </Text>

                                <TextInput
                                label='Registro'
                                mode='flat'
                                placeholderTextColor='#c85b53'
                                style={styles.textInput}
                                underlineColor="#c85b53"
                                value={props.values.name}
                                onChangeText={props.handleChange('name')}
                                onBlur={props.handleBlur('name')}
                                left={<TextInput.Icon name="rename-box" color="#ffbdaf" />  }
                                />
                                <Text style={styles.textError}>
                                    {props.touched.name && props.errors.name}
                                </Text>

                                <TextInput
                                label='Senha'
                                mode='flat'
                                placeholderTextColor='#c85b53'
                                style={styles.textInput}
                                underlineColor="#c85b53"
                                value={props.values.name}
                                onChangeText={props.handleChange('name')}
                                onBlur={props.handleBlur('name')}
                                left={<TextInput.Icon name="rename-box" color="#ffbdaf" />  }
                                />
                                <Text style={styles.textError}>
                                    {props.touched.name && props.errors.name}
                                </Text>
                                <Text style={{marginBottom:25}}></Text>
                            </View>
                            <View style={styles.buttonsView}>
                            <FAB
                                style={styles.buttonNewAcc}
                                label="Cancelar"
                                onPress={navigation.goBack}
                            />
                            <FAB
                                style={styles.buttonNewAcc}
                                label="Salvar"
                            />
                            </View>




                           
                        </View>
                        </TouchableWithoutFeedback>
                    )}
                </Formik>
                </ImageBackground>
        </View>
        </PaperProvider>
    )
}

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ff8b80',
      accent: '#c85b53',
      background: '#f5f5f6',
    },
  };