import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
    direction : "arrow-right" | "arrow-left"
}

export default function BUttonCount( {direction , ...prop} : Props) {
    return (
        <TouchableOpacity {...prop} style={styles.containerItem_buttonQuantidade}>
            <MaterialIcons name={direction} size={20} color={"white"}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerItem_buttonQuantidade: {
      width: 46,
      height: 42,
      borderRadius: 9,
      backgroundColor: "black",
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  