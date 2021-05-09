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


export default function Clinical({ navigation }) {

   const isEmpty = true
   
    function ScreenNotEmpty(){
        return (
            <View style={styles.background}>
                <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                    <Appbar.BackAction onPress={navigation.goBack} color={'#c85b53'} />
                    <Appbar.Content title="Histórico Médico" color={"#c85b53"} />
                </Appbar.Header>
                <View style={styles.componentsHMView}>
              
                    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Histórico Clínico</Text>
                        <Divider />
                    </View>
                    <View style={{ flex: 5, justifyContent:'space-around' }}>
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
                    <View style={{flex:2 }}>
                    </View>
                </View>
    
            </View>
        );
    }

    function ScreenEmpty(){
        return(
            <View style={styles.background}>
            <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                <Appbar.BackAction onPress={navigation.goBack} color={'#c85b53'} />
                <Appbar.Content title="Histórico Médico" color={"#c85b53"} />
            </Appbar.Header>
            <View style={styles.componentsHMView}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Histórico Clínico</Text>
                    <Divider />
                </View>
                <View style={{ flex: 5, justifyContent:'flex-start' }}>
                   <Text style={{ fontSize: 20, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Ops!</Text>
                   <Text style={{ fontSize: 17, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Parece que você ainda não possuí um histórico clínico. Que tal criar um?</Text>
            </View>

        </View>
        </View>
        )
    }

    return isEmpty == 'true' ?  <ScreenNotEmpty /> :  <ScreenEmpty />;

   
}