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

export default function DentalOperations({ navigation, previus }) {

    const [dental, setDental] = useState([])

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
        setDental([
            ...dental,
            { id: id, name: dentalType }
        ])
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
                                onPress={() => console.log(dental)}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </PaperProvider>
    )
}