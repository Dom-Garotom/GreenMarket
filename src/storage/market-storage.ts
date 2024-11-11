import AsyncStorage from "@react-native-async-storage/async-storage";
import UUID from "react-native-uuid";

export const key_cart_storage = "cart";

export type CartProduct = {
    id: string;
    species: string;
    price: number;
    quantity: number;
};
    
async function saveToStorage(key: string, value: any): Promise<void> {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        throw new Error("Erro ao salvar os dados no AsyncStorage: " + error);
    }
}


export async function getCartItems(): Promise<CartProduct[]> {
    try {
        const data = await AsyncStorage.getItem(key_cart_storage);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        throw new Error("Erro ao obter os dados do AsyncStorage: " + error);
    }
}


export async function addItemToCart(plant: string, price: string | number, quantity: number = 1): Promise<void> {
    try {
        const cartItems = await getCartItems();

        const priceNumber = typeof price === "string" ? parseFloat(price) : price;

        const existingItem = cartItems.find(item => item.species === plant);

        if (existingItem) {
            existingItem.quantity += quantity; 
        } else {
            const newItem: CartProduct = {
                id: UUID.v4() as string,
                species: plant,
                price: priceNumber,
                quantity: quantity,
            };
            cartItems.push(newItem);
        }

        await saveToStorage(key_cart_storage, cartItems);
    } catch (error) {
        throw new Error("Erro ao adicionar item ao carrinho: " + error);
    }
}


export async function removeItemFromCart(itemId: string): Promise<void> {
    try {
        const cartItems = await getCartItems();
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        await saveToStorage(key_cart_storage, updatedCartItems);
    } catch (error) {
        throw new Error("Erro ao remover item do carrinho: " + error);
    }
}


export async function clearCart(): Promise<void> {
    try {
        await AsyncStorage.removeItem(key_cart_storage);
    } catch (error) {
        throw new Error("Erro ao limpar o carrinho: " + error);
    }
}
