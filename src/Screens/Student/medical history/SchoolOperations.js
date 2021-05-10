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

export default function SchoolOperations({ navigation, previus }) {

    const [school, setSchool] = useState([])

    const [checkedSchool1, setCheckedSchool1] = React.useState(false)

    const school1Callback = useCallback(() => {
        setCheckedSchool1(!checkedSchool1)
    }, [checkedSchool1])

    const [checkedSchool2, setCheckedSchool2] = React.useState(false)

    const school2Callback = useCallback(() => {
        setCheckedSchool2(!checkedSchool2)
    }, [checkedSchool2])

    const [checkedSchool3, setCheckedSchool3] = React.useState(false)

    const school3Callback = useCallback(() => {
        setCheckedSchool3(!checkedSchool3)
    }, [checkedSchool3])


    const schoolIdCallback = useCallback((schoolType, id) => {
        setSchool([
            ...school,
            { id: id, name: schoolType }
        ])
    }, [school])

    return (
        <PaperProvider theme={styles.theme}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.background}>
                    <Appbar.Header style={{ backgroundColor: "#FF8A80" }}>
                        <Appbar.BackAction onPress={navigation.goBack} color={'#404040'} />
                        <Appbar.Content title="Histórico pedagógico" color={'#404040'} />
                    </Appbar.Header>

                    <View style={styles.componentsView}>
                        <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}>Você tem dificuldades para organizar seus horários?</Text>
                                <RadioButton
                                    value="first"
                                status={checkedSchool1? 'checked' : 'unchecked'}
                                onPress={() => { school1Callback(), schoolIdCallback('Tem dificuldades para organizar seus horários', 1) }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}>Você tem dificuldade em seguir rotinas?</Text>
                                <RadioButton
                                    value="first"
                                    status={checkedSchool2 ? 'checked' : 'unchecked'}
                                    onPress={() => { school2Callback(), schoolIdCallback('tem dificuldade em seguir rotinas', 2) }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textDentalOperations}>Você já fez acompanhamento pedagogico antes?</Text>
                                <RadioButton
                                    value="first"
                                    status={checkedSchool3 ? 'checked' : 'unchecked'}
                                    onPress={() => { school3Callback(), schoolIdCallback('Já fez acompanhamento pedagogico', 3) }}
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
                                onPress={() => console.log(school)}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </PaperProvider>
    )
}