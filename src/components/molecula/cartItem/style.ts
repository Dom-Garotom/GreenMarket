import { color } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerItem: {
      flexDirection: 'row',
      gap: 10,
      marginVertical: 5,
    },
    containerItem_image: {
      width: 165,
      height: 159,
      borderRadius: 7,
    },
    containerItem_content: {
      width: 165,
      height: 159,
      justifyContent: 'space-between',
    },
    containerItem_Content_texto: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    containerItem_Content_titulo: {
      fontSize: 20,
      fontWeight: '600',
      color: color.green[500],
    },
    containerItem_Content_subtitulo: {
      fontSize: 16,
      fontWeight: '400',
      color: color.gray[400],
    },
    containerItem_ButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    containerItem_quantidade: {
      width: 51,
      height: 42,
      borderRadius: 9,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerItem_buttonQuantidade: {
      width: 46,
      height: 42,
      borderRadius: 9,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  