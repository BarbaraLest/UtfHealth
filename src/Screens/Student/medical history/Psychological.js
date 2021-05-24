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


export default function Psychological({ navigation }) {


    useEffect(() => {
        getStudent()
    }, []);


    const [empty, setEmpty] = useState({ data: null })

    const emptyCallback = useCallback((data) => {
        setEmpty(data)
    }, [empty])

    async function getStudent() {
        var id = await AsyncStorage.getItem('@UtfApi:idStudent');
        axios.get(`http://10.0.2.2:3000/psychologicalHistory/emptyOrNot/${id}`)
            .then(function (response) {
                console.log(response.data.data);

                if (JSON.stringify(response.data.data) === '[]') {
                    console.log('Objeto está vazio');

                  }else{
                    console.log('Objeto não vazio');
                    emptyCallback(response.data)
                  }
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    function History({ tdah, anxiety, antidepressant, observation }) {
        return (
            <TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.subTextFlatlistRowBlack}>{tdah}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{anxiety}</Text>
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
                        <Appbar.BackAction onPress={() => navigation.navigate('Home')} color={'#c85b53'} />
                        <Appbar.Content title="Histórico Médico" color={"#c85b53"} />
                    </Appbar.Header>
                    <View style={styles.componentsHMView}>

                        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Histórico Psicológico</Text>
                            <Divider />
                            <FlatList
                                style={{ marginTop: 40 }}
                                data={empty.data}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) =>
                                    <History tdah={item.tdah} anxiety={item.anxiety} antidepressant={item.antidepressant} observation={item.observation}
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
                            <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Histórico Psicológico</Text>
                            <Divider />
                        </View>
                        <View style={{ flex: 5, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Ops!</Text>
                            <Text style={{ fontSize: 17, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Parece que você ainda não possuí um histórico psicológico. Que tal criar um?</Text>
                        </View>

                    </View>
                    <FAB
                        style={styles.buttonFab}
                        small={false}
                        icon="plus"
                        onPress={() => navigation.navigate('PsychologicalOperations')}
                    />
                </View>
            </PaperProvider>
        )
    }

    return empty.data == null ? <ScreenEmpty /> : <ScreenNotEmpty />;


}