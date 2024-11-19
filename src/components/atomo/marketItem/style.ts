import { color } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },

    containerItem_itemImage: {
        width: 165,
        height: 157,
        backgroundColor: "black",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    containerItem_itemContent: {
        padding: 13,
        gap: 16,
        backgroundColor: "white",
        width: 165,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    containerItem_itemContent_titulo: {
        fontSize: 14,
        fontWeight: '600',
        color: color.green[500],
    },

    containerItem_itemContent_subtitulo: {
        fontSize: 10,
        fontWeight: '400',
        color: color.gray[400],
    },

    containerItem_itemContent_containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})