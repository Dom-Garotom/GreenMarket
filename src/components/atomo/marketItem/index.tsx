import React from 'react'
import { Alert, Image,  Text, TouchableOpacity, View } from 'react-native'
import ButtonAddCart from '../buttonAddCart/indext'
import { addItemToCart } from '@/src/storage/market-storage'
import { router } from 'expo-router'
import { styles } from './style'

type Props = {
    species: string,
    price: number,
    id: string
}

export default function MarketItem({ id, price, species }: Props) {

    const handleClick = async () => {
        try {
            await addItemToCart(species, price)
        } catch (error) {
            console.log(error);
            return
        }

        Alert.alert("Adicionado", "Esse item foi adicionado em seu carrinho")
    }

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => router.push(`/product/${id}` as "/product[id]")}>
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


                    <ButtonAddCart onPress={handleClick} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
