import React from 'react'
import ButtonBack from '@/src/components/atomo/buttonBack'
import CartPAy from '@/src/components/atomo/cartPay'
import CartItem from '@/src/components/molecula/cartItem'
import { Alert, FlatList,  Text, View } from 'react-native'
import { useCart } from '@/src/hooks/useCart'
import { styles } from './style'
import ButtonClearCart from '@/src/components/atomo/buttonClearCart'



export default function ShoppindCartPage() {
  const {Data , handleRemoveItem , value , decreaseItem , increaseItem , clear } = useCart();

  const handlePurchase =  () =>{
    Alert.alert("Compra concluida" , "Parabéns pela sua nova planta! Ela chegará na sua casa logo logo...")
    clear();
  } 

  return (
    <View style={styles.page}>

      <FlatList
        ListHeaderComponent={
          <>

            <View style={styles.containerHeader}>
              <ButtonBack position_top={22}/>
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
            image={item.image}
            decreaseItem={ () => decreaseItem(item.id)}
            increaseItem={ () =>increaseItem(item.id)}
            removeItem={ () =>  handleRemoveItem(item.id)}
          />
        )}
      />

      <CartPAy price={value} purchease={ () => handlePurchase()}/>
    </View>
  )
}