import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {
    FAB,
    Appbar,
    TextInput,
    DefaultTheme,
    Divider,
    Provider as PaperProvider
} from 'react-native-paper';
import styles from './../components/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function School({ navigation }) {

    const isEmpty = true

    function ScreenNotEmpty() {
        return (
            <PaperProvider theme={styles.theme}>
                <View style={styles.background}>
                    <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                        <Appbar.BackAction onPress={() => navigation.navigate('Home')} color={'#404040'} />
                        <Appbar.Content title="Histórico Médico" color={'#404040'} />
                    </Appbar.Header>
                    <View style={styles.componentsHMView}>

                        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Organização Pedagógica</Text>
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
                   "INFO"
                  </Text>

                            <Text
                                style={{
                                    fontSize: 17,
                                    fontFamily: 'sans-serif',
                                    //   marginBottom: 5,
                                }}>
                                {' '}
                    "INFO"
                  </Text>

                            <Divider />
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: 'sans-serif',
                                    color: '#9b9b9b',

                                }}>
                                {' '}
                    "INFO"
                  </Text>

                            <Text
                                style={{
                                    fontSize: 17,
                                    fontFamily: 'sans-serif',
                                    //  marginBottom: 5,
                                }}>
                                {' '}
                    "INFO"
                  </Text>

                            <Divider />
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: 'sans-serif',
                                    color: '#9b9b9b',

                                }}>
                                {' '}
                    "INFO"
                  </Text>

                            <Text
                                style={{
                                    fontSize: 17,
                                    fontFamily: 'sans-serif',
                                    //  marginBottom: 5,
                                }}>
                                "INFO"
                  </Text>

                            <Divider />
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: 'sans-serif',
                                    color: '#9b9b9b',

                                }}>
                                {' '}
                    "INFO"
                  </Text>

                            <Text
                                style={{
                                    fontSize: 17,
                                    fontFamily: 'sans-serif',
                                    //   marginBottom: 5,
                                }}>
                                {' '}
                    "INFO"
                    </Text>

                        </View>
                        <View style={{ flex: 2 }}>
                        </View>
                    </View>

                </View>
            </PaperProvider>
        );

    }

    function ScreenEmpty() {
        return (
            <PaperProvider theme={styles.theme}>
                <View style={styles.background}>
                    <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                        <Appbar.BackAction onPress={() => navigation.navigate('Home')} color={'#c85b53'} />
                        <Appbar.Content title="Histórico Médico" color={"#c85b53"} />
                    </Appbar.Header>
                    <View style={styles.componentsHMView}>
                        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Organização Pedagógica</Text>
                            <Divider />
                        </View>
                        <View style={{ flex: 5, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Ops!</Text>
                            <Text style={{ fontSize: 17, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Parece que você ainda não possuí um histórico de organização pedagógica. Que tal criar um?</Text>
                        </View>

                    </View>
                    <FAB
                        style={styles.buttonFab}
                        small={false}
                        icon="plus"
                        onPress={() => navigation.navigate('SchoolOperations')}
                    />
                </View>
            </PaperProvider>
        )
    }

    return isEmpty == 'true' ? <ScreenNotEmpty /> : <ScreenEmpty />;


}