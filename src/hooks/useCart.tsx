import { useCallback, useState } from 'react'
import { CartProduct, clearCart, decreaseQuantity, getCartItems, increaseQuantity, removeItemFromCart } from '../storage/market-storage'
import { useFocusEffect } from 'expo-router'

export const useCart = () => {
    const [Data, setData] = useState<CartProduct[]>([])
    const [value, setValues] = useState(0)

    const loadData = useCallback( async () =>{

        const dados = await getCartItems();
        dados && setData(dados);
        
        const totalPrice = dados.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setValues(totalPrice);

    }, [] );
    
    
    const getValue = () => {
      const amount = Data.reduce( ( acc , item ) => acc +  (item.price * item.quantity) , 0 );
      setValues(amount);
    }
    
    const handleRemoveItem = async (id: string) => {
      await removeItemFromCart(id);
      await loadData();
    }

    const increaseItem = async (id: string) => {
      await increaseQuantity(id);
      await loadData();
    }

    const decreaseItem = async (id: string) => {
      await decreaseQuantity(id);
      await loadData();
    }

    const clear = async () => {
      await clearCart();
      await loadData();
    }

    useFocusEffect(
        useCallback(() => {
          loadData();
        }, [loadData])
    );

    
    return {Data , value , handleRemoveItem , increaseItem , decreaseItem  , clear }
    
}
