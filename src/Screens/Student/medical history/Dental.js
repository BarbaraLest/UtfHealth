import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Dental({ navigation }) {

    useEffect(() => {
        getStudent()

    }, []);


    const [empty, setEmpty] = useState({ data: null })

    const emptyCallback = useCallback((data) => {
        setEmpty(data)
    }, [empty])



    async function getStudent() {
        var id = await AsyncStorage.getItem('@UtfApi:idStudent');
        axios.get(`http://10.0.2.2:3000/dentalHistory/emptyOrNot/${id}`)
            .then(function (response) {
                console.log(response.data);
                emptyCallback(response.data)
                //createSuccessAlert()
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    function History({ caries, canal, dentalAppliance, wisdomExtraction, observation }) {
        return (
            <TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.subTextFlatlistRowBlack}>{caries}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{canal}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{dentalAppliance}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{wisdomExtraction}</Text>
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
                            <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Histórico Dental</Text>
                            <Divider />
                            <FlatList
                                style={{ marginTop: 40 }}
                                data={empty.data}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) =>
                                    <History observation={item.observation} caries={item.caries} canal={item.canal} dentalAppliance={item.dentalAppliance} wisdomExtraction={item.wisdomExtraction}
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
                            <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Histórico Dental</Text>
                            <Divider />
                        </View>
                        <View style={{ flex: 5, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Ops!</Text>
                            <Text style={{ fontSize: 17, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Parece que você ainda não possuí um histórico dental. Que tal criar um?</Text>
                        </View>

                    </View>
                    <FAB
                        style={styles.buttonFab}
                        small={false}
                        icon="plus"
                        onPress={() => navigation.navigate('DentalOperations')}
                    />
                </View>
            </PaperProvider>
        )
    }

    return empty.data ? <ScreenNotEmpty /> : <ScreenEmpty />;


}