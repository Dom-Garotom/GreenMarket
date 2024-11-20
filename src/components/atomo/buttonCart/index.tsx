import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
    variant ?: "small" | "default"
}

export default function ButtonCart( {  variant = "default" } : Props) {
    return (
        <TouchableOpacity style={variant === 'default' ? styles.buttonCart : styles.buttonCartSmall} onPress={() =>  router.push("/shoppingCart")}>
            <MaterialIcons name="shopping-bag" size={20} color={color.green[100]} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonCart: {
        width: 62,
        height: 45,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonCartSmall: {
        width: 50,
        height: 45,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 100,
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
    },


})