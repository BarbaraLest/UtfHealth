import React, { useState, useRef, useCallback, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    Alert,
    LogBox
} from 'react-native'
import {
    Appbar,
    TextInput,
    FAB,
    Provider as PaperProvider,
    DefaultTheme,
    Divider

} from 'react-native-paper'
import axios from 'axios'
import { Modalize } from 'react-native-modalize'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from './components/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import dates from './../../Models/Doctor/dates'


LogBox.ignoreAllLogs();
// @flow


export default function Appointment({ navigation, previus }) {

    useEffect(() => {
        responseDoctor()
        console.log(dates)

    }, [])

    LocaleConfig.locales['br'] = {
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan.', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        today: 'Hoje'
    };
    LocaleConfig.defaultLocale = 'br';

    const dados1 = [
        { id: 1, name: 'Nuape' },
        { id: 2, name: 'Conferencia online' },
        { id: 3, name: 'Setor clinico UTFPR' },
    ]

    const times = [
        { id: 1, time: '9:00', available: "Disponível" },
        { id: 2, time: '10:00', available: "Disponível" },
        { id: 3, time: '11:00', available: "Indisponível" },
        { id: 4, time: '14:00', available: "Indisponível" },
        { id: 5, time: '15:00', available: "Disponível" },
        { id: 6, time: '16:00', available: "Disponível" },


    ]

    const [observations, setObservations] = useState()

    const [doctorId, setDoctorId] = useState({ id: null })

    const doctorIdCallback = useCallback((itemId) => {
        setDoctorId({ id: itemId })
        console.log(doctorId)
    }, [doctorId])

    const [localId, setLocalId] = useState({ id: null })

    const localIdCallback = useCallback((itemId, name) => {
        setLocalId({ id: itemId, place: name })
        console.log(localId)
    }, [localId])

    const [date, setDate] = useState({ date: null })

    const [time, setTime] = useState({ time: null })

    const dateCallback = useCallback((date) => {
        setDate({ date: date })
        console.log(date)
    }, [date])

    const timeCallback = useCallback((time) => {
        setTime({ time: time })
        console.log(time)
    }, [time])



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

    function availableOrNot(available) {
        if (available == "Disponível") {
            return '#90ee02'
        } else {
            return "#e54304"
        }
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
                            data={doctorList.doctorList}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                                <Person name={item.name} specialty={item.specialty} itemId={item.idDoctor} />}
                        >
                        </FlatList>
                    </View>
                </View>
            </View>
        )
    }


    function Schedules({ time, itemId, available }) {
        return (
            <TouchableOpacity onPress={() => {
                {
                    available == "Disponível" ? (
                        timeCallback(time),
                        onClose2()
                    ) : (
                        Alert.alert(
                            "Atenção!",
                            "Esse horário não está disponível.",
                            [
                                {
                                    text: "Ok",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "Ok"
                                },
                            ]
                        )

                    )
                }

            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', flex: 2 }}>
                        <Text style={styles.textFlatlistRow}>{time}</Text>
                        <Text style={styles.subTextFlatlistRow}>Duração: 1 hora</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', marginRight: 10, height: '60%', backgroundColor: availableOrNot(available) }}>
                        <Text style={styles.textFlatlistRowAvailable}>{available}</Text>
                    </View>
                </View>
                <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
            </TouchableOpacity>
        )
    }

    function ModalizeCalendar() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "#d602ee" }}>
                    <Calendar
                        minDate={'2012-05-10'}
                        onDayPress={(day) => { dateCallback(day.dateString) }}
                        monthFormat={'MMMM '}
                        firstDay={1}
                        hideDayNames={false}
                        showWeekNumbers={true}
                        enableSwipeMonths={true}
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        markingType={'period'}
                        markedDates={dates}
                    >
                    </Calendar>
                </View>
                <View>
                    <Text style={{
                        marginTop: 40,
                        marginLeft: 20,
                        fontSize: 23,
                        fontFamily: 'sans-serif',
                        color: '#3d3935',
                        fontWeight: 'bold'
                    }}>Selecione o horário:</Text>
                    <View>
                        <FlatList
                            style={{ marginTop: 40 }}
                            data={times}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                                <Schedules time={item.time} itemId={item.id} available={item.available} />}
                        >
                        </FlatList>
                    </View>
                </View>
            </View>
        )
    }

    function Local({ local, id }) {
        return (
            <TouchableOpacity onPress={() => {
                localIdCallback(id, local)
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

    const [doctorList, setDoctorList] = useState(null)

    async function responseDoctor() {
        axios.get(`http://10.0.2.2:3000/doctor`,)
            .then(function (response) {
                console.log(response.data.data);
                setDoctorList({ doctorList: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

    async function createAppointment() {
        var id = await AsyncStorage.getItem('@UtfApi:idStudent');
        axios.post(`http://10.0.2.2:3000/appointment`, {
            "Student_idStudent": id,
            "Doctor_idDoctor": doctorId.id,
            "date": date.date,
            "time": time.time,
            "place": localId.place,
            "observations": observations
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
            "Sua consulta foi marcada com sucesso.",
            [
                { text: "Ok", onPress: () => navigation.navigate('Home') }
            ]
        )

    const createUnsuccessAlert = () =>
        Alert.alert(
            "Ops!",
            "Não foi possível marcar a sua consulta. Verifique suas informações e tente novamente.",
            [
                { text: "Ok", onPress: () => navigation.navigate('Home') }
            ]
        )


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
                                    value={observations}
                                    onChangeText={observations => setObservations(observations)}
                                    style={styles.textInput}
                                    underlineColor="#c85b53"
                                    left={<TextInput.Icon name="rename-box" color="#ffbdaf" />}
                                />
                            </View>
                            <View style={styles.buttonsView}>
                                <FAB
                                    style={styles.buttonNewAcc}
                                    label="Cancelar"
                                    // onPress={navigation.goBack}
                                    onPress={() => console.log(doctorId.id)}

                                />
                                <FAB
                                    style={styles.buttonNewAcc}
                                    label="Salvar"
                                    onPress={() => createAppointment()}
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
                            snapPoint={'650'}
                            modalHeight={700}
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