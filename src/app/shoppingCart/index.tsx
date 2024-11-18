import ButtonBack from '@/src/components/atomo/buttonBack'
import CartPAy from '@/src/components/atomo/cartPay'
import CartItem from '@/src/components/molecula/cartItem'
import React from 'react'
import { FlatList,  Text, View } from 'react-native'
import { useCart } from '@/src/hooks/useCart'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './style'
import ButtonClearCart from '@/src/components/atomo/buttonClearCart'



export default function ShoppindCartPage() {
  const {Data , handleRemoveItem , value , decreaseItem , increaseItem , clear } = useCart();

  return (
    <View style={styles.page}>

      <FlatList
        ListHeaderComponent={
          <>

            <View style={styles.containerHeader}>
              <ButtonBack/>
              <Text style={styles.title}>Meu carrinho</Text>
              <ButtonClearCart  onPress={ () => clear()}/>
            </View>
          </>
        }
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            price={item.price}
            species={item.species}
            quantity={item.quantity}
            decreaseItem={ () => decreaseItem(item.id)}
            increaseItem={ () =>increaseItem(item.id)}
            removeItem={ () =>  handleRemoveItem(item.id)}
          />
        )}
      />

      <CartPAy price={value} />
    </View>
  )
}