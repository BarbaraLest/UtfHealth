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
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import {
    FAB,
    Appbar,
    TextInput,
    DefaultTheme,
    Provider as PaperProvider
} from 'react-native-paper';
import styles from './styles'
import { Formik } from 'formik';
import * as yup from 'yup';



import axios from 'axios'

// @flow

export default function NewAccount({ navigation, previous }) {

    // @flow

    async function createAccount(name, email, register, password) {
        axios.post(`http://10.0.2.2:3000/student`, {
            "email": email,
            "name": name,
            "register": register,
            "password": password
        })
            .then(function (response) {
                console.log(response.data);
                createSuccessAlert()
            })
            .catch(function (error) {
                createUnsuccessAlert()
                console.log(error);
            })
            .then(function () {
            });

    }

    const createSuccessAlert = () =>
        Alert.alert(
            "Parabéns!",
            "Sua conta foi criada com sucesso.",
            [
                { text: "Ok", onPress: () => navigation.navigate('Login') }
            ]
        )

    const createUnsuccessAlert = () =>
        Alert.alert(
            "Ops!",
            "Não foi possível criar a sua conta. Verifique suas informações e tente novamente.",
            [
                { text: "Ok" }
            ]
        )

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
                <ImageBackground style={{ width: '100%', height: '100%' }} >
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
                                    <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                                        <Text style={{ fontSize: 30, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginBottom: 100 }}>Criar uma nova conta</Text>
                                        <TextInput
                                            label='Nome'
                                            mode='flat'
                                            placeholderTextColor='#c85b53'
                                            style={styles.textInput}
                                            underlineColor="#c85b53"
                                            value={props.values.name}
                                            onChangeText={props.handleChange('name')}
                                            onBlur={props.handleBlur('name')}
                                            left={<TextInput.Icon name="rename-box" color="#ffbdaf" />}
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
                                            value={props.values.email}
                                            onChangeText={props.handleChange('email')}
                                            onBlur={props.handleBlur('email')}
                                            left={<TextInput.Icon name="rename-box" color="#ffbdaf" />}
                                        />
                                        <Text style={styles.textError}>
                                            {props.touched.email && props.errors.email}
                                        </Text>

                                        <TextInput
                                            label='Registro'
                                            mode='flat'
                                            placeholderTextColor='#c85b53'
                                            style={styles.textInput}
                                            underlineColor="#c85b53"
                                            value={props.values.register}
                                            onChangeText={props.handleChange('register')}
                                            onBlur={props.handleBlur('register')}
                                            left={<TextInput.Icon name="rename-box" color="#ffbdaf" />}
                                        />
                                        <Text style={styles.textError}>
                                            {props.touched.register && props.errors.register}
                                        </Text>

                                        <TextInput
                                            label='Senha'
                                            mode='flat'
                                            placeholderTextColor='#c85b53'
                                            style={styles.textInput}
                                            underlineColor="#c85b53"
                                            value={props.values.password}
                                            onChangeText={props.handleChange('password')}
                                            onBlur={props.handleBlur('password')}
                                            secureTextEntry={data.secureTextEntry ? true : false}
                                            left={<TextInput.Icon name="key" color="#ffbdaf" />}
                                            right={
                                                <TextInput.Icon
                                                    name={data.passwordSecureIcon}
                                                    color="#ffbdaf"
                                                    onPress={updateSecureTextEntry}
                                                />
                                            }

                                        />
                                        <Text style={styles.textError}>
                                            {props.touched.password && props.errors.password}
                                        </Text>
                                        <Text style={{ marginBottom: 25 }}></Text>
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
                                            onPress={() => createAccount(
                                                props.values.name,
                                                props.values.email,
                                                props.values.register,
                                                props.values.password
                                            )}
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