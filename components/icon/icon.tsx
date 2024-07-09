import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function MoreIcon() {
  return (
    <Image style={styels.more} source={require('../../assets/dots.svg')}></Image>
  )
}

const styels = StyleSheet.create({
  more: {
    width: 3,
    height: 16
  }
})

export default { MoreIcon }