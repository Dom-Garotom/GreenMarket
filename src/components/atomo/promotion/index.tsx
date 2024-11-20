import { color } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    path: Href
    text: string
    porcent: string
}

export default function Promotion( { porcent , path , text} : Props) {
  return (
    <TouchableOpacity style={styles.containerAds} activeOpacity={0.6} onPress={() => router.push(path)}>
      <Text style={styles.containerAds_porcent}>{porcent}%</Text>
      <Text style={styles.containerAds_titulo}>{text}</Text>

      <TouchableOpacity style={styles.containerAds_button}>
        <MaterialIcons name='arrow-right-alt' size={30} />
      </TouchableOpacity>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    containerAds: {
        flexDirection: 'row',
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 16,
        backgroundColor: "black",
        alignItems: 'center',
        gap:22,
        height: 97,
      },
    
      containerAds_titulo: {
        fontSize: 16,
        fontWeight: '600',
        maxWidth: 159,
        color: color.green[100]
      },

      containerAds_porcent: {
        fontSize: 36,
        fontWeight: '800',
        maxWidth: 259,
        color: color.green[100],
      },

      containerAds_button:{
        backgroundColor:"white",
        padding: 6,
        borderRadius: 8,
      },
    
})