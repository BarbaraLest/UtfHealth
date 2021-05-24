import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import {
    FAB,
    Appbar,
    Divider,
    Provider as PaperProvider
} from 'react-native-paper';
import styles from './../components/styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'



export default function School({ navigation }) {

    useEffect(() => {
        getStudent()
    }, []);


    const [empty, setEmpty] = useState({ data: null })

    const emptyCallback = useCallback((data) => {
        setEmpty(data)
    }, [empty])



    async function getStudent() {
        var id = await AsyncStorage.getItem('@UtfApi:idStudent');
        axios.get(`http://10.0.2.2:3000/schoolHistory/emptyOrNot/${id}`)
            .then(function (response) {
                console.log(response.data);
                emptyCallback(response.data)
                //createSuccessAlert()
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    function History({ observation, schedules, routine, pedagogicalSupport }) {
        return (
            <TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.subTextFlatlistRowBlack}>{schedules}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{routine}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{pedagogicalSupport}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{observation}</Text>
                </View>
                <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
            </TouchableOpacity>
        )
    }


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
                            <FlatList
                                style={{ marginTop: 40 }}
                                data={empty.data}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) =>
                                    <History observation={item.observation} schedules={item.schedules} routine={item.routine} pedagogicalSupport={item.pedagogicalSupport}
                                    />}
                            >
                            </FlatList>


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
                        <Appbar.BackAction onPress={() => navigation.navigate('Home')} color={'#404040'} />
                        <Appbar.Content title="Histórico Médico" color={'#404040'} />
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

    return empty.data ? <ScreenNotEmpty /> : <ScreenEmpty />;


}