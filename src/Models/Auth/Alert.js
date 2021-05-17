import React, {} from 'react'
import {
    Alert,
} from 'react-native'



export default function AlertModal({navigation}){
    
  return(
    Alert.alert(
        "Parabéns!",
        "Sua conta foi criada com sucesso.",
        [
            { text: "Ok", onPress: () => navigation.navigate('Login') }
        ]
    )
  )
   

}