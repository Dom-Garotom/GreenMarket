import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image,  Text, TouchableOpacity, View } from 'react-native';
import BUttonCount from '../../atomo/buttonCount';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { styles } from './style';

type Props = {
  species: string;
  price: Float;
  quantity: number;
  image: any ,
  increaseItem : () => void;
  decreaseItem : () => void;
  removeItem : () => void;
};

export default function CartItem({ price, species, decreaseItem , image , quantity , increaseItem , removeItem }: Props) {

  return (
    <View style={styles.containerItem}>
      <Image
        style={styles.containerItem_image}
        source={image}
      />

      <View style={styles.containerItem_content}>
        <View style={styles.containerItem_Content_texto}>
          <View>
            <Text style={styles.containerItem_Content_titulo}>{species}</Text>
            <Text style={styles.containerItem_Content_subtitulo}>
              ${price}
            </Text>
          </View>

          <TouchableOpacity onPress={removeItem}>
            <MaterialIcons name="close" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerItem_ButtonContainer}>
          <BUttonCount direction="arrow-left" onPress={decreaseItem} />

          <View style={styles.containerItem_quantidade}>
            <Text>{quantity}</Text>
          </View>

          <BUttonCount direction="arrow-right" onPress={increaseItem} />
        </View>
      </View>
    </View>
  );
}
