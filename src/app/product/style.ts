import { color } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
      padding: 20,
      flex: 1,
      backgroundColor: color.green.bg,
    },
  
    header: {
      flexDirection: 'row',
      maxHeight: 50,
      height: "100%",
      alignItems: 'center',
      justifyContent: 'space-between'
    },
  
    header_title: {
      fontSize: 24,
      fontWeight: '500',
    },
  
    image_content: {
      maxHeight: 300,
      maxWidth: 500,
      width: "100%",
      height: "100%",
      borderRadius: 16,
      marginVertical: 16,
    },
  
  
    info_container: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between",
      paddingRight: 5,
      marginBottom: 16,
    },
  
    nameProduct: {
      fontSize: 18,
      fontWeight: '500',
      color: color.gray[800]
    },
  
    speciesProduct: {
      color: color.gray[500]
    },
  
    priceProduct: {
      fontSize: 20,
      fontWeight: '600',
    },
  
  
    description: {
      flex: 1,
    },
  
    actions_container: {
      gap: 4,
      flexDirection: 'row',
    },
  
    button: {
      flex: 1,
      borderRadius: 8,
      height: 45,
      alignItems: 'center',
      backgroundColor: "black",
      justifyContent: 'center',
    },
  })
  