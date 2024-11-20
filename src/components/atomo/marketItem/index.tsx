import React from 'react'
import { Alert, Image,  Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { styles } from './style'

type Props = {
    species: string,
    price: number,
    id: string,
    image: any
}

export default function MarketItem({ id, price, species  , image }: Props) {


    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => router.push(`/product/${id}` as "/product[id]")}>
            <Image
                style={styles.containerItem_itemImage}
                source={image}
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


                </View>
            </View>
        </TouchableOpacity>
    )
}
