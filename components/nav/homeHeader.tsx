import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

const imageSourceDict = {
  logo: require('../../assets/ic_kakaopay_logo.png'),
  search: require('../../assets/header/search.svg'),
  setting: require('../../assets/header/setting.svg'),
  notification: require('../../assets/header/notifycation.svg'),
}

export default function HomeHeader(props: BottomTabHeaderProps) {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Left */}
        <TouchableOpacity activeOpacity={1} style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={imageSourceDict['logo']}
          />
        </TouchableOpacity>
        {/* Right */}
        <View style={styles.nav}>
          <TouchableOpacity style={styles.icon}>
            <Image
              style={{ width: 17, height: 17 }}
              source={imageSourceDict['search']}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image
              style={{ width: 16, height: 20.2 }}
              source={imageSourceDict['notification']}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.icon]}>
            <Image
              style={{ width: 19, height: 19 }}
              source={imageSourceDict['setting']}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    width: 330,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoWrapper: {
    width: 120,
    height: 29,
  },
  logo: {
    width: 61,
    height: 29
  },
  nav: {
    flexDirection: 'row'
  },
  icon: {
    width: 48,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
})