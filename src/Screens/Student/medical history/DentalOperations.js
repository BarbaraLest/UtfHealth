import React, { useState, useCallback } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import {
    Appbar,
    TextInput,
    FAB,
    Provider as PaperProvider,
    RadioButton
} from 'react-native-paper'
import styles from './../components/styles'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function DentalOperations({ navigation, previus }) {


    const [dental, setDental] = useState({
        caries: "Nunca tive",
        dentalAppliance: "Nunca usei",
        canal: "Nunca fiz",
        wisdomExtraction: "Não"
    })

    const [observations, setObservations] = useState(" ")

    async function createDentalHistory() {
        var id = await AsyncStorage.getItem('@UtfApi:idStudent');
        axios.post(`http://10.0.2.2:3000/dentalHistory`, {
            "idStudent": id,
            "caries": dental.caries,
            "dentalAppliance": dental.dentalAppliance,
            "canal": dental.canal,
            "wisdomExtraction": dental.wisdomExtraction,
            "observation": observations
        })
            .then(function (response) {
                console.log(response.data);
                createSuccessAlert()
            })
            .catch(function (error) {
                console.log(error);
                createUnsuccessAlert()
            })

    }

    const createSuccessAlert = () =>
        Alert.alert(
            "Parabéns!",
            "Seu histórico odontológico foi criado com sucesso.",
            [
                { text: "Ok", onPress: () => navigation.navigate('Home') }
            ]
        )

    const createUnsuccessAlert = () =>
        Alert.alert(
            "Ops!",
            "Não criar seu histórico. Verifique suas informações e tente novamente.",
            [
                { text: "Ok", onPress: () => navigation.navigate('Home') }
            ]
        )


    const [checkedDental1, setCheckedDental1] = React.useState(false)

    const dental1Callback = useCallback(() => {
        setCheckedDental1(!checkedDental1)
    }, [checkedDental1])

    const [checkedDental2, setCheckedDental2] = React.useState(false)

    const dental2Callback = useCallback(() => {
        setCheckedDental2(!checkedDental2)
    }, [checkedDental2])

    const [checkedDental3, setCheckedDental3] = React.useState(false)

    const dental3Callback = useCallback(() => {
        setCheckedDental3(!checkedDental3)
    }, [checkedDental3])

    const [checkedDental4, setCheckedDental4] = React.useState(false)

    const dental4Callback = useCallback(() => {
        setCheckedDental4(!checkedDental4)
    }, [checkedDental4])


    const dentalIdCallback = useCallback((dentalType, id) => {
        if (id == 1) {
            setDental({
                ...dental,
                caries: dentalType
            })
        }
        if (id == 2) {
            setDental({
                ...dental,
                dentalAppliance: dentalType
            })
        }
        if (id == 3) {
            setDental({
                ...dental,
                canal: dentalType
            })
        }
        if (id == 4) {
            setDental({
                ...dental,
                wisdomExtraction: dentalType
            })
        }
    }, [dental])

    return (
        <PaperProvider theme={styles.theme}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.background}>
                    <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                        <Appbar.BackAction onPress={navigation.goBack} color={'#404040'} />
                        <Appbar.Content title="Histórico dental" color={'#404040'} />
                    </Appbar.Header>

                    <View style={styles.componentsView}>
                        <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}> Você já teve caries? </Text>
                                <RadioButton
                                    value="first"
                                    status={checkedDental1 ? 'checked' : 'unchecked'}
                                    onPress={() => { dental1Callback(), dentalIdCallback('Já teve carie', 1) }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}>Você já usou aparelho odontológico? </Text>
                                <RadioButton
                                    value="first"
                                    status={checkedDental2 ? 'checked' : 'unchecked'}
                                    onPress={() => { dental2Callback(), dentalIdCallback('Uso de aparelho odontológico', 2) }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}> Você já fez canal? </Text>
                                <RadioButton
                                    value="first"
                                    status={checkedDental3 ? 'checked' : 'unchecked'}
                                    onPress={() => { dental3Callback(), dentalIdCallback('Já realizou canal', 3) }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}> Você extraiu os siso? </Text>
                                <RadioButton
                                    value="first"
                                    status={checkedDental4 ? 'checked' : 'unchecked'}
                                    onPress={() => { dental4Callback(), dentalIdCallback('Já extraiu algum ciso', 4) }}
                                />
                            </View>
                            <TextInput
                                label='Observações'
                                mode='flat'
                                placeholderTextColor='#c85b53'
                                style={styles.textInput}
                                underlineColor="#c85b53"
                                value={observations}
                                onChangeText={observations => setObservations(observations)}
                                multiline={true}
                                numberOfLines={4}
                                dense={true}
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
                                onPress={() => createDentalHistory()}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </PaperProvider>
    )
}