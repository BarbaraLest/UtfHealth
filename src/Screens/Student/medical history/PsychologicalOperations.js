import React, { useState, useCallback } from 'react'
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
    Divider,
    Provider as PaperProvider,
    DefaultTheme,
    RadioButton
} from 'react-native-paper'
import styles from './../components/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PsychologicalOperations({ navigation, previus }) {

    const [psycho, setPsycho] = useState([])

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
        setPsycho([
            ...psycho,
            { id: id, name: psycholType }
        ])
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
                                status={checkedPsycho1? 'checked' : 'unchecked'}
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
                                onPress={() => console.log(psycho)}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </PaperProvider>
    )
}