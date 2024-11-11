import { color } from "@/src/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MarketItem from "../../atomo/marketItem"
import React from "react"

export default function SectionItensMarketplace() {
    return (
        <>
            <Text style={styles.containerItens_titulo}>Popular</Text>
            <ScrollView style={styles.containerItens} horizontal>

                <MarketItem
                    species="Montserrar"
                    price="$38.90"
                />
                <MarketItem
                    species="Montserrar"
                    price="$38.90"
                />
                <MarketItem
                    species="Montserrar"
                    price="$38.90"
                />
                <MarketItem
                    species="Montserrar"
                    price="$38.90"
                />


            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    containerItens: {
    },

    containerItens_titulo: {
        fontSize: 24,
        fontWeight: '600',
        color: color.green[500],
    },
})
