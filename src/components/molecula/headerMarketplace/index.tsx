import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchInpunt from '../../atomo/searchInput'
import ButtonCart from '../../atomo/buttonCart'

export default function HeaderMarketplace() {
    return (
        <View style={styles.containerSearch}>
            <SearchInpunt/>
            <ButtonCart/>
        </View>
    )
}

const styles  = StyleSheet.create({
  containerSearch: {
    flexDirection: 'row',
    gap: 10,
    width: 360,
  },
})