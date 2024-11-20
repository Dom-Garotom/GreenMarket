import { color } from '@/src/styles/colors'
import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  price: string
  purchease: () => void;
}

export default function CartPAy({ price, purchease }: Props) {
  return (
    <View style={styles.containerControl}>
      <Text style={styles.containerControl_text}>Carrinho</Text>

      <View style={styles.containerControl_textContainer}>
        <Text style={styles.containerControl_text}>Total</Text>
        <Text style={styles.containerControl_text}>${price}</Text>
      </View>

      <TouchableOpacity style={styles.containerControl_button} onPress={() => purchease()}>
        <Text style={{ color: "black", fontWeight: '600' }}>comprar</Text>
      </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({

  containerControl: {
    height: 159,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 32,
    backgroundColor:color.utils.black,
    justifyContent: 'space-between',
  },

  containerControl_button: {
    borderRadius: 10,
    height: 52,
    alignItems: 'center',
    backgroundColor: color.green[100],
    justifyContent: 'center'
  },


  containerControl_text: {
    fontSize: 16,
    color: color.utils.white,
    fontWeight: '600',
  },
  containerControl_textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

})

