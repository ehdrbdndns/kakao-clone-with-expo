import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { backgroundColors, colors, fonts, style } from "../../themes/styles";
import { PropsWithChildren } from "react";
import { Image } from "expo-image";

export type InfoProps = PropsWithChildren<{ style?: StyleProp<ViewStyle> }>

export default function Info(props: InfoProps) {
  return (
    <View style={style.relative}>
      <View style={[style.borderRad8, style.h21, style.ph8, style.centralize, backgroundColors.LIGHT_BLUE, props.style]}>
        <Text style={[fonts.DETAIL2_REGULAR, colors.BLUE]}>{props.children}</Text>
      </View >
      <Image
        style={custom.tail}
        source={require('../../assets/info_tail.svg')} />
    </View>
  )
}

const custom = StyleSheet.create({
  tail: {
    position: 'absolute',
    width: 14,
    height: 4,
    left: '50%',
    bottom: 0,
    transform: [{ translateX: -6 }, { translateY: 4 }]
  }
})