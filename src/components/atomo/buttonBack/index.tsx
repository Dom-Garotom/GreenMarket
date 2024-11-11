import { MaterialIcons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

type props ={
    path?:Href<string | object>
}

export default function ButtonBack( {path}:props) {
    return (
        <TouchableOpacity style={styles.buttonBack} onPress={() => path ? router.push(path) : router.back()}>
            <MaterialIcons name='arrow-back' size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBack:{
        position:'absolute',
        left: 20,
        top: 24
    },
})