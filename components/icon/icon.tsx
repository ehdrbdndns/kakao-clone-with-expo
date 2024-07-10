import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function MoreIcon() {
  return (
    <Image style={styels.more} source={require('../../assets/dots.svg')}></Image>
  )
}

export function RightChevronIcon() {
  return (
    <Image style={styels.rightChevron} source={require('../../assets/chevron/right.svg')}></Image>
  )
}

const styels = StyleSheet.create({
  more: {
    width: 3,
    height: 16
  },
  rightChevron: {
    width: 4,
    height: 7
  }
})

export default { MoreIcon }