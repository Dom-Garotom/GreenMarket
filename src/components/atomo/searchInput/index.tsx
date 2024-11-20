import { color } from '@/src/styles/colors'
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
        maxWidth: 265,
        width: "100%",
        height: 45,
        gap: 8,
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 12,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: color.gray[100],
    },
})