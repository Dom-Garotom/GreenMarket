import { color } from '@/src/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BUttonCount from '../../atomo/buttonCount';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { removeItemFromCart } from '@/src/storage/market-storage';

type Props = {
  id : string
  species: string;
  price: Float;
  total: (totalPrice: number) => void;
};

export default function CartItem({ id ,price, species, total }: Props) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() =>{
    total(price * quantity)
  },[quantity])

  const handleRemoveItem = async () => {
    await removeItemFromCart(id)
  }

  return (
    <View style={styles.containerItem}>
      <Image
        style={styles.containerItem_image}
        source={require("../../../assets/images-marketPlace/plant.png")}
      />

      <View style={styles.containerItem_content}>
        <View style={styles.containerItem_Content_texto}>
          <View>
            <Text style={styles.containerItem_Content_titulo}>{species}</Text>
            <Text style={styles.containerItem_Content_subtitulo}>
              ${price}.00
            </Text>
          </View>

          <TouchableOpacity onPress={handleRemoveItem}>
            <MaterialIcons name="close" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerItem_ButtonContainer}>
          <BUttonCount direction="arrow-left" onPress={ () => {
              setQuantity(quantity - 1)
          }}  />

          <View style={styles.containerItem_quantidade}>
            <Text>{quantity}</Text>
          </View>

          <BUttonCount direction="arrow-right" onPress={  () => {
              setQuantity(quantity + 1)
          }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 5,
  },
  containerItem_image: {
    width: 165,
    height: 159,
    borderRadius: 7,
  },
  containerItem_content: {
    width: 165,
    height: 159,
    justifyContent: 'space-between',
  },
  containerItem_Content_texto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerItem_Content_titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: color.green[500],
  },
  containerItem_Content_subtitulo: {
    fontSize: 16,
    fontWeight: '400',
    color: color.gray[400],
  },
  containerItem_ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerItem_quantidade: {
    width: 51,
    height: 42,
    borderRadius: 9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItem_buttonQuantidade: {
    width: 46,
    height: 42,
    borderRadius: 9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
