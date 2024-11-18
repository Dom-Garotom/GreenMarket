import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps

export default function ButtonClearCart( { ...props} :Props) {
    return (
        <TouchableOpacity 
        {...props}
        style={
            { 
                backgroundColor: "white", 
                width: 40, height: 40, 
                borderRadius: 10, alignItems: 'center', 
                justifyContent: 'center' 
            }
        }
        >
            <MaterialIcons name='remove-shopping-cart' size={20} />
        </TouchableOpacity>
    )
}
