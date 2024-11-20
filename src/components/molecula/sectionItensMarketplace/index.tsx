import { color } from "@/src/styles/colors"
import { FlatList, StyleSheet, Text, View } from "react-native"
import MarketItem from "../../atomo/marketItem"
import React from "react"
import { marketData } from "@/src/utils/marketItens"

type Props = {
    sectionName: string,
}

export default function SectionItensMarketplace( {sectionName} :Props) {
    return (
        <>
            <Text style={styles.containerItens_titulo}>{sectionName}</Text>
            <View style={styles.containerItens}>
                
                <FlatList
                    data={marketData}
                    keyExtractor={ (item ) => item.id}
                    renderItem={ ( {item} ) =>  
                        <MarketItem
                            id={item.id}
                            species={item.species}
                            price={item.price}
                        />
                    }
                    horizontal={true}
                />
            </View>
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
