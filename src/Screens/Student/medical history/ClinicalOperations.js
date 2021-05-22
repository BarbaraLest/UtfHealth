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
    Divider,
    RadioButton
} from 'react-native-paper'
import { Modalize, ScrollView, Animated } from 'react-native-modalize'
import styles from './../components/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ClinicalOperations({ navigation, previus }) {

    const dados = {
        allergy1: 'Frutos do mar',
        allergy2: 'Animais',
        allergy3: 'Amendoim',

        chronicDisease1: 'Pressão alta',
        chronicDisease2: 'Diabetes',
        chronicDisease3: 'Rinite',

        familyDisease1: 'Cancêr',
        familyDisease2: 'Pressão Alta',
        familyDisease3: 'Alzheimer',

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
                console.log(error);
            })
            .then(function () {
            });

    }

    /////////////////////////////////////allergy

    const [allergy, setAllergy] = useState([])

    const modalizeAllergyRef = useRef(null)

    const onOpenAllergy = () => {
        modalizeAllergyRef.current?.open()
    };

    const onCloseAllergy = () => {
        modalizeAllergyRef.current?.close()
    }

    const [checkedAllergy1, setCheckedAllergy1] = React.useState(false)

    const allergy1Callback = useCallback(() => {

        setCheckedAllergy1(!checkedAllergy1)
    }, [checkedAllergy1])

    const [checkedAllergy2, setCheckedAllergy2] = React.useState(false)

    const allergy2Callback = useCallback(() => {
        setCheckedAllergy2(!checkedAllergy2)
    }, [checkedAllergy2])

    const [checkedAllergy3, setCheckedAllergy3] = React.useState(false)

    const allergy3Callback = useCallback(() => {
        setCheckedAllergy3(!checkedAllergy3)
    }, [checkedAllergy3])

    const allergyIdCallback = useCallback((allergyType, id) => {
        setAllergy([
            ...allergy,
            { id: id, name: allergyType }
        ])

    }, [allergy])

    function ModalizeAllergy() {
        return (
            <View style={styles.background}>
                <View >
                    <Text style={{
                        marginTop: 40,
                        marginLeft: 20,
                        fontSize: 23,
                        fontFamily: 'sans-serif',
                        color: '#3d3935',
                        fontWeight: 'bold',
                        marginBottom: 25
                    }}>Quais destas alergias você possui?</Text>
                </View>
                <View >
                    <TouchableOpacity
                        onPress={() => { allergy1Callback(), allergyIdCallback(dados.allergy1, 1) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.allergy1}</Text>
                            <RadioButton
                                value="first"
                                status={checkedAllergy1 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { allergy2Callback(), allergyIdCallback(dados.allergy2, 2) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.allergy2}</Text>
                            <RadioButton
                                value="first"
                                status={checkedAllergy2 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { allergy3Callback(), allergyIdCallback(dados.allergy3, 3) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.allergy3} </Text>
                            <RadioButton
                                value="first"
                                status={checkedAllergy3 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    ///////////////////////////////chronic disease

    const [chronicDisease, setChronicDisease] = useState([])

    const modalizeChronicDiseaseRef = useRef(null)

    const onOpenChronicDisease = () => {
        modalizeChronicDiseaseRef.current?.open()
    };

    const onCloseChronicDisease = () => {
        modalizeChronicDiseaseRef.current?.close()
    }

    const [checkedChronicDisease1, setCheckedChronicDisease1] = React.useState(false)

    const chronicDisease1Callback = useCallback(() => {
        setCheckedChronicDisease1(!checkedChronicDisease1)
    }, [checkedChronicDisease1])

    const [checkedChronicDisease2, setCheckedChronicDisease2] = React.useState(false)

    const chronicDisease2Callback = useCallback(() => {
        setCheckedChronicDisease2(!checkedChronicDisease2)
    }, [checkedChronicDisease2])

    const [checkedChronicDisease3, setCheckedChronicDisease3] = React.useState(false)

    const chronicDisease3Callback = useCallback(() => {
        setCheckedChronicDisease3(!checkedChronicDisease3)
    }, [checkedChronicDisease3])

    const chronicDiseaseIdCallback = useCallback((chronicDiseaseType, id) => {
        setChronicDisease([
            ...chronicDisease,
            { id: id, name: chronicDiseaseType}
        ])

    }, [chronicDisease])

    function ModalizeChronicDisease() {
        return (
            <View style={styles.background}>
                <View >
                    <Text style={{
                        marginTop: 40,
                        marginLeft: 20,
                        fontSize: 23,
                        fontFamily: 'sans-serif',
                        color: '#3d3935',
                        fontWeight: 'bold',
                        marginBottom: 25
                    }}>Quais destas doenças cronicas você possui?</Text>
                </View>
                <View >
                    <TouchableOpacity
                        onPress={() => { chronicDisease1Callback(), chronicDiseaseIdCallback(dados.chronicDisease1, 1) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.chronicDisease1}</Text>
                            <RadioButton
                                value="first"
                                status={checkedChronicDisease1 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { chronicDisease2Callback(), chronicDiseaseIdCallback(dados.chronicDisease2, 2) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.chronicDisease2}</Text>
                            <RadioButton
                                value="first"
                                status={checkedChronicDisease2 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { chronicDisease3Callback(), chronicDiseaseIdCallback(dados.chronicDisease3, 3) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.chronicDisease3} </Text>
                            <RadioButton
                                value="first"
                                status={checkedChronicDisease3 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

////////////////////////////////////////////////////family disease

    const [familyDisease, setFamilyDisease] = useState([])

    const modalizeFamilyDiseaseRef = useRef(null)

    const onOpenFamilyDisease = () => {
        modalizeFamilyDiseaseRef.current?.open()
    };

    const onCloseFamilyDisease = () => {
        modalizeFamilyDiseaseRef.current?.close()
    }

    const [checkedFamilyDisease1, setCheckedFamilyDisease1] = React.useState(false)

    const familyDisease1Callback = useCallback(() => {
        setCheckedFamilyDisease1(!checkedFamilyDisease1)
    }, [checkedFamilyDisease1])

    const [checkedFamilyDisease2, setCheckedFamilyDisease2] = React.useState(false)

    const familyDisease2Callback = useCallback(() => {
        setCheckedFamilyDisease2(!checkedFamilyDisease2)
    }, [checkedFamilyDisease2])

    const [checkedFamilyDisease3, setCheckedFamilyDisease3] = React.useState(false)

    const familyDisease3Callback = useCallback(() => {
        setCheckedFamilyDisease3(!checkedFamilyDisease3)
    }, [checkedFamilyDisease3])

    const familyDiseaseIdCallback = useCallback((familyDiseaseType, id) => {
        setFamilyDisease([
            ...familyDisease,
            { id: id, name: familyDiseaseType}
        ])

    }, [familyDisease])

    function ModalizeFamilyDisease() {
        return (
            <View style={styles.background}>
                <View >
                    <Text style={{
                        marginTop: 40,
                        marginLeft: 20,
                        fontSize: 23,
                        fontFamily: 'sans-serif',
                        color: '#3d3935',
                        fontWeight: 'bold',
                        marginBottom: 25
                    }}>Alguém na sua família possui alguma dessas doenças?</Text>
                </View>
                <View >
                    <TouchableOpacity
                        onPress={() => { familyDisease1Callback(), familyDiseaseIdCallback(dados.familyDisease1, 1) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.familyDisease1}</Text>
                            <RadioButton
                                value="first"
                                status={checkedFamilyDisease1 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { familyDisease2Callback(), familyDiseaseIdCallback(dados.familyDisease2, 2) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.familyDisease2}</Text>
                            <RadioButton
                                value="first"
                                status={checkedFamilyDisease2 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { familyDisease3Callback(), familyDiseaseIdCallback(dados.familyDisease3, 3) }}>
                        <View style={styles.flatlistRow}>
                            <Text style={styles.textFlatlistRow}>{dados.familyDisease3} </Text>
                            <RadioButton
                                value="first"
                                status={checkedFamilyDisease3 ? 'checked' : 'unchecked'}
                            />
                        </View>
                        <Divider style={{ backgroundColor: '#c2c6ca', marginTop: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <PaperProvider theme={styles.theme}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.background}>
                    <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                        <Appbar.BackAction onPress={navigation.goBack} color={'#404040'}/>
                        <Appbar.Content title="Histórico clinico" color={'#404040'}/>
                    </Appbar.Header>
                    <View style={{ flex: 1 }}>
                        <View style={styles.componentsView}>
                            <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                                <TouchableOpacity style={styles.touchableOpacity} onPress={onOpenAllergy}>
                                    <Text style={styles.textTouchableOpacity}>Alergias</Text>
                                    <Icon name="keyboard-arrow-down" size={30} color="#900" style={{ marginRight: 20 }} />

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableOpacity} onPress={onOpenChronicDisease}>
                                    <Text style={styles.textTouchableOpacity}>Doenças cronicas</Text>
                                    <Icon name="keyboard-arrow-down" size={30} color="#900" style={{ marginRight: 20 }} />

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableOpacity} onPress={onOpenFamilyDisease}>
                                    <Text style={styles.textTouchableOpacity}>Histórico familiar</Text>
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
                                    onPress={() => console.log(chronicDisease[0].name)}
                                />
                            </View>
                        </View>
                        <Modalize
                            ref={modalizeAllergyRef}
                            snapPoint={'550'}
                            modalHeight={600}
                        >
                            <ModalizeAllergy />
                        </Modalize>
                        <Modalize
                            ref={modalizeChronicDiseaseRef}
                            snapPoint={'550'}
                            modalHeight={600}
                        >
                            <ModalizeChronicDisease />
                        </Modalize>
                        <Modalize
                            ref={modalizeFamilyDiseaseRef}
                            snapPoint={'550'}
                            modalHeight={600}
                        >
                            <ModalizeFamilyDisease />
                        </Modalize>


                    </View>
                </View>
            </TouchableWithoutFeedback>
        </PaperProvider>
    )
}