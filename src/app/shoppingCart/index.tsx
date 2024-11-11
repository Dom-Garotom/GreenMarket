import ButtonBack from '@/src/components/atomo/buttonBack'
import CartPAy from '@/src/components/atomo/cartPay'
import CartItem from '@/src/components/molecula/cartItem'
import { color } from '@/src/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Float } from 'react-native/Libraries/Types/CodegenTypes'

export default function ShoppindCartPage() {
  const [value, setValues] = useState(0)

  


  return (
    <>
      <ScrollView style={styles.page}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <ButtonBack />
            <Text style={styles.title}>Meu carrinho</Text>
          </View>

          <CartItem
            price={15}
            species='Montserrar'
            total={(e) => setValues(e)}
          />


        </View>
      </ScrollView>
      <CartPAy
        price={value}
      />
    </>
  )
}


const styles = StyleSheet.create({
  page: {
    backgroundColor: color.green.bg,
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    gap: 20,
  },

  container: {
    gap: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: color.green[500],
    textAlign: 'center',
    marginTop: 18,
    flex: 1,
  },

  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
