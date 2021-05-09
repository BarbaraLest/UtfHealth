import React from 'react'
import { TextInput } from 'react-native-paper'


export default function Textinput({style, placeholderTextColor, underlineColor, value, onChangeText, onBlur, left }){
        return(
            <TextInput
            mode="flat"
            placeholderTextColor={placeholderTextColor}
            style={style}
            underlineColor={underlineColor}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            left={left}
            />
        )
    } 
    






















