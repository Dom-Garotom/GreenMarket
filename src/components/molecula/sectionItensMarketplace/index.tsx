import { color } from "@/src/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MarketItem from "../../atomo/marketItem"
import React from "react"
type Props = {
    sectionName: string,
}

const items = [
    { id: '1', species: 'Aloe Vera', price: '15.00' },
    { id: '2', species: 'Cactus', price: '12.50' },
    { id: '3', species: 'Bamboo Palm', price: '18.00' },
    { id: '4', species: 'Fiddle Leaf Fig', price: '25.00' },
    { id: '5', species: 'Peace Lily', price: '20.00' },
    { id: '6', species: 'Spider Plant', price: '10.00' },
    { id: '7', species: 'Succulent', price: '5.50' },
];


export default function SectionItensMarketplace( {sectionName} :Props) {
    return (
        <>
            <Text style={styles.containerItens_titulo}>{sectionName}</Text>
            <View style={styles.containerItens}>
                
                <FlatList
                    data={items}
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
