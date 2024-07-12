import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export function MoreIcon() {
  return (
    <Image style={styles.more} source={require('../../assets/dots.svg')}></Image>
  )
}

export function RightChevronIcon() {
  return (
    <Image style={styles.rightChevron} source={require('../../assets/chevron/right.svg')}></Image>
  )
}

export function KakaoBankLogo() {
  return (
    <Image style={styles.kakaoBank} source={require('../../assets/kakaobank_logo.svg')} />
  )
}

export function GreyDot() {
  return <Image style={styles.dot} source={require('../../assets/grey_dot.svg')} />
}

export function DarkDot() {
  return <Image style={styles.dot} source={require('../../assets/dark_dot.svg')}></Image>
}

export function Profile() {
  return <Image style={styles.profile} source={require('../../assets/profile.svg')} />
}

const styles = StyleSheet.create({
  more: {
    width: 3,
    height: 16
  },
  rightChevron: {
    width: 4,
    height: 7
  },
  dot: {
    width: 6,
    height: 6
  },
  kakaoBank: {
    width: 44,
    height: 44
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 18,
  }
})

export default { MoreIcon }