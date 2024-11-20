import { MaterialIcons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

type props = TouchableOpacityProps & {
    path?: Href;
    position_left?: number;
    position_rigth?: number;
    position_bottom?: number;
    position_top?: number;
}

export default function ButtonBack({ position_rigth, position_left, position_bottom, position_top, path, ...prop }: props) {
    return (
        <TouchableOpacity {...prop}
            style={[
                styles.buttonBack,
                {
                    left: position_left,
                    right: position_rigth,
                    bottom: position_bottom,
                    top: position_top
                }
            ]}
            onPress={() => path ? router.navigate(path) : router.back()}
        >
            <MaterialIcons name='arrow-back' size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBack: {
        position: 'absolute',
        justifyContent: "center",
        left: 20,
        top: 24,
        width: 40,
        height: 40,
        zIndex: 10,
    },
})  