import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export default function BUttonCart() {
    return (
        <TouchableOpacity style={styles.buttonCart}>
            <MaterialIcons name="shopping-bag" size={20} color={"white"} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonCart: {
        width: 62,
        height: 45,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 7,
        backgroundColor: color.green[200],
        alignItems: 'center',
        justifyContent: 'center',
    },


})