import React from 'react'
import { StyleSheet, View } from 'react-native'
import BUttonCart from '../../atomo/buttonCart'
import SearchInpunt from '../../atomo/searchInput'

export default function HeaderMarketplace() {
    return (
        <View style={styles.containerSearch}>
            <SearchInpunt/>
            <BUttonCart/>
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