import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps


export default function ButtonAddCart( {...prop} :Props) {
    return (
        <TouchableOpacity style={styles.containerItem_itemContent_button} {...prop}>
            <MaterialIcons name='add' size={20} color={"white"} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerItem_itemContent_button: {
        width: 30,
        height: 30,
        backgroundColor: color.green[200],
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})