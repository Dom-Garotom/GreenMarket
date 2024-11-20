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
        <TouchableOpacity style={variant === 'default' ? styles.button : styles.buttonLarge} {...prop}>
            <MaterialIcons name={name} size={20} color={variant === "default" ? "white" : color.green[500]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        backgroundColor: color.green[200],
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonLarge: {
        width: 50,
        height: 45,
        borderColor:color.green[500],
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
})