import { MaterialIcons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

type props = TouchableOpacityProps &{
    path?:Href
}

export default function ButtonBack( {path , ...prop}:props) {
    return (
        <TouchableOpacity {...prop} style={styles.buttonBack} onPress={() => path ? router.navigate(path) : router.back()}>
            <MaterialIcons name='arrow-back' size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBack:{
        position:'absolute',
        justifyContent:"center",
        left: 20,
        top: 24,
        width: 40,
        height: 40,
        zIndex: 10,
    },
})