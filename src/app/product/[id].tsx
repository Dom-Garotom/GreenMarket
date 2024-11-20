import ButtonAddCart from '@/src/components/atomo/buttonAddCart/indext'
import ButtonBack from '@/src/components/atomo/buttonBack'
import ButtonCart from '@/src/components/atomo/buttonCart'
import { useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { marketData } from '@/src/utils/marketItens'
import { addItemToCart } from '@/src/storage/market-storage'
import { color } from '@/src/styles/colors'

export default function ProductPage() {
  const [isError, setError] = useState(false);
  const { id } = useLocalSearchParams();

  const itemData = marketData.find(item => item.id === id)

  if (!itemData) {
    return (
      <>
        <Text>Item indisponível no momento</Text>
      </>
    )
  }


  const handleAddCart = async () => {
    try {
    
      await addItemToCart(itemData?.name, itemData?.price, 1);
    
    } catch(erro){
      Alert.alert("Indisponível" ,  "No momento esse produto não esta disponível para comprar, por favor tente novamene mais tarde!");
      console.error(erro);
      return
    }

    Alert.alert("Adicionado" , "Produto adicionado no seu carrinho de compras com sucesso!");
  }


  return (
    <View style={styles.page}>

      <ButtonBack position_left={20} position_top={25} />
      <View style={styles.header}>
        <Text style={styles.header_title}></Text>
        <Text style={styles.header_title}>Detalhes</Text>
        <ButtonCart variant='small' />
      </View>

      <Image
        source={
          isError ?
            require("@/src/assets/images-marketPlace/plant-default.png") :
            { uri: itemData?.url }
        }
        style={styles.image_content}
        onError={() => setError(true)}
      />


      <View style={styles.info_container}>

        <View>
          <Text style={styles.nameProduct}>{itemData?.name}</Text>
          <Text style={styles.speciesProduct}>{itemData?.species}</Text>
        </View>

        <Text style={styles.priceProduct}>${itemData?.price}</Text>

      </View>

      <Text style={styles.description}>{itemData?.description}</Text>


      <View style={styles.actions_container}>
        <ButtonAddCart variant='large' name='shopping-cart' onPress={handleAddCart} />
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Compra concluida", "Parabéns pela sua nova planta! Ela chegará na sua casa logo logo...")}>
          <Text style={{ color:  color.green[100] , fontWeight: '600' }}>comprar</Text>
        </TouchableOpacity >
      </View>

    </View>
  )
}
