import { color } from '@/src/styles/colors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Float } from 'react-native/Libraries/Types/CodegenTypes'

type Props ={
    price : Float
}

export default function CartPAy( {price}: Props) {
  return (
    
    <View style={styles.containerControl}>
    <Text style={styles.containerControl_text}>Carrinho</Text>

    <View style={styles.containerControl_textContainer}>
      <Text style={styles.containerControl_text}>Total</Text>
      <Text style={styles.containerControl_text}>${price}.00</Text>
    </View>

    <TouchableOpacity style={styles.containerControl_button}>
      <Text style={{color:"white" , fontWeight:'600'}}>comprar</Text>
    </TouchableOpacity>
  </View>
  )
}




const styles = StyleSheet.create({
  
    containerControl:{  
      height:159,
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 32,
      backgroundColor:"white",
      justifyContent:'space-between',
    },
  
    containerControl_button:{
      borderRadius: 10,
      height: 52,
      alignItems:'center',
      backgroundColor:"black",
      justifyContent: 'center'
    },
  
  
    containerControl_text:{
      fontSize: 16,
      color: color.green[500],
      fontWeight: '600',
    },
    containerControl_textContainer:{
      flexDirection:'row',
      justifyContent: 'space-between',
    },
  
  
    containerHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  })
  
