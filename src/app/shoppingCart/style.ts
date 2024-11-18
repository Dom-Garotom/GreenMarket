import { color } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
      backgroundColor: color.green.bg,
      flex: 1,
      padding: 20,
      paddingBottom: 0,
      gap: 0,
    },
  
    title: {
      fontSize: 32,
      fontWeight: '800',
      color: color.green[500],
      textAlign: 'center',
      flex: 1,
    },
  
    containerHeader: {
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent:"space-between",
      alignItems:"center",
      paddingTop:18,
    },
  
  })
  