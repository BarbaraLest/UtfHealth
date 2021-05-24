import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {
    FAB,
    Appbar,
    TextInput,
    DefaultTheme,
    Divider,
    Provider as PaperProvider,
    List
} from 'react-native-paper';
import styles from './../components/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Clinical({ navigation }) {
  

    useEffect(() => {
        getStudent()

    }, []);


    const [empty, setEmpty] = useState({data:null})

    const emptyCallback = useCallback((data) => {
        setEmpty(data)
    }, [empty])


    async function getStudent() {
        var id = await AsyncStorage.getItem('@UtfApi:idStudent');
        console.log(id)
        axios.get(`http://10.0.2.2:3000/clinicalHistory/emptyOrNot/${id}`)
            .then(function (response) {
                console.log(response.data);

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

    function History({ allergy1, allergy2, allergy3, chronicDisease1, chronicDisease2, chronicDisease3, familyDisease1, familyDisease2, familyDisease3, observation }) {
        return (
            <TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.subTextFlatlistRowBlack}>{allergy1}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{allergy2}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{allergy3}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{chronicDisease1}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{chronicDisease2}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{chronicDisease3}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{familyDisease1}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{familyDisease2}</Text>
                    <Text style={styles.subTextFlatlistRowBlack}>{familyDisease3}</Text>
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
                            <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Histórico Clínico</Text>
                            <Divider />
                            <FlatList
                                style={{ marginTop: 40 }}
                                data={empty.data}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) =>
                                    <History allergy1={item.allergy1} allergy2={item.allergy2} allergy3={item.allergy3}
                                        chronicDisease1={item.chronicDisease1} chronicDisease2={item.chronicDisease2} chronicDisease3={item.chronicDisease3}
                                        familyDisease1={item.familyDisease1} familyDisease2={item.familyDisease2} familyDisease3={item.familyDisease3} observation={item.observation}
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
                        <Appbar.BackAction onPress={() => navigation.navigate('Home')} color={'#c85b53'} />
                        <Appbar.Content title="Histórico Médico" color={"#c85b53"} />
                    </Appbar.Header>
                    <View style={styles.componentsHMView}>
                        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 25, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}> Histórico Clínico</Text>
                            <Divider />
                        </View>
                        <View style={{ flex: 5, justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Ops!</Text>
                            <Text style={{ fontSize: 17, color: '#c85b53', fontFamily: 'sans-serif', alignSelf: 'center', marginTop: 30 }}>Parece que você ainda não possuí um histórico clínico. Que tal criar um?</Text>
                        </View>

                    </View>
                    <FAB
                        style={styles.buttonFab}
                        small={false}
                        icon="plus"
                        onPress={() => navigation.navigate('ClinicalOperations')}
                    />
                </View>
            </PaperProvider>
        )
    }

    return empty.data == null ? <ScreenEmpty /> : <ScreenNotEmpty />;


}