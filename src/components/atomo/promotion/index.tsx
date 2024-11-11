import { color } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    path: string
    text: string
}

export default function Promotion( {path , text} : Props) {
  return (
    <TouchableOpacity style={styles.containerAds} activeOpacity={0.6} onPress={() => router.push(path)}>
      <Text style={styles.containerAds_titulo}>{text}</Text>
      <MaterialIcons name='arrow-right-alt' size={30} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    containerAds: {
        flexDirection: 'row',
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 14,
        backgroundColor: "#B9B0F2",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 97,
      },
    
      containerAds_titulo: {
        fontSize: 24,
        fontWeight: '800',
        color: color.green[500],
        maxWidth: 259,
      }
    
})