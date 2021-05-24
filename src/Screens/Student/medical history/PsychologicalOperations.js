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

export default function PsychologicalOperations({ navigation, previus }) {

    const [psycho, setPsycho] = useState({
        psycho1: "Não",
        psycho2: "Não",
        psycho3: "Não",
        psycho4: "Não"
    })

    const [observations, setObservations] = useState(" ")

    async function createPsychoHistory() {
        var id = await AsyncStorage.getItem('@UtfApi:idStudent');
        axios.post(`http://10.0.2.2:3000/psychologicalHistory`, {
            "idStudent": id,
            "psychologicalSupport": psycho.psycho1,
            "tdah": psycho.psycho2,
            "anxiety": psycho.psycho3,
            "antidepressant": psycho.psycho4,
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
            "Seu histórico psicológico foi criado com sucesso.",
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

    const [checkedPsycho1, setCheckedPsycho1] = React.useState(false)

    const psycho1Callback = useCallback(() => {
        setCheckedPsycho1(!checkedPsycho1)
    }, [checkedPsycho1])

    const [checkedPsycho2, setCheckedPsycho2] = React.useState(false)

    const psycho2Callback = useCallback(() => {
        setCheckedPsycho2(!checkedPsycho2)
    }, [checkedPsycho2])

    const [checkedPsycho3, setCheckedPsycho3] = React.useState(false)

    const psycho3Callback = useCallback(() => {
        setCheckedPsycho3(!checkedPsycho3)
    }, [checkedPsycho3])

    const [checkedPsycho4, setCheckedPsycho4] = React.useState(false)

    const psycho4Callback = useCallback(() => {
        setCheckedPsycho4(!checkedPsycho4)
    }, [checkedPsycho4])


    const psychoIdCallback = useCallback((psycholType, id) => {
        if (id == 1) {
            setPsycho({
                ...psycho,
                psycho1: psycholType
            })
        }
        if (id == 2) {
            setPsycho({
                ...psycho,
                psycho2: psycholType
            })
        }
        if (id == 3) {
            setPsycho({
                ...psycho,
                psycho3: psycholType
            })
        }
        if (id == 4) {
            setPsycho({
                ...psycho,
                psycho4: psycholType
            })
        }
    }, [psycho])

    return (
        <PaperProvider theme={styles.theme}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.background}>
                    <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                        <Appbar.BackAction onPress={navigation.goBack} color={'#404040'} />
                        <Appbar.Content title="Histórico psicológico" color={'#404040'} />
                    </Appbar.Header>

                    <View style={styles.componentsView}>
                        <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}>Você fez acompanhamento psicológico? </Text>
                                <RadioButton
                                    value="first"
                                    status={checkedPsycho1 ? 'checked' : 'unchecked'}
                                    onPress={() => { psycho1Callback(), psychoIdCallback('Já fez acompanhamento psicológico', 1) }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}>Você já foi diagnosticado com TDAH? </Text>
                                <RadioButton
                                    value="first"
                                    status={checkedPsycho2 ? 'checked' : 'unchecked'}
                                    onPress={() => { psycho2Callback(), psychoIdCallback('Já foi diagnosticado com TDAH', 2) }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}>Você já foi diagnosticado com ansiedade? </Text>
                                <RadioButton
                                    value="first"
                                    status={checkedPsycho3 ? 'checked' : 'unchecked'}
                                    onPress={() => { psycho3Callback(), psychoIdCallback('Já fOi diagnosticado com ansiedade', 3) }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}>Você já tomou remédios antidepressivos? </Text>
                                <RadioButton
                                    value="first"
                                    status={checkedPsycho4 ? 'checked' : 'unchecked'}
                                    onPress={() => { psycho4Callback(), psychoIdCallback('Já tomou remédios antidepressivos', 4) }}
                                />
                            </View>
                            <TextInput
                                label='Observações'
                                mode='flat'
                                placeholderTextColor='#c85b53'
                                style={styles.textInput}
                                value={observations}
                                onChangeText={observations => setObservations(observations)}
                                underlineColor="#c85b53"
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
                                onPress={() => createPsychoHistory()}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </PaperProvider>
    )
}