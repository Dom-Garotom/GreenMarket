import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export default function ButtonAddCart() {
    return (
        <TouchableOpacity style={styles.containerItem_itemContent_button}>
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