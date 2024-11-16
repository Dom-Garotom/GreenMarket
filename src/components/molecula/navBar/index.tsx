import { SafeAreaView, StyleSheet} from 'react-native'
import ButtonIten from '../../atomo/buttonIten'
import { color } from '@/src/styles/colors'
import { router } from 'expo-router'
type Props ={
    selected : "home" | "myPlant" | "market" | "person"
}

export default function NavBar( { selected } : Props) {
    return (
        <SafeAreaView style={styles.navBar}>
            <ButtonIten   select={selected === "home" && true}    icon="home" size={15} onPress={() => router.push("/")} />
            <ButtonIten   select={selected === "myPlant" && true}    icon="eco" size={15} onPress={() => router.push("/myPlants")}/>
            <ButtonIten   select={selected === "market" && true}    icon="local-grocery-store" size={15} onPress={() => router.push("/marketPlace")} />
            <ButtonIten   select={selected === "person" && true}    icon="person" size={15}  onPress={() => router.push("/")} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navBar:{
      backgroundColor: color.green[200],
      height: 62,
      flexDirection: "row",
      justifyContent:"space-between",
      alignItems: 'center',
      paddingHorizontal: 24,
      position: 'static',
      bottom: 0,
      left: 0 , 
      right: 0,
    }
  })
  
