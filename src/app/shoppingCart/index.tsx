import ButtonBack from '@/src/components/atomo/buttonBack'
import CartPAy from '@/src/components/atomo/cartPay'
import CartItem from '@/src/components/molecula/cartItem'
import { CartProduct, getCartItems } from '@/src/storage/market-storage'
import { color } from '@/src/styles/colors'
import { useFocusEffect } from 'expo-router'
import React, { useCallback, useState } from 'react'
import { FlatList, StyleSheet, Text,  View } from 'react-native'

export default function ShoppindCartPage() {
  const [value, setValues] = useState(0)
  const [Data, setData] = useState<CartProduct[]>([])

  useFocusEffect(
    useCallback(() => {
      getAllCartItems()
    }, [])
  )

  const getAllCartItems = async () => {
    const data = await getCartItems()
    setData(data)
  }


  return (
    <View style={styles.page}>

      <FlatList
        ListHeaderComponent={
            <View style={styles.containerHeader}>
              <ButtonBack />
              <Text style={styles.title}>Meu carrinho</Text>
            </View>
        }
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            id={item.id}
            price={item.price}
            species={item.species}
            total={(e) => setValues(e)}
          />
        )}
      />

      <CartPAy price={value} />
    </View>
  )
}


const styles = StyleSheet.create({
  page: {
    backgroundColor: color.green.bg,
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    gap: 0,
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
    marginBottom: 10,
  },

})
