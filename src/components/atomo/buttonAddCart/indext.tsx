import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps &{
    variant ?: "large" | "default",
    name ?: keyof typeof MaterialIcons.glyphMap
}


export default function ButtonAddCart( { variant = "default" , name = "add", ...prop} :Props) {
    return (
        <TouchableOpacity style={styles.button } {...prop}>
            <MaterialIcons name={name} size={20} color={color.green[100]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 45,
        backgroundColor:"black",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
})