import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function SearchInpunt() {
    return (
        <View style={styles.search}>
            <MaterialIcons name='search' size={20} />
            <TextInput placeholder='Procure por alguma planta' />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        maxWidth: 255,
        width: "100%",
        height: 45,
        gap: 10,
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "white",
    },
})