import { color } from '@/src/styles/colors'
import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonAddCart from '../buttonAddCart/indext'
import { addItemToCart, getCartItems } from '@/src/storage/market-storage'

type Props = {
    species: string,
    price: string,
    id: string
}

export default function MarketItem({ id, price, species }: Props) {

    const handleClick = async () => {
        try {
            await addItemToCart(species, price)
        } catch (error) {
            console.log(error);
        } finally{
            Alert.alert("Adicionado" , "Esse item foi adicionado em seu carrinho")
            console.log(
                await getCartItems()
            )
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={handleClick}>
            <Image
                style={styles.containerItem_itemImage}
                source={require("../../../assets/images-marketPlace/plant.png")}
            />
            <View style={styles.containerItem_itemContent}>

                <View>
                    <Text style={styles.containerItem_itemContent_subtitulo}>species</Text>
                    <Text style={styles.containerItem_itemContent_titulo}>{species}</Text>
                </View>

                <View style={styles.containerItem_itemContent_containerInfo}>
                    <View>
                        <Text style={styles.containerItem_itemContent_subtitulo}>Price</Text>
                        <Text style={styles.containerItem_itemContent_titulo}>${price}</Text>
                    </View>


                    <ButtonAddCart onPress={handleClick}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },

    containerItem_itemImage: {
        width: 165,
        height: 157,
        backgroundColor: "black",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    containerItem_itemContent: {
        padding: 13,
        gap: 16,
        backgroundColor: "white",
        width: 165,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    containerItem_itemContent_titulo: {
        fontSize: 14,
        fontWeight: '600',
        color: color.green[500],
    },

    containerItem_itemContent_subtitulo: {
        fontSize: 10,
        fontWeight: '400',
        color: color.gray[400],
    },

    containerItem_itemContent_containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})