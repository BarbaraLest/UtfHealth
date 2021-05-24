import React, { useState, useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import {
    FAB,
    Appbar,
    Divider,
    Provider as PaperProvider
} from 'react-native-paper';
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {

    useEffect(() => {
        getProfile()
    }, []);


    const [user, setUser] = useState({
        name: " ",
        register: " ",
        email: " "
    })

    const userCallback = useCallback((register, name, email) => {
        setUser({
            name: name,
            register: register,
            email: email
        })
    }, [user])

    async function getProfile() {
        var register = await AsyncStorage.getItem('@UtfApi:register');
        var name = await AsyncStorage.getItem('@UtfApi:name');
        var email = await AsyncStorage.getItem('@UtfApi:email');
        userCallback(register, name, email)
    }

    return (
        <PaperProvider theme={styles.theme}>
            <View style={styles.background}>
                <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                    <Appbar.BackAction onPress={() => navigation.navigate('Home')} color={'#404040'} />
                    <Appbar.Content title="Meu perfil" color={'#404040'} />
                </Appbar.Header>
                <View style={styles.componentsHMView}>

                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Informações da conta</Text>
                        <Divider />
                    </View>
                    <View style={{ flex: 5, justifyContent: 'space-around' }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'sans-serif',
                                color: '#9b9b9b',


                            }}>
                            {' '}
                    Nome
                  </Text>

                        <Text
                            style={{
                                fontSize: 17,
                                fontFamily: 'sans-serif',
                                //   marginBottom: 5,
                            }}>
                            {' '}
                            {user.name}
                        </Text>

                        <Divider />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'sans-serif',
                                color: '#9b9b9b',

                            }}>
                            {' '}
                    Email
                  </Text>

                        <Text
                            style={{
                                fontSize: 17,
                                fontFamily: 'sans-serif',
                                //  marginBottom: 5,
                            }}>
                            {' '}
                            {user.email}
                        </Text>

                        <Divider />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'sans-serif',
                                color: '#9b9b9b',

                            }}>
                            {' '}
                    Registro
                  </Text>

                        <Text
                            style={{
                                fontSize: 17,
                                fontFamily: 'sans-serif',
                                //  marginBottom: 5,
                            }}>
                            {user.register}
                        </Text>


                    </View>
                    <View style={{ flex: 2 }}>
                    </View>
                </View>
                <FAB
                    style={styles.fab}
                    icon="border-color"
                    onPress={() => navigation.navigate('EditProfile', user)}
                />

            </View>
        </PaperProvider>
    );



}