import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import {
    FAB,
    Appbar,
    Divider,
    Provider as PaperProvider
} from 'react-native-paper';
import styles from './components/styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

// @flow

export default function Consultations({ navigation }) {
    
    useEffect(() => {
        getList()
    }, []);


    const [list, setList] = useState([{
        "name": "Paulo",
        "specialty": "Médico",
        "date": "2021-05-05",
        "time": "00:00:00",
        "place": "nuape",
        "observations": "testes"
    }])

    const listCallback = useCallback((data) => {
        setList(data)
    }, [list])

    async function getList() {
        var id = await AsyncStorage.getItem('@UtfApi:idStudent');

        axios.get(`http://10.0.2.2:3000/appointment/${id}`)
            .then(function (response) {
                console.log(response.data);
                listCallback(response.data)
            })
            .catch(function (error) {
                console.log(error);
                
            })

    }
    
    function Consultation({ name, specialty, date, time, place }) {
        return (
            <TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.textFlatlistRow}>Especialidade: {specialty}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>Doutor (a): {name}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>Data: {date}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>Horário: {time}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>Local: {place}</Text>
                </View>
                <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
            </TouchableOpacity>
        )
    }
    
    
    return (
        <PaperProvider theme={styles.theme}>
            <View style={styles.background}>
                <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                    <Appbar.BackAction onPress={() => navigation.navigate('Home')} color={'#404040'} />
                    <Appbar.Content title="Minhas consultas" color={'#404040'} />
                </Appbar.Header>
                <View style={styles.componentsHMView}>
                    <Text style={styles.textTitle}>Histórico de consultas</Text>
                    <Divider />
                    <FlatList
                            style={{ marginTop: 40 }}
                            data={list.data}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                                <Consultation name={item.name} specialty={item.specialty} date={item.date} time={item.time} place={item.place} />}
                        >
                        </FlatList>
                </View>
            </View>
        </PaperProvider>
    );



}