import React, { useState, useRef } from 'react'
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
    DefaultTheme

} from 'react-native-paper'
import { Modalize, ScrollView, Animated } from 'react-native-modalize'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars'

import styles from './components/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function Appointment({ navigation, previus }) {

    const [teste, setTeste] = useState(
        { name: "Monica", specialty: "Pscicologia" },
        { name: "Amanda", specialty: "Pscicologia" },
        { name: "Daniel", specialty: "Dentista" },
    )

    LocaleConfig.locales['br'] = {
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sext', 'Sab'],
        today: 'Hoje\'hj'
    };
    LocaleConfig.defaultLocale = 'br';


    const modalizeSpecialtyRef = useRef(null)

    const onOpen1 = () => {
        modalizeSpecialtyRef.current?.open()
    };

    const onClose1 = () => {
        modalizeSpecialtyRef.current?.close()
    }

    const modalizeLocalRef = useRef(null)

    const onOpen3 = () => {
        modalizeLocalRef.current?.open()
    };

    const onClose3 = () => {
        modalizeLocalRef.current?.close()
    }


    function Person({ name, specialty }) {
        return (
            <TouchableOpacity onPress={() => {
                // ownerIdCallback(itemId)
                onClose()
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text >{specialty} </Text>
                    <Text >{name} </Text>

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
                            data={teste}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                                <Person name={item.name} specialty={item.specialty} />}
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
                        <Appbar.BackAction onPress={navigation.goBack} color={'#c85b53'} />
                        <Appbar.Content title="" />
                    </Appbar.Header>
                    <View style={{ flex: 1 }}>
                        <View style={styles.componentsView}>
                            <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                                <TouchableOpacity style={styles.touchableOpacity} onPress={onOpen1}>
                                    <Text style={styles.textTouchableOpacity}>Especialista</Text>
                                    <Icon name="keyboard-arrow-down" size={30} color="#900" style={{ marginRight: 20 }} />

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableOpacity} >
                                    <Text style={styles.textTouchableOpacity}>Data</Text>
                                    <Icon name="keyboard-arrow-down" size={30} color="#900" style={{ marginRight: 20 }} />

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableOpacity}>
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

                       
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </PaperProvider>
    )
}