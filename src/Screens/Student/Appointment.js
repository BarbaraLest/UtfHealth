import React, { useState, useRef, useCallback } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList
} from 'react-native'
import {
    Appbar,
    TextInput,
    FAB,
    Provider as PaperProvider,
    DefaultTheme,
    Divider

} from 'react-native-paper'
import { Modalize, ScrollView, Animated } from 'react-native-modalize'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars'

import styles from './components/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExpandableCalendarScreen from './components/calendar'


export default function Appointment({ navigation, previus }) {

    const dados1 =[
        {id:1, name:'Nuape'},
        {id:2, name:'Conferencia online'},
        {id:3, name:'Setor clinico UTFPR'},
    ]

    const dados2 =[
        {id:1, name:'Medico 1', specialty:'Dentista'},
        {id:2, name:'Medico 1', specialty:'Pedagoga'},
        {id:3, name:'Medico 1', specialty:'Psicóloga'},
    ]

    const [doctorId, setDoctorId] = useState({ id: null})

    const doctorIdCallback = useCallback((itemId) => {
        setDoctorId({ id: itemId})
        console.log(doctorId)
    }, [doctorId])

    const [localId, setLocalId] = useState({ id: null})

    const localIdCallback = useCallback((itemId) => {
        setLocalId({ id: itemId})
        console.log(localId)
    }, [localId])



    const modalizeSpecialtyRef = useRef(null)

    const onOpen1 = () => {
        modalizeSpecialtyRef.current?.open()
    };

    const onClose1 = () => {
        modalizeSpecialtyRef.current?.close()
    }

    const modalizeCalendarRef = useRef(null)

    const onOpen2 = () => {
        modalizeCalendarRef.current?.open()
    };

    const onClose2 = () => {
        modalizeCalendarRef.current?.close()
    }

    const modalizeLocalRef = useRef(null)

    const onOpen3 = () => {
        modalizeLocalRef.current?.open()
    };

    const onClose3 = () => {
        modalizeLocalRef.current?.close()
    }


    function Person({ name, specialty, itemId }) {
        return (
            <TouchableOpacity onPress={() => {
                 doctorIdCallback(itemId)
                onClose1()
            }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.textFlatlistRow}>{specialty}</Text>
                    <Text style={styles.subTextFlatlistRow}>{name}</Text>

                </View>
                <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
            </TouchableOpacity>
        )
    }

    function ModalizeDoctor() {
        return (
            <View>
                <View>
                    <Text style={{
                        marginTop: 40,
                        marginLeft: 20,
                        fontSize: 23,
                        fontFamily: 'sans-serif',
                        color: '#3d3935',
                        fontWeight: 'bold'
                    }}>Selecione o especialista</Text>
                    <View>
                        <FlatList
                            style={{ marginTop: 40 }}
                            data={dados2}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                                <Person name={item.name} specialty={item.specialty} itemId={item.id} />}
                        >
                        </FlatList>
                    </View>

                </View>
            </View>
        )
    }

    function ModalizeCalendar() {
        return (
            <View>
               <ExpandableCalendarScreen />
            </View>
        )
    }


    function Local({ local, id }) {
        return (
            <TouchableOpacity onPress={() => {
               localIdCallback(id)
                onClose3()
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textFlatlistRow}>{local} </Text>
                </View>
                <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
            </TouchableOpacity>
        )
    }

    function ModalizeLocal() {
        return (
            <View>
                <View>
                    <Text style={{
                        marginTop: 40,
                        marginLeft: 20,
                        fontSize: 23,
                        fontFamily: 'sans-serif',
                        color: '#3d3935',
                        fontWeight: 'bold'
                    }}>Selecione o local de atendimento</Text>
                    <View>
                        <FlatList
                            style={{ marginTop: 40 }}
                            data={dados1}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                                <Local local={item.name} id={item.id} />}
                        >
                        </FlatList>
                    </View>

                </View>
            </View>
        )
    }


    return (
        <PaperProvider theme={styles.theme}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.background}>
                    <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                        <Appbar.BackAction onPress={navigation.goBack} color={'#404040'} />
                        <Appbar.Content title="Nova consulta" color={'#404040'} />
                    </Appbar.Header>
                    <View style={{ flex: 1 }}>
                        <View style={styles.componentsView}>
                            <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                                <TouchableOpacity style={styles.touchableOpacity} onPress={onOpen1}>
                                    <Text style={styles.textTouchableOpacity}>Especialista</Text>
                                    <Icon name="keyboard-arrow-down" size={30} color="#900" style={{ marginRight: 20 }} />

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableOpacity} onPress={onOpen2} >
                                    <Text style={styles.textTouchableOpacity}>Data</Text>
                                    <Icon name="keyboard-arrow-down" size={30} color="#900" style={{ marginRight: 20 }} />

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableOpacity} onPress={onOpen3}>
                                    <Text style={styles.textTouchableOpacity}>Local</Text>
                                    <Icon name="keyboard-arrow-down" size={30} color="#900" style={{ marginRight: 20 }} />


                                </TouchableOpacity>
                                <TextInput
                                    label='Observações'
                                    mode='flat'
                                    placeholderTextColor='#c85b53'
                                    style={styles.textInput}
                                    underlineColor="#c85b53"
                                    left={<TextInput.Icon name="rename-box" color="#ffbdaf" />}
                                />
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
                                    onPress={() => console.log('aq vai p chamada da api')}
                                />
                            </View>
                        </View>
                        <Modalize
                            ref={modalizeSpecialtyRef}
                            snapPoint={'550'}
                            modalHeight={600}
                        >
                            <ModalizeDoctor />
                        </Modalize>

                        <Modalize
                            ref={modalizeCalendarRef}
                            snapPoint={'600'}
                            modalHeight={600}
                        >
                            <ModalizeCalendar />
                        </Modalize>

                        <Modalize
                            ref={modalizeLocalRef}
                            snapPoint={'600'}
                            modalHeight={600}
                        >
                            <ModalizeLocal />
                        </Modalize>


                    </View>
                </View>
            </TouchableWithoutFeedback>
        </PaperProvider>
    )
}